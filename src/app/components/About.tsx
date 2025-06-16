export default function About() {
  return (
    <section className="max-w-4xl mx-auto py-10 px-6 sm:px-6 md:px-8 text-white">
      <h2 className="text-3xl font-bold mb-6 text-center md:text-left">Sobre Mim</h2>
      <div className="text-justify sm:text-left space-y-5 text-base sm:text-lg leading-relaxed">
        <p>
          Sou <strong>Marcos Gabriel</strong>, desenvolvedor Full Stack focado em criar aplicações web robustas, escaláveis e seguras.
          Tenho experiência com <strong>Java + Spring Boot</strong> e <strong>Angular + TypeScript</strong>, além de um ecossistema completo com APIs REST/gRPC,
          Kafka, RabbitMQ, Docker, Kubernetes e muito mais.
        </p>
        <p>
          Formado como Técnico em Desenvolvimento de Sistemas pelo Senac, atualmente curso Análise e Desenvolvimento de Sistemas na Unijorge.
          Me mantenho em constante evolução com bootcamps como Full Cycle, DIO, Udemy e Softblue.
        </p>
        <p>
          Apaixonado por inovação e qualidade, aplico boas práticas, arquitetura limpa e testes em todos os projetos.
          Meus interesses incluem Arquiteturas modernas (Clean, Hexagonal), TDD, Testcontainers, gRPC, API Gateway e segurança com OAuth2,
          Keycloak e Vault.
        </p>
      </div>
    </section>
  );
}
