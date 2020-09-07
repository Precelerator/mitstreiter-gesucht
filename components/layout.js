import Head from "next/head";

import NavBar from "./navbar";
import Footer from "./footer";

export default function Layout({ children, timestamp }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css"
          integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I"
          crossOrigin="anonymous"
        />

        <title>Mitstreiter gesucht!</title>
      </Head>
      <NavBar />
      <main>{children}</main>
      <Footer timestamp={timestamp} />
    </>
  );
}
