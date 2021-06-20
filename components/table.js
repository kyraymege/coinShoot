import { useState, useEffect } from "react";
import { db } from "./firebase";

function table() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    db.collection("coins").onSnapshot((snapshot) =>
      setCoins(
        snapshot.docs.map((doc) => ({
          coin_name: doc.data().coin_name,
          coin_symbol: doc.data().coin_symbol,
          coin_marketcap: doc.data().coin_marketcap,
          coin_chain: doc.data().coin_chain,
          coin_age: doc.data().coin_age,
          coin_votes: doc.data().coin_votes,
          coin_imageUri: doc.data().coin_imageUri,
        }))
      )
    );
  }, []);
  console.log(coins)

  return (
    <div className="flex flex-col max-w-screen-2xl mx-auto p-10">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200 ">
              <thead className="bg-gray-50 ">
                <tr>
                  <th
                    scope="col"
                    className=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Coin Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Market Cap
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Chain
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Time since launch
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Votes
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {coins.map((coin) => (
                  <tr
                    className="hover:bg-gray-400 cursor-pointer"
                    onClick={() => {
                      window.location.href = "/coin/" + coin.coin_name;
                    }}
                    key={coin.coin_name}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={coin.imageUri}
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {coin.coin_name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {coin.coin_name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {coin.coin_name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {coin.coin_name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5  rounded-full bg-green-100 text-green-800 font-bold">
                        BSC
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {coin.coin_name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Vote
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default table;
