// src/app/components/Skills.tsx

import {
  SiSpringboot,
  SiAngular,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiBootstrap,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiKubernetes,
  SiRabbitmq,
  SiApachekafka,
  SiDocker,
  SiNestjs,
  SiTailwindcss,
  SiGo,
  SiNodedotjs,
  SiFlux,
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';

const iconsMap: { [key: string]: React.ElementType } = {
  Java: DiJava,
  SpringBoot: SiSpringboot,
  Angular: SiAngular,
  React: SiReact,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Bootstrap: SiBootstrap,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Kubernetes: SiKubernetes,
  RabbitMQ: SiRabbitmq,
  Kafka: SiApachekafka,
  Docker: SiDocker,
  NestJS: SiNestjs,
  TailwindCSS: SiTailwindcss,
  Go: SiGo,
  NodeJS: SiNodedotjs,
  SpringSecurity: SiSpringboot, // substituto representativo
  GitOps: SiFlux,               // substituto baseado em ferramenta Flux
};

const skills = Object.keys(iconsMap);

export default function Skills() {
  return (
    <section className="py-10 px-4 text-center bg-black">
      <h2 className="text-3xl font-bold mb-10 text-white">Habilidades</h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {skills.map((skill) => {
          const Icon = iconsMap[skill];
          return (
              <div
              key={skill}
              className="flex flex-col items-center text-gray-300 hover:text-[#0038A8] transition-colors"
              >
              <Icon className="text-5xl mb-2" />
              <span className="text-sm">{skill}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
