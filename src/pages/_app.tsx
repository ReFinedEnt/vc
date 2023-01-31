import { AppProps } from "next/app";
import Head from "next/head";
import { FC } from "react";
// Components
import { NavBar } from "../components/navbar/navbar.component";
import { ContentContainer } from "../components/container/container.component";
import { Footer } from "../components/footer/footer.component";

require("@solana/wallet-adapter-react-ui/styles.css");
require("../styles/globals.scss");

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className="flex flex-col h-screen">
      <main className="flex flex-col z-[963] bg-black min-h-screen">
        <NavBar />

        <ContentContainer>
          <div className="xs:max-w-[100vw] lg:max-w-[963px] mx-auto z-[963] bg-black">
            <div className="md:w-full mt-3 text-center text-slate-300 flex justify-center items-center align-center flex-col z-[999]">
              <div className="w-full max-w-[960px] rounded-xl border-2 border-white flex flex-col justify-center items-center z-[999]">
                <h1 className="pt-2 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195] w-100 z-[999]">
                  krk.finance
                </h1>
                <p className="pb-2 text-sm text-white z-[999] rounded">
                  🏗️ chain-agnostic dev guild 👷
                </p>
              </div>

              {/* <p className="text-sm text-white z-[999]">
                  <span className="text-3xl">🏗️</span> chain-agnostic dev guild{" "}
                  <span className="text-3xl">👷</span>
                   on{' '}
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
                    Solana
                  </span>{' '} 
                </p> */}
            </div>
            <Component {...pageProps} />
          </div>
        </ContentContainer>
        <Footer />
      </main>
    </div>
  );
};

export default App;
