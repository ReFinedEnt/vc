import { AppProps } from 'next/app';
import Head from 'next/head';
import { FC } from 'react';
import { ContextProvider } from '../contexts/ContextProvider';
import { AppBar } from '../components/AppBar';
import { ContentContainer } from '../components/ContentContainer';
import { Footer } from '../components/Footer';
import Notifications from '../components/Notification'

import { JupiterApiProvider } from "../contexts/JupiterApiProvider";


require('@solana/wallet-adapter-react-ui/styles.css');
require('../styles/globals.css');

const App: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
          <Head>
            <title>krk.finance</title>
            <meta property="og:title" content="krk.finance | cybernetic squad of machines and people doing IT wizardry 🪄" />
            <meta property="og:site_name" content="krk.finance" />
            <meta property="og:url" content="https://krk.finance/" />
            <meta property="og:description" content="cybernetic squad of machines and people doing IT wizardry 🪄" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="https://raw.githubusercontent.com/EsyWin/cdn/main/krk.finance/assets/img/krk_logo.png" />

          </Head>

          <ContextProvider>
            <div className="flex flex-col h-screen">
              <Notifications />
              <AppBar/>
              <ContentContainer>
                <JupiterApiProvider>
                  <Component {...pageProps} />
                </JupiterApiProvider>
              </ContentContainer>
              <Footer/>
            </div>
          </ContextProvider>
        </>
    );
};

export default App;
