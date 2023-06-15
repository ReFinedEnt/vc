// Contexts
import { ContextProvider } from '../contexts/ContextProvider';
// Components
import { NavBar } from '../components/navbar/navbar.component';
import { ContentContainer } from '../components/container/container.component';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

require('@solana/wallet-adapter-react-ui/styles.css');
require('../styles/globals.scss');

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <ContextProvider>
      <NavBar />
      <ContentContainer>
        <Component {...pageProps} />
      </ContentContainer>
    </ContextProvider>
  );
};

export default App;
