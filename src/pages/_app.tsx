import { NavBar } from '../components/navbar/navbar.component';
import { ContentContainer } from '../components/container/container.component';
import { ContextProvider } from '../contexts/ContextProvider';
import { HolderContext, HolderProvider } from '../contexts/holder.context';
import { useRouter } from 'next/router';

import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

require('@solana/wallet-adapter-react-ui/styles.css');
require('../styles/globals.scss');

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  return (
    <ContextProvider>
      <HolderProvider>
        <NavBar router={router} />
        <ContentContainer>
          <Component {...pageProps} />
        </ContentContainer>
      </HolderProvider>
    </ContextProvider>
  );
};

export default App;
