import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect } from "react";
import { trpc } from "../utils/trpc";

type CurrencyInformationProps = {
  name: string;
  ask: number;
  bid: number;
  arrow: number;
  ar_name: string;
  icon: string;
  change: number;
  change_percentage: number;
}



const Home: NextPage = () => {
  const currencyPrices = trpc.useQuery(["currency.getAllCurrencyPrices"]);

  return (
    <div className="bg-[#fdc40a]">
      <Head>
        <title>Adesh Alyoum</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5058823701024243"
          crossOrigin="anonymous"></script>
      </Head>

      <header>

      </header>
      <main >
        <div className="pt-6 text-2xl text-blue-500 grid gap-2 max-w-xl mx-auto">

          {currencyPrices.isLoading ?? (<>Loading prices</>)}
          {currencyPrices.data && (currencyPrices.data.map((currency: CurrencyInformationProps) => (CurrencyInformation(currency))))}

        </div>
      </main>
    </div>
  );
};

const CurrencyInformation = ({
  ar_name,
  ask,
  bid,
}: CurrencyInformationProps) => {
  return (
    <section className="flex justify-between bg-white border rounded-lg px-5 py-2 min-w-[500px]" dir="rtl">
      <div className="flex flex-col justify-center">
        <h2 className="text-lg text-gray-700 font-sans font-bold mb-2">{ar_name}</h2>
        <p className="text-sm text-gray-600 font-sans">شراء: {ask}</p>
        <p className="text-sm text-gray-600 font-sans">بيع: {bid}</p>
      </div>
    </section>
  )
}

export default Home;
