import Head from "next/head";
import Layout from "../components/layout";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Menu from "../components/Menu";
import css from "../styles/Home.module.css"
import { client } from "../lib/client";
export default function Home( {food} ) {

  return (
        <Layout>

    <div className={css.container}>
        <Head>
          <title>StackChow</title>
          <meta name="description" content="Fastest food delivery service within your school" />
          <link rel="icon" href="/Logo.png" />
        </Head>
        {/* body */}
        <main>
          <Hero/>
          <Services/>
          <Menu food={food}/>
        </main>
      </div>
        </Layout>
  );
}

export const getServerSideProps = async()=> {
    const query = '*[_type == "foods"]';
    const food = await client.fetch(query);
    return {
      props: {
        food
      }
    }
}