import Image from "next/image";

export default function Header() {
  return (
    <section className="flex flex-col items-center justify-center text-center gap-6 py-24 bg-black">
      <div className="relative w-[200px] h-[200px] rounded-full p-[3px] hover:shadow-[0_0_40px_#0038A8] transition duration-300 md:w-[300px] md:h-[300px]" style={{
          background: 'conic-gradient(at top left, #7B00FF  0%, #0038A8 15%, #FF00C8 28%, #0038A8 35%, #0038A8 100%)'
        }}>
        <div className="w-full h-full rounded-full bg-black overflow-hidden relative">
          <Image
            src="/img.PNG"
            alt="Foto de perfil de Marcos Gabriel"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
            priority={true}
          />
        </div>
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-4">
        Marcos Gabriel
      </h1>
      <h2 className="text-lg font-medium text-[#cbd5e1] -mt-2">
        Desenvolvedor Full-Stack
      </h2>

      <p className="max-w-2xl text-gray-400 px-4 leading-relaxed text-center">
        Sou desenvolvedor Full Stack focado em desenvolvimento web com Java,
        Spring Boot e Angular, criando aplicações robustas, escaláveis e
        seguras. Tenho experiência prática em arquitetura de software, boas
        práticas e trabalho em equipe para entregar soluções de alta qualidade.
      </p>

      <a
        href="Marcos.pdf"
        className="inline-flex items-center gap-2 bg-[#0038A8] px-6 py-2 rounded-lg text-white font-semibold shadow-md transition duration-300 ease-in-out hover:bg-[#041A44] hover:brightness-110"
      >
        <i className="fa-solid fa-file-arrow-down"></i> Baixar Currículo
      </a>

      <div className="flex gap-6 pt-4 text-white">
        <a
          href="https://github.com/Marcos-Gabriell"
          className="hover:text-[#0038A8] transition"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github text-2xl"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/marcosgabriel-dev/"
          className="hover:text-[#0038A8] transition"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin text-2xl"></i>
        </a>
      </div>

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
      />
    </section>
  );
}
