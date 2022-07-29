import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
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
    <div className="bg-[#fdc40a] antialiased h-screen overflow-y-auto font-cairo">
      <Head>
        <title>Adesh Alyoum</title>
        <meta name="description" content="أديش اليوم تطبيق لنشرة أسعار الصرف اليومية بالليرة السوريّة" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://flagscdn.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo&display=swap" rel="stylesheet"></link>

      </Head>

      <main >
        <div className="grid gap-3 p-2 mx-auto max-w-[500px]">

          {currencyPrices.isLoading ?? (<>Loading prices</>)}
          {currencyPrices.data && (currencyPrices.data.map((currency: CurrencyInformationProps) => (CurrencyInformation(currency))))}

        </div>
      </main>
    </div>
  );
};

const CurrencyInformation = ({
  ar_name,
  name,
  ask,
  bid,
}: CurrencyInformationProps) => {
  const currency = `${name[0]}${name[1]}`.toLowerCase();
  return (
    <section className="flex justify-between bg-white border rounded-lg relative rounded-l-full overflow-hidden" dir="rtl" key={name}>
      <div className="flex flex-col justify-center px-5 py-2">
        <h2 className="text-lg text-gray-700  font-bold mb-2">{ar_name}</h2>
        <p className="text-sm text-gray-600 " aria-label={`سعر شراء ${ar_name}`}>شراء: {ask}</p>
        <p className="text-sm text-gray-600 " aria-label={`سعر بيع ${ar_name}`}>بيع: {bid}</p>
      </div>
      <Image src={`https://flagcdn.com/${currency}.svg`} width={140} height={102} objectFit="cover" loading="lazy" layout="fixed" alt={"علم " + ar_name} security="" />
    </section>
  )
}

export default Home;
