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
            <meta name="description" content={pageProps.description} />
            <meta property="og:title" content={pageProps.title} />
            <meta property="og:type" content="article" />
            {/* <meta property="og:image" content={imageURL} /> */}
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
