import { AppProps } from "next/app";
import Head from "next/head";
import { FC } from "react";
// Components
import { ContextProvider } from "../contexts/ContextProvider";
import { AppBar } from "../components/AppBar";
import { ContentContainer } from "../components/ContentContainer";
import { Footer } from "../components/Footer";
import Notifications from "../components/Notification";

import { JupiterApiProvider } from "../contexts/JupiterApiProvider";

require("@solana/wallet-adapter-react-ui/styles.css");
require("../styles/globals.scss");

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>krk.finance</title>
        <meta
          property="og:title"
          content="🏗️ chain-agnostic crowdsourced dev guild 👷"
        />
        <meta property="og:site_name" content="krk.finance" />
        <meta property="og:url" content="https://krk.finance/" />
        <meta
          property="og:description"
          content="It ain't much, but it's honest work."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/EsyWin/cdn/main/krk.finance/assets/img/krk_embed_2.png"
        />
      </Head>

      <ContextProvider>
        <div className="flex flex-col h-screen">
          <main className="flex flex-col z-[963] bg-black min-h-screen">
            <Notifications />
            <AppBar />

            <ContentContainer>
              <JupiterApiProvider>
                <div className="max-w-[963px] mx-auto z-[963] bg-black">
                  <div className="md:w-full mt-3 text-center text-slate-300 flex justify-center items-center align-center flex-col z-[999]">
                    <div className="w-full bg-base-300 rounded-xl border-2 border-white flex flex-col justify-center items-center mb-2 z-[999]">
                      <h1 className="p-2 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195] w-100 z-[999]">
                        krk.finance
                      </h1>
                    </div>
                    <p className="text-sm text-white z-[999] bg-base-300 p-1 rounded">
                      It ain&apos;t much, but it&apos;s honest work.
                    </p>
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
              </JupiterApiProvider>
            </ContentContainer>
            <Footer />
          </main>
        </div>
      </ContextProvider>
    </>
  );
};

export default App;
