import { FC } from 'react';

export const Footer: FC = () => {
  return (
    <div className="absolute border-t-2 border-white z-50  bottom-0 w-screen">
      <footer className="mx-auto  flex flex-row p-2 text-center justify-center items-center footer bg-black text-white">
        <div className="ml-5 text-white font-bold">
          Refined Entrprised LLC. &copy; 2021-{new Date().getFullYear()}
        </div>
        <div className="max-w-md text-center flex align-center justify-center items-center mx-auto pr-10 space-x-2"></div>

        <div className="text-center w-100px">
          <div>
            <p className="text-white text-base font-light cursor-default ">built</p>
            on{' '}
            <a
              rel="noreferrer"
              href="https://solano.wtf"
              target="_blank"
              className="text-white text-base font-bold hover:text-primary-dark transition-all duration-200"
            >
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
                Solana
              </span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
