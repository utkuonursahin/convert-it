import Head from 'next/head'
import Converter from "../src/components/Converter/Converter";
import {CurrencyProvider} from "../src/context/CurrencyContext";

export default function Home({currencyList}) {
  return (
    <div className="overflow-y-scroll h-screen py-12 bg-gray-900 flex flex-col gap-4 justify-between">
      <main className="flex flex-col gap-8 items-center ">
        <Head>
          <title>eXcurrency</title>
          <meta name="description" content="Currency exchange platform" />
          <link rel="icon" href="/favicon.ico"/>
        </Head>
        <section className="headings w-1/2 text-center tracking-wide text-neutral-300 flex flex-col gap-6">
          <h1 className="flex flex-col gap-4">
            <span className="text-6xl">eXcurrency</span>
            <span className="text-xl font-bold text-green-700">The way exchange your money easily!</span>
          </h1>
          <h2 className="text-lg font-bold">"no more Googling, no more calculator"</h2>
        </section>
        <section className="converter-box bg-gray-800 px-14 py-16 rounded">
          <CurrencyProvider>
            <Converter currencyList={currencyList}/>
          </CurrencyProvider>
        </section>
      </main>
      <footer className="text-gray-50">
        Footer
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api');
  const data = await res.json();
  return {
    props: {
      currencyList: data.currencyList
    }
  }
}