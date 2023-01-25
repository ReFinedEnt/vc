import { FC } from "react";

import ProjectItem from "./ProjectItem";

const Portfolio: FC = (props) => {
  const projectsArr = [
    {
      id: 1,
      title: "NFT Unrekt",
      status: "done 🎉",
      description: "Got rekted in NFTs too many times ? Use the NFT Unrekt 😉",
      note: "Original content by XBorg, all rights reserved.",
      blockchain: "Chain Agnostic",
      stack: ["Javascript", "Node.js", "React", "Tailwindcss"],
      imageUrl:
        "https://raw.githubusercontent.com/EsyWin/unrekt/main/public/pepe.png",
      github: "https://github.com/krk-finance/unrekt",
      link: "https://unrekt.vercel.app/",
    },
    {
      id: 2,
      title: "Discord Bot : Crypto Ticker",
      status: "done 🎉",
      description: "Track your favorite crypto prices from within Discord",
      note: "Free Open-Source Software, feel free to host your own !",
      blockchain: "Chain Agnostic",
      stack: ["Javascript", "Node.js", "Discord.js", "Coingecko API", "Docker"],
      imageUrl:
        "https://raw.githubusercontent.com/EsyWin/cdn/main/krk.finance/assets/img/ticker_big.png",
      github: "https://github.com/krk-finance/discordjs-crypto-ticker",
      link: "/bots",
    },
    {
      id: 3,
      title: "Color Theorycraft",
      status: "done 🎉",
      description:
        "A Tool to pick relational colors altogether - still some bugs.",
      note: "Based upon LoopX tweet about color theorycrafting",
      blockchain: "Chain Agnostic",
      stack: [
        "Javascript",
        "Node.js",
        "Typescript",
        "React",
        "Next.js",
        "CSS",
        "Tailwindcss",
        "Vercel",
      ],
      imageUrl:
        "https://raw.githubusercontent.com/EsyWin/cdn/main/krk.finance/assets/theorycraft.png",
      link: "https://krk.finance/colors",
      twitter: "https://twitter.com/LoopxNFT/status/1612219767355572225",
    },
    {
      id: 4,
      title: "NFT DAO",
      status: "WIP",
      description: "Jpeg governance with solana labs governance program",
      note: "Slow & organic community growth, supply of 1337 mfers.",
      blockchain: "Solana",
      stack: ["Rust", "Metaplex", "SugarCLI", "Realms"],
      imageUrl:
        "https://raw.githubusercontent.com/EsyWin/cdn/main/krk.finance/assets/img/disbot_light.png",
      github: "#",
      link: "#",
    },
    {
      id: 5,
      title: "Fedscrap",
      status: "WIP",
      description: "US Federal Reverse Net Liquidity",
      note: "Back-End & Front-End almost done, Discord Bot left to do!",
      blockchain: "Chain Agnostic",
      stack: [
        "Typescript",
        "Node.js",
        "Nest.js",
        "Supabase",
        "React",
        "Next.js",
        "Python",
        "Selenium",
        "Redis",
        "Docker",
      ],
      imageUrl:
        "https://raw.githubusercontent.com/EsyWin/cdn/main/krk.finance/assets/img/disbot_light.png",
    },

    {
      id: 6,
      title: "NFT PvP Game",
      description:
        "We're making a Blockchain Game while learning Solidity, Unity and C#",
      status: "paused",
      note: "Started on 'Moralis x Cronos' hackathon",
      blockchain: "EVM",
      stack: [
        "Typescript",
        "Node.js",
        "Solidity",
        "Hardhat",
        "C#",
        "Unity",
        "Nakama",
        "Docker",
      ],
      imageUrl:
        "https://raw.githubusercontent.com/EsyWin/cdn/main/krk.finance/assets/img/disbot_light.png",
    },
    {
      id: 7,
      title: "NFT Marketplace",
      description: "On-chain NFT marketplace that pay his token holders.",
      status: "paused",
      note: "Deployed, needs testing.",
      blockchain: "Hedera EVM",
      stack: ["Typescript", "Node.js", "Jest", "Solidity", "Hardhat"],
      imageUrl:
        "https://raw.githubusercontent.com/EsyWin/cdn/main/krk.finance/assets/img/disbot_light.png",
    },
    {
      id: 8,
      title: "Dividend Token",
      description:
        "A token that let his holders claim a share of revenue split equally.",
      status: "paused",
      note: "Deployed, needs testing.",
      blockchain: "Hedera EVM",
      stack: ["Typescript", "Node.js", "Jest", "Solidity", "Hardhat"],
      imageUrl:
        "https://raw.githubusercontent.com/EsyWin/cdn/main/krk.finance/assets/img/disbot_light.png",
    },
    {
      id: 9,
      title: "Discord Bot : NFT verify",
      status: "paused",
      description: "Discord bot to grant roles based on user token holdings",
      note: "Has to be free to setup and to use : whole point !",
      blockchain: "Solana",
      stack: ["Typescript", "Slappey", "NestJS", "PostgreSQL", "React"],
      imageUrl:
        "https://raw.githubusercontent.com/EsyWin/cdn/main/krk.finance/assets/img/disbot_light.png",
    },
    {
      id: 10,
      title: "Discord Bot : Google Calendar",
      status: "paused",
      description:
        "Discord bot to sync Google Calendar with Discord scheduled events new feature",
      note: "finishing after ongoing Moralis x Cronos Hackathon",
      blockchain: "Chain Agnostic",
      stack: ["Typescript", "Slappey", "NestJS", "PostgreSQL", "React"],
      imageUrl:
        "https://raw.githubusercontent.com/EsyWin/cdn/main/krk.finance/assets/img/disbot_light.png",
      github: "https://github.com/krk-finance/discordjs-google-calendar",
    },
    {
      id: 11,
      title: "Watchbar",
      status: "paused",
      description: "Analytics tooling for Hedera ecosystem",
      note: "expensive infra",
      blockchain: "Hedera EVM",
      stack: [
        "JavaScript",
        "Node.js",
        "Google Cloud",
        "InfluxDB",
        "Grafana",
        "Docker",
      ],
      imageUrl:
        "https://raw.githubusercontent.com/EsyWin/cdn/main/krk.finance/assets/img/disbot_light.png",
      github: "https://github.com/EsyWin/watchbar",
      link: "https://www.watchbar.space/",
    },
    {
      id: 12,
      title: "Deso Fren",
      status: "paused",
      description:
        "Simple analytics tool to match minimal wage in $DESO diamonds worldwide",
      note: "going to zero (not FA)",
      blockchain: "Deso",
      stack: ["Javascript", "Coingecko API", "React"],
      imageUrl:
        "https://raw.githubusercontent.com/EsyWin/cdn/main/krk.finance/assets/img/disbot_light.png",
      github: "https://github.com/EsyWin/deso-fren/",
      link: "https://deso-fren.vercel.app/",
    },
  ];
  return (
    <div className="container sm:mb-44 lg:mb-44 w-full">
      <div className="w-full bg-base-300 rounded-xl border-2 border-white flex flex-col justify-center items-center mb-2">
        <h1 className="py-2 text-3xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#14F195] to-[#9945FF] w-100">
          Stuff we do.
        </h1>
        {/* <p className="pb-2 text-sm text-white z-[999] bg-base-300 p-1 rounded">
          It ain&apos;t much, but it&apos;s honest work.
        </p> */}
      </div>

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
