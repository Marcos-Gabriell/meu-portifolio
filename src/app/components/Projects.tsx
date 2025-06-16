'use client';

import { useEffect, useState } from 'react';

const USERNAME = 'Marcos-Gabriell';
const destaques = [
  'Microsservicos-SpringBoot-RabbitMQ',
  'testes-api',
  'spring-Crypto',
  'BlueTasks',
  'BlueFood',
  'os-backend',
  'helpdesk-frontend',
  'Spring-ponto-de-venda',
  'Spring-rest-microsevices',
  'api-rest-my-first'
];

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
};

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    async function fetchRepos() {
      const results = await Promise.all(
        destaques.map(async (repo) => {
          const res = await fetch(`https://api.github.com/repos/${USERNAME}/${repo}`);
          return res.ok ? (await res.json()) as Repo : null;
        })
      );
      setRepos(results.filter((r): r is Repo => r !== null));
    }

    fetchRepos();
  }, []);

  return (
    <section className="py-10 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white text-center">Projetos</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo) => (
          <div key={repo.id} className="bg-zinc-900 p-6 rounded-lg">
            <h3 className="text-xl text-white font-semibold mb-2">{repo.name}</h3>
            <p className="text-gray-400 mb-3">
              {repo.description || 'Sem descrição disponível.'}
            </p>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Ver no GitHub
            </a>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href={`https://github.com/${USERNAME}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Ver todos os projetos
        </a>
      </div>
    </section>
  );
}
