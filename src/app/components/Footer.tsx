// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    // Removendo a classe 'bg-gray-800' para que ele herde a cor de fundo
    <footer className="text-white p-4 text-center">
      <p className="text-sm">
        &copy; 2025 Marcos Gabriel | Todos os direitos reservados.
      </p>
    </footer>
  );
}

export default Footer;