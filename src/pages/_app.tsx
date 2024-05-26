import type { AppProps } from 'next/app';
import { ReactNode } from 'react';
import { DefaultLayout } from '~/components/DefaultLayout';
import { ThemeProvider } from '~/components/ThemeProvider';

import '~/styles/globals.scss';

type CustomAppProps = AppProps & {
  Component: {
    getLayout?: (page: ReactNode) => ReactNode;
  };
};

export default function App({ Component, pageProps }: CustomAppProps) {
  const getLayout = Component.getLayout ?? (page => <DefaultLayout>{page}</DefaultLayout>);

  return <ThemeProvider>{getLayout(<Component {...pageProps} />)}</ThemeProvider>;
}
