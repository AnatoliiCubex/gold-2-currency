import { CSSTransition, SwitchTransition } from "react-transition-group";

import type { AppProps } from "next/app";

import { Layout } from "@components/Common/Layout";

import "@styles/index.scss";
import { CurrencyProvider } from "../context/CurrencyContext";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <CurrencyProvider>
        <SwitchTransition mode='out-in'>
          <CSSTransition
            key={router.pathname}
            classNames='pageTransition'
            timeout={300}
          >
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </CSSTransition>
        </SwitchTransition>
      </CurrencyProvider>

      {/* <Loader loading={loading} /> */}
    </>
  );
}
