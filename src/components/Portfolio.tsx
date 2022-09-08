import { FC } from 'react';

import ProjectItem from './ProjectItem';

const Portfolio: FC = (props) => {
  const projectsArr = [
    {
      id: 1,
      title: 'Watchbar',
      status: 'paused',
      note: 'expensive infra',
      blockchain: 'Hedera',
      stack: ['JavaScript', 'Node.js', 'Google Cloud', 'InfluxDB', 'Grafana'],
      imageUrl: 'aaa',
      github: 'https://github.com/EsyWin/watchbar',
      link: 'https://www.watchbar.space/',
    },
    {
      id: 2,
      title: 'NFT DAO',
      status: 'paused',
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
      status: 'wip',
      note: 'deadline 15th September',
      blockchain: 'Cronos',
      stack: ['C#', 'Unity', 'Solidity', 'Hardhat'],
      imageUrl: 'aaa',
      github: '#',
      link: '#',
    },
    {
      id: 4,
      title: 'Discord Bot : NFT verify',
      status: 'half-way',
      note: '',
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
      note: '',
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
      note: '',
      blockchain: 'Deso',
      stack: ['Javascript', 'Coingecko REST API', 'React'],
      imageUrl: 'aaa',
      github: 'https://github.com/EsyWin/deso-fren/',
      link: 'https://deso-fren.vercel.app/',
    },
  ];
  return (
    <div className="container workshop">
      <h1 className="mb-5 text-3xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195] w-100">
        Workshops
      </h1>
      <div className="container grid gap-4 grid-cols-3 grid-rows-3 md:gap-4 md:grid-rows-3">
        {projectsArr.map((project) => {
          // console.log(project);
          return <ProjectItem key={project.id} project={project} />;
        })}
      </div>
    </div>
  );
};

export default Portfolio;
