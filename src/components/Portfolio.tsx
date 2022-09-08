import { FC } from 'react';

import ProjectItem from './ProjectItem';

const Portfolio: FC = (props) => {
  const projectsArr = [
    {
      id: 1,
      title: 'Watchbar',
      status: 'paused',
      description: 'Analytics tooling for Hedera ecosystem',
      note: 'expensive infra',
      blockchain: 'Hedera',
      stack: [
        'JavaScript',
        'Node.js',
        'Google Cloud',
        'InfluxDB',
        'Grafana',
        'Docker',
      ],
      imageUrl: 'aaa',
      github: 'https://github.com/EsyWin/watchbar',
      link: 'https://www.watchbar.space/',
    },
    {
      id: 2,
      title: 'NFT DAO',
      status: 'paused',
      description: 'Jpeg governance with solana labs governance program',
      note: 'organic community growth',
      blockchain: 'Solana',
      stack: ['Rust', 'sugarCLI', 'realms.today'],
      imageUrl: 'aaa',
      github: '#',
      link: '#',
    },
    {
      id: 3,
      title: 'Moralis x Cronos Hackathon',
      description: "We're making a game learning Unity and C# from zero",
      status: 'wip',
      note: 'deadline 15th September',
      blockchain: 'Cronos',
      stack: [
        'C#',
        'Unity',
        'Nakama',
        'Docker',
        'Typescript',
        'Solidity',
        'Hardhat',
      ],
      imageUrl: 'aaa',
      github: '#',
      link: '#',
    },
    {
      id: 4,
      title: 'Discord Bot : NFT verify',
      status: 'half-way',
      description: 'Discord bot to grant roles based on user token holdings',
      note: 'after NFT DAO mint',
      blockchain: 'Solana',
      stack: ['Typescript', 'Slappey', 'NestJS', 'PostgreSQL', 'React'],
      imageUrl: 'aaa',
      github: '',
      link: '#',
    },
    {
      id: 5,
      title: 'Discord Bot : Google Calendar',
      status: 'half-way',
      description:
        'Discord bot to sync Google Calendar with Discord scheduled events new feature',
      note: 'finishing after ongoing Moralis x Cronos Hackathon',
      blockchain: 'Chain Agnostic',
      stack: ['Typescript', 'Slappey', 'NestJS', 'PostgreSQL', 'React'],
      imageUrl: 'aaa',
      github: 'https://github.com/EsyWin/discord-google-calendar',
      link: '#',
    },
    {
      id: 6,
      title: 'Deso Fren',
      status: 'abandonned',
      description:
        'Simple analytics tool to match minimal wage in $DESO diamonds worldwide',
      note: 'going to zero (not FA)',
      blockchain: 'Deso',
      stack: ['Javascript', 'Coingecko REST API', 'React'],
      imageUrl: 'aaa',
      github: 'https://github.com/EsyWin/deso-fren/',
      link: 'https://deso-fren.vercel.app/',
    },
  ];
  return (
    <div className="container sm:mb-44 lg:mb-0">
      <h1 className="mb-5 text-3xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195] w-100">
        Workshops
      </h1>
      <div className="grid gap-4 grid-cols-1 grid-rows-1 md:gap-4 md:grid-cols-3 md:grid-rows-3">
        {projectsArr.map((project) => {
          // console.log(project);
          return <ProjectItem key={project.id} project={project} />;
        })}
      </div>
    </div>
  );
};

export default Portfolio;
