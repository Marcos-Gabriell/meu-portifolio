"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [apiError, setApiError] = useState("");

  function formatTelefone(value: string) {
    let v = value.replace(/\D/g, "");
    if (v.length > 11) v = v.slice(0, 11);

    if (v.length > 6) {
      return `(${v.slice(0, 2)}) ${v.slice(2, 7)}-${v.slice(7)}`;
    } else if (v.length > 2) {
      return `(${v.slice(0, 2)}) ${v.slice(2)}`;
    } else if (v.length > 0) {
      return `(${v}`;
    }
    return "";
  }

  function validate() {
    const newErrors: Record<string, string> = {};

    if (!form.nome.trim()) {
      newErrors.nome = "O nome é obrigatório.";
    } else if (form.nome.trim().length < 3 || form.nome.trim().length > 15) {
      newErrors.nome = "O nome deve ter entre 3 e 15 letras.";
    }

    if (!form.email.trim()) {
      newErrors.email = "O email é obrigatório.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.email)) {
        newErrors.email = "Formato de email inválido.";
      }
    }

    const telefoneNumeros = form.telefone.replace(/\D/g, "");
    if (!telefoneNumeros) {
      newErrors.telefone = "O telefone é obrigatório.";
    } else if (telefoneNumeros.length !== 11) {
      newErrors.telefone = "O telefone deve conter 11 dígitos.";
    }

    if (!form.mensagem.trim()) {
      newErrors.mensagem = "A mensagem é obrigatória.";
    } else if (
      form.mensagem.trim().length < 5 ||
      form.mensagem.trim().length > 200
    ) {
      newErrors.mensagem = "A mensagem deve ter entre 5 e 200 caracteres.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    if (name === "telefone") {
      const formatted = formatTelefone(value);
      setForm((prev) => ({ ...prev, [name]: formatted }));
    } else {
      // Adição da lógica de truncagem para a mensagem
      if (name === "mensagem" && value.length > 200) {
        setForm((prev) => ({ ...prev, [name]: value.slice(0, 200) }));
      } else {
        setForm((prev) => ({ ...prev, [name]: value }));
      }
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setApiError("");
    setSuccessMsg("");

    if (!validate()) return;

    setLoading(true);
    try {
      const response = await fetch("https://envio-de-email-portifolio.onrender.com/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: form.nome.trim(),
          email: form.email.trim(),
          phone: form.telefone.replace(/\D/g, ""),
          mensagem: form.mensagem.trim(),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Erro ao enviar o formulário");
      }

      setSuccessMsg("Mensagem enviada com sucesso!");
      setForm({ nome: "", email: "", telefone: "", mensagem: "" });
      setErrors({});
    } catch (error: unknown) {
      if (error instanceof Error) {
      setApiError(error.message);
      } else {
      setApiError("Erro inesperado.");
     }
  }
 finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-10 px-4">
      <div className="max-w-2xl mx-auto bg-black p-6 sm:p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white text-center">
          Contato
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid gap-4 sm:gap-6"
          noValidate
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <input
                type="text"
                name="nome"
                placeholder="Nome"
                value={form.nome}
                onChange={handleChange}
                className={`bg-zinc-800 p-3 sm:p-4 rounded-2xl text-white w-full ${
                  errors.nome ? "border border-red-500" : ""
                }`}
              />
              {errors.nome && (
                <p className="text-red-500 text-sm mt-1">{errors.nome}</p>
              )}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className={`bg-zinc-800 p-3 sm:p-4 rounded-2xl text-white w-full ${
                  errors.email ? "border border-red-500" : ""
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
          </div>
          <div>
            <input
              type="tel"
              name="telefone"
              placeholder="Número de telefone"
              value={form.telefone}
              onChange={handleChange}
              maxLength={15}
              className={`bg-zinc-800 p-3 sm:p-4 rounded-2xl text-white w-full ${
                errors.telefone ? "border border-red-500" : ""
              }`}
            />
            {errors.telefone && (
              <p className="text-red-500 text-sm mt-1">{errors.telefone}</p>
            )}
          </div>
          <div>
            <textarea
              name="mensagem"
              placeholder="Sua mensagem"
              rows={4}
              value={form.mensagem}
              onChange={handleChange}
              maxLength={200} // <<< ADICIONADO AQUI
              className={`bg-zinc-800 p-3 sm:p-4 rounded-2xl text-white w-full resize-none ${
                errors.mensagem ? "border border-red-500" : ""
              }`}
            />
            {errors.mensagem && (
              <p className="text-red-500 text-sm mt-1">{errors.mensagem}</p>
            )}
            {/* Opcional: Contador de caracteres */}
            <p className="text-gray-400 text-xs mt-1 text-right">
              {form.mensagem.length} / 200 caracteres
            </p>
          </div>

          {apiError && <p className="text-red-500 text-center">{apiError}</p>}
          {successMsg && (
            <p className="text-green-500 text-center font-semibold">
              {successMsg}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-2xl font-medium transition mx-auto w-full sm:w-fit ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Enviando..." : "Enviar Mensagem"}
          </button>
        </form>
      </div>
    </section>
  );
}