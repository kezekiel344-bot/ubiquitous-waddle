import Head from "next/head";
import Dashboard from "../components/Dashboard";

export default function Home() {
  return (
    <>
      <Head>
        <title>Celestial R</title>
        <meta name="description" content="Celestial R — united in memories and laughter" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Dashboard />
    </>
  );
}
