import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { db } from "../../components/firebase/firebase";
import moment from "moment";

const Page = () => {
  const [coinInf, setCoinInf] = useState([
    {
      coin_name: "loading...",
      coin_symbol: "loading...",
      coin_marketcap: "loading...",
      coin_chain: "loading...",
      coin_age: "loading...",
      coin_votes: "loading...",
      coin_imageUri: "loading...",
    },
  ]);
  const router = useRouter();
  const { url } = router.query;

  var query = url;
  var docRef = db.collection("coins").doc(query);

  docRef.get().then((doc) => {
    if (doc.data()) {
      setCoinInf({
        coin_name: doc.data().coin_name,
        coin_symbol: doc.data().coin_symbol,
        coin_marketcap: doc.data().coin_marketcap,
        coin_chain: doc.data().coin_chain,
        coin_age: doc.data().coin_age,
        coin_votes: doc.data().coin_votes,
        coin_imageUri: doc.data().coin_imageUri,
        coin_description: doc.data().coin_description,
        coin_price: doc.data().coin_price,
        coin_website: doc.data().coin_website,
        coin_telegram: doc.data().coin_telegram,
        coin_twitter: doc.data().coin_twitter,
        coin_chart: doc.data().coin_chart,
        coin_additionalLinks: doc.data().coin_additionalLinks,
        coin_smartContractAddress: doc.data().coin_smartContractAddress,
      });
    } else {
      console.log("wait");
    }
  });

  const getCopy = () =>{
    
    document.execCommand("copy"); 
    alert("Coppied");
  }

  return (
    <>
      <div className="w-full bg-gray-200 dark:bg-gray-900 py-10">
        <div className="container mx-auto px-6 flex items-start justify-center">
          <div className="w-full">
            <div className="flex flex-col lg:flex-row mx-auto w-full bg-white dark:bg-gray-800 shadow rounded">
              <div className="w-full lg:w-1/3 p-6">
                <div className="flex items-center mb-12">
                  <div className="w-12 h-12 rounded shadow">
                    <img
                      className="w-full h-full overflow-hidden object-cover rounded"
                      src={coinInf.coin_imageUri}
                      alt="logo"
                    />
                  </div>
                  <div className="ml-3">
                    <h1 className="text-gray-800 dark:text-gray-100 font-medium text-xl ">
                      {coinInf.coin_name}
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-lg font-normal">
                      ${coinInf.coin_symbol}
                    </p>
                  </div>
                </div>
                <h3 className="text-lg text-gray-800 dark:text-gray-100 font-bold mt-5 mb-1">
                  Description
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-normal">
                  {coinInf.coin_description}
                </p>
                <h3 className="text-lg text-gray-800 dark:text-gray-100 font-bold mt-5 mb-1">
                  Smart Contract address                
                </h3>
                <div className="text-xs text-center w-full bg-gray-300 dark:text-indigo-600 rounded font-medium p-3 lg:mr-3 flex-row flex">
                  <p  className="text-gray-600 dark:text-gray-400 text-sm font-normal mr-5">
                    {coinInf.coin_smartContractAddress}                    
                  </p>
                  <span onClick={()=>{getCopy()}} className="cursor-pointer hover:scale-125">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                      <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="w-full lg:w-1/3 p-6 border-t border-b lg:border-t-0 lg:border-b-0 sm:border-l sm:border-r border-gray-300">
                <div className="flex flex-col items-start lg:items-center justify-between">
                  <h3 className="text-lg text-gray-800 dark:text-gray-100 font-bold mt-5 mb-2">
                    Since to Launch
                  </h3>
                  <div className="text-xs text-center w-3/4 bg-indigo-100 text-indigo-700 dark:text-indigo-600 rounded font-medium p-3 lg:mr-3">
                    {moment(coinInf.coin_age, "DD/MM/YYYY").fromNow()}
                  </div>
                </div>
                <div className="flex flex-col items-start lg:items-center justify-between">
                  <h3 className="text-lg text-gray-800 dark:text-gray-100 font-bold mt-5 mb-2">
                    Chain
                  </h3>
                  <div className="text-xs text-center w-3/4 bg-indigo-100 text-indigo-700 dark:text-indigo-600 rounded font-medium p-3 lg:mr-3">
                    {coinInf.coin_chain}
                  </div>
                </div>
                <div className="flex flex-col items-start lg:items-center justify-between">
                  <h3 className="text-lg text-gray-800 dark:text-gray-100 font-bold mt-5 mb-2">
                    Market Cap
                  </h3>
                  <div className="text-xs text-center w-3/4 bg-indigo-100 text-indigo-700 dark:text-indigo-600 rounded font-medium p-3 lg:mr-3">
                    $ {coinInf.coin_marketcap}
                  </div>
                </div>
                <div className="flex flex-col items-start lg:items-center justify-between">
                  <h3 className="text-lg text-gray-800 dark:text-gray-100 font-bold mt-5 mb-2">
                    Price
                  </h3>
                  <div className="text-xs text-center w-3/4 bg-indigo-100 text-indigo-700 dark:text-indigo-600 rounded font-medium p-3 lg:mr-3">
                    $ {coinInf.coin_price}
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/3 p-6 mt-10">
                <div className="ml-16">
                  <a href={coinInf.coin_website} target="_blank">
                    <button
                      type="button"
                      className="mb-6 relative w-3/4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      Website
                    </button>
                  </a>
                </div>
                <div className="ml-16">
                  <a href={coinInf.coin_telegram} target="_blank">
                    <button
                      type="button"
                      className="mb-6 relative w-3/4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      Telegram
                    </button>
                  </a>
                </div>
                <div className="ml-16">
                  <a href={coinInf.coin_twitter} target="_blank">
                    <button
                      type="button"
                      className="mb-6 relative w-3/4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      Twitter
                    </button>
                  </a>
                </div>
                <div className="ml-16">
                  <a href={coinInf.coin_chart} target="_blank">
                    <button
                      type="button"
                      className="mb-6 relative w-3/4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      Chart
                    </button>
                  </a>
                </div>

                <div
                  className={
                    coinInf.coin_additionalLinks == "" || null
                      ? "opacity-0 "
                      : "opacity-100 ml-16"
                  }
                >
                  <a href={coinInf.coin_additionalLinks} target="_blank">
                    <button
                      type="button"
                      className="mb-6 relative w-3/4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      {coinInf.coin_additionalLinks}
                    </button>
                  </a>
                </div>
              </div>
            </div>
            {/* Card code block end */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
