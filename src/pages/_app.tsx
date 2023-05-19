import { useEffect, useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import type { AppProps } from "next/app";

import { Layout } from "@components/Common/Layout";
import { Loader } from "@components/Common/Loader";

import "@styles/index.scss";

export default function App({ Component, pageProps, router }: AppProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStartRouteChanging = () => setLoading(true);
    const handleCompleteRouteChanging = () => setLoading(false);

    router.events.on("routeChangeStart", handleStartRouteChanging);
    router.events.on("routeChangeComplete", handleCompleteRouteChanging);

    return () => {
      router.events.off("routeChangeStart", handleStartRouteChanging);
      router.events.off("routeChangeComplete", handleCompleteRouteChanging);
    };
  }, []);

  return (
    <>
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

      <Loader loading={loading} />
    </>
  );
}
