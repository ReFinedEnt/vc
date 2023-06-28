import { NavBar } from '../components/navbar/navbar.component';
import { ContextProvider } from '../contexts/ContextProvider';
import { HolderProvider } from '../contexts/holder.context';
import { useRouter } from 'next/router';

import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { Footer } from 'components/footer/footer.component';

import { Roboto } from '@next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

require('@solana/wallet-adapter-react-ui/styles.css');
require('../styles/globals.scss');

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  return (
    <ContextProvider>
      <HolderProvider>
        <NavBar router={router} />
        <main className={roboto.className}>
          <Component {...pageProps} />
        </main>
        <Footer />
      </HolderProvider>
    </ContextProvider>
  );
};

export default App;
