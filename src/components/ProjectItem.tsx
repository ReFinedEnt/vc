import { FC } from "react";
import { v4 as uuidv4 } from "uuid";
// import projectInterface from '../constants/projectInterface';

interface Project {
  id: number;
  title: string;
  status: string;
  description: string;
  note: string | null;
  blockchain: string;
  stack: Array<string>;
  imageUrl: string;
  github?: string | null;
  link: string;
  twitter?: string | null;
}

type Props = {
  project: Project;
};

type Status = "paused" | "wip" | "done";

const ProjectItem: FC<Props> = ({ project }) => {
  //   console.log(project);
  const {
    title,
    status,
    description,
    note,
    blockchain,
    stack,
    imageUrl,
    github,
    link,
    twitter,
  } = project;
  return (
    <div className="card w-96 bg-base-300 text-white shadow-xl mx-auto border-2 border-white">
      <figure>
        <a href={`${link}`}>
          <img src={`${imageUrl}`} alt={`${title}`} />
        </a>
      </figure>

      <div className="card-body">
        <div className="container grow">
          <h2 className="w-full mb-4 text-xl text-center text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195] font-bold">
            {title}
          </h2>
          <div className="text-sm">
            status :{" "}
            <span
              className={`badge ${
                status === "done 🎉"
                  ? "badge-success"
                  : status === "paused"
                  ? "badge-warning"
                  : "badge-secondary"
              }`}
            >
              {status}
            </span>
          </div>
          <div className="py-2 text-sm">{description}</div>
          <div className="mb-2 text-sm">note : {note}</div>
          <div className="mb-2 text-sm">
            chain :{" "}
            <span className="text-transparent text-bold bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
              {blockchain}
            </span>
          </div>
          <ul className="mb-2 text-sm">
            stack :
            <div className="mt-1">
              {stack.map((element) => {
                return (
                  <li className="pl-3 workshop" key={`${uuidv4()}`}>
                    {element}
                  </li>
                );
              })}
            </div>
          </ul>
        </div>
        <div className="flex w-100 justify-center items-center space-x-4 relative bottom-0">
          {github && (
            <a href={`${github}`} target="_blank" rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z"></path>
              </svg>
            </a>
          )}
          <a href={status !== "done 🎉" ? `` : `${link}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
          </a>
          {twitter && (
            <a href={`${twitter}`} target="_blank" rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
