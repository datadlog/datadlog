import Head from "next/head";
import Header from "@components/Header";
//import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Data Dlog</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Data Dlog" />
        <img src="/datadlog.gif" alt="datadlog"/>
      </main>
    </div>
  );
}
