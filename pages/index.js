import Head from 'next/head'
import Converter from "../src/components/Converter/Converter";
import {InputProvider} from "../src/context/InputContext";
import {OutputProvider} from "../src/context/OutputContext";
import Graph from "../src/components/Graph/Graph";
export default function Home({currencyList}) {
  return (
    <div className="overflow-y-scroll overflow-x-hidden h-screen py-4 sm:py-12 bg-gray-900 flex flex-col gap-4 justify-between">
      <main className="flex flex-col gap-8 items-center ">
        <Head>
          <title>eXcurrency</title>
          <meta name="description" content="Currency exchange platform" />
          <link rel="icon" href="/favicon.ico"/>
        </Head>
        <section className="headings w-full sm:w-1/2 text-center tracking-wide text-neutral-300 flex flex-col gap-6">
          <h1 className="flex flex-col gap-4">
            <span className="text-4xl sm:text-6xl">eXcurrency</span>
            <span className="text-base sm:text-xl font-bold text-green-700">The way exchange your money easily!</span>
          </h1>
          <h2 className="text-sm sm:text-lg font-bold">"no more Googling, no more calculator"</h2>
        </section>
        <section className="h-full flex flex-col gap-6 bg-gray-800 px-6 py-8 sm:px-14 sm:py-16 sm:rounded">
          <InputProvider>
            <OutputProvider>
              <Converter currencyList={currencyList}/>
              <Graph/>
            </OutputProvider>
          </InputProvider>
        </section>
      </main>
      <footer className="text-gray-50 flex justify-center align-center">eXcurrency &copy; 2022</footer>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_SERVER_API_URL}/api`);
  const data = await res.json();
  return {
    props: {
      currencyList: data.currencyList
    }
  }
}