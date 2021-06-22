import Head from "next/head";

function addcoin() {
  return (
    <div className="my-20 xl:ml-96">
      <div className="mt-10 sm:mt-0 ">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="coin_name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Coin Name *
                      </label>
                      <input
                        placeholder="Ex: Bitcoin"
                        type="text"
                        name="coin_name"
                        id="coin_name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="coin_symbol"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Coin Symbol *
                      </label>
                      <input
                        placeholder="Ex: BTC"
                        type="text"
                        name="coin_symbol"
                        id="coin_symbol"
                        autoComplete="family-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="coin_logo"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Logo *
                      </label>
                      <input
                        placeholder="Ex: https://i.ibb.co/logo.png"
                        type="text"
                        name="coin_logo"
                        id="coin_logo"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="coin_chain"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Select Chain *
                      </label>
                      <select
                        placeholder="Select Chain"
                        id="coin_chain"
                        name="coin_chain"
                        className="text-gray-700 mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>Binance Smart Chain(BSC)</option>
                        <option>Etherum (ETH)</option>
                        <option>Tron (TRX)</option>
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-6">
                      <label
                        htmlFor="coin_desc"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Description *
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="coin_desc"
                          name="coin_desc"
                          rows={3}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                          placeholder="Ex: Bitcoin is a decentralized digital currency"
                          defaultValue={""}
                        />
                      </div>
                    </div>

                    <div className="col-span-6 lg:col-span-3">
                      <label
                        htmlFor="coin_smartContract"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Smart Contract Address *
                      </label>
                      <input
                        placeholder="Ex: 0x00000000000000000"
                        type="text"
                        name="coin_smartContract"
                        id="coin_smartContract"
                        autoComplete="street-address"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-3">
                      <label
                        htmlFor="coin_websiteAddress"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Website Address *
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          http://
                        </span>
                        <input
                          placeholder="Ex: www.coinshooter.net"
                          type="text"
                          name="coin_websiteAddress"
                          id="coin_websiteAddress"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                        />
                      </div>
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="coin_date"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Launch Date *
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <input
                          placeholder="Ex: 22/06/2021"
                          type="text"
                          name="coin_date"
                          id="coin_date"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                        />
                      </div>
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="coin_price"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Price *
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <input
                          placeholder="Ex: 22/06/2021"
                          type="text"
                          name="coin_price"
                          id="coin_price"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                        />
                      </div>
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="coin_marketCap"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Market Cap *
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <input
                          placeholder="Ex: 22/06/2021"
                          type="text"
                          name="coin_marketCap"
                          id="coin_marketCap"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                        />
                      </div>
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="coin_telegramAddress"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Telegram Address
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          <img
                            className="w-5 h-5"
                            src="/telegram-logo.png"
                          ></img>
                        </span>
                        <input
                          placeholder="Ex: 22/06/2021"
                          type="text"
                          name="coin_marketCap"
                          id="coin_marketCap"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                        />
                      </div>
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="coin_TwitterAddress"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Twitter Address
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          <img
                            className="w-5 h-5"
                            src="/twitter-logo.png"
                          ></img>
                        </span>
                        <input
                          placeholder="Ex: 22/06/2021"
                          type="text"
                          name="coin_marketCap"
                          id="coin_marketCap"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                        />
                      </div>
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="coin_chartAddress"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Chart Address
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                          </svg>
                        </span>
                        <input
                          placeholder="Ex: 22/06/2021"
                          type="text"
                          name="coin_marketCap"
                          id="coin_marketCap"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-center sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Add Coin
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default addcoin;
