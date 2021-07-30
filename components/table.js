import { useState, useEffect } from "react";
import { db } from "../components/firebase/firebase";
import moment from "moment";
import { useSession } from "next-auth/client"

const coinsRef = db.collection("coins").orderBy("coin_votes", "desc").where("coin_status", "==", "listed");
function table() {
  const [coins, setCoins] = useState([]);
  const [lastDoc, setLastDoc] = useState();
  const [control, setControl] = useState(true);
  const [session, loading] = useSession();
  const [change, setChange] = useState(1);
  const [list , setList] = useState(10);
  var controler = false;
  

  useEffect(() => {
     db.collection("coins").orderBy("coin_votes", "desc").where("coin_status", "==", "listed").limit(list).onSnapshot((collections) => {
      console.log("selam")
      const coinList = collections.docs.map((doc) => ({
        coin_name: doc.data().coin_name,
        coin_symbol: doc.data().coin_symbol,
        coin_marketcap: doc.data().coin_marketcap,
        coin_chain: doc.data().coin_chain,
        coin_age: doc.data().coin_age,
        coin_votes: doc.data().coin_votes,
        coin_imageUri: doc.data().coin_imag1eUri,
        coin_status: doc.data().coin_status
      }));
    setCoins(coinList);
    }
    
    );
     console.log(coins);
  },[])

  useEffect(() => {
    db.collection("coins").orderBy("coin_votes", "desc").where("coin_status", "==", "listed").limit(list).get().then((collections) => {
      const coinList = collections.docs.map((doc) => ({
         coin_name: doc.data().coin_name,
         coin_symbol: doc.data().coin_symbol,
         coin_marketcap: doc.data().coin_marketcap,
         coin_chain: doc.data().coin_chain,
         coin_age: doc.data().coin_age,
         coin_votes: doc.data().coin_votes,
         coin_imageUri: doc.data().coin_imageUri,
         coin_status: doc.data().coin_status
       }));
     setCoins(coinList);
     });
 
 
  });

 const fetchMore = () =>{
   setList(list + 10)
 }

  if (coins.length === 0) {
    return <h1>Loading...</h1>;
  }

  const vote = (currentCoin, votes) => {
    db.collection("votes").doc(currentCoin).onSnapshot((voteInf) => {
      if (control) {
        var users = voteInf.data().users
        for (let i = 0; i < users.length; i++) {
          if (users[i] === session.user.email) {
            console.log("zaten vermişsin");
            db.collection("coins")
            .doc(currentCoin)
            .update({
              coin_votes: votes + -1,
            });
            controler = true;
            break;
          } else {
          }
        }
        if (!controler) {
          users.push(session.user.email);
          db.collection("votes").doc(currentCoin).set({
            users
          })
          db.collection("coins")
            .doc(currentCoin)
            .update({
              coin_votes: votes + 1,
            });
           console.log("oy verildi");
        }
      }
    })
  };


  return (
    <div className="flex flex-col max-w-screen-2xl mx-auto p-10">
      <div className="mx-auto container py-8 px-4 flex items-center justify-center w-full">
        <ul className="w-full hidden md:flex items-center pb-2 border-b border-gray-200">
          <li onClick={() => setActiveStatus(1)} className={activeStatus == 1 ? "py-2 px-4 cursor-pointer bg-indigo-100 ease-in duration-150 rounded font-bold  text-lg xl:text-lg leading-none text-center text-indigo-700" : "py-2 px-4 cursor-pointer  bg-transparent hover:bg-indigo-50 ease-in duration-150 rounded text-md xl:text-md leading-none text-white"}>
            All Coins 📢
          </li>
          <li onClick={() => setActiveStatus(2)} className={activeStatus == 2 ? "py-2 px-4 cursor-pointer bg-indigo-100 ease-in duration-150 rounded ml-24 font-bold   text-lg xl:text-lg leading-none text-center text-indigo-700" : "py-2 px-4 cursor-pointer ml-24 bg-transparent hover:bg-indigo-50 ease-in duration-150 rounded text-md xl:text-md leading-none text-white"}>
            Today's Best 🔥
          </li>
          <li onClick={() => setActiveStatus(3)} className={activeStatus == 3 ? "py-2 px-4 cursor-pointer bg-indigo-100 ease-in duration-150 rounded ml-24 font-bold   text-lg xl:text-lg leading-none text-center text-indigo-700" : "py-2 px-4 cursor-pointer ml-24 bg-transparent hover:bg-indigo-50 ease-in duration-150 rounded text-md xl:text-md leading-none text-white"}>
            Today Added 🆕
          </li>
        </ul>
        <div className="md:hidden relative w-11/12 mx-auto bg-white rounded">
          <select aria-label="Selected tab" className="form-select block w-full p-3 border border-gray-300 rounded text-gray-600 appearance-none bg-transparent relative z-10">
            <option selected className="text-sm text-gray-600">
              All Coins 📢
            </option>
            <option className="text-sm text-gray-600">Today's Best 🔥 </option>
            <option className="text-sm text-gray-600">Today Added 🆕 </option>
          </select>
        </div>
      </div>

      <div className="my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-b-none sm:rounded-t-lg ">
            <table className="min-w-full divide-y divide-gray-200 ">
              <thead className="bg-gray-50 ">
                <tr>
                  <th
                    scope="col"
                    className=" font-bold px-12 py-3 text-left text-xs text-gray-500 uppercase tracking-wider"
                  >
                    <div className="shadow-md flex flex-grow items-center px-5 py-2 bg-gray-100 text-gray-600 rounded-lg focus-within:text-gray-600 focus-within:shadow-xl">
                      <input className="outline-none flex-grow border-0 focus:outline-none px-5 text-base bg-transparent mr-2" type="text" placeholder="Search" value={text} onChange={(e)=> setText(e.target.value)} />
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className=" px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                    Symbol
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                    Chain
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                    Market Cap
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                    Time since launch
                  </th>
                  <th
                    scope="col"
                    className="px-12 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                    Votes
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {coins.filter(val=>{
                  if(text === ""){
                    return val;
                  }else if(
                     val.coin_name.toLowerCase().includes(text.toLowerCase()) ||
                     val.coin_symbol.toLowerCase().includes(text.toLowerCase())
                  )
                  return val
                }).map((coin, index) => (
                  <tr
                    className="hover:bg-gray-400 cursor-pointer"
                    key={index}
                  >
                    <td
                      onClick={() => {
                        window.location.href = "/coin/" + coin.coin_name;
                      }}
                      className="px-6 py-4 whitespace-nowrap"
                    >
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="rounded-full hover:scale-125"
                            src={coin.coin_imageUri}
                            height={40}
                            width={40}
                            alt={coin.coin_name}
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {coin.coin_name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td
                      onClick={() => {
                        window.location.href = "/coin/" + coin.coin_name;
                      }}
                      className="px-8 py-4 whitespace-nowrap"
                    >
                      <div className="text-sm font-medium text-gray-900">
                        ${coin.coin_symbol}
                      </div>
                    </td>
                    <td
                      onClick={() => {
                        window.location.href = "/coin/" + coin.coin_name;
                      }}
                      className="px-6 py-4 whitespace-nowrap"
                    >
                      <span className="px-2 inline-flex text-xs leading-5  rounded-full bg-green-100 text-green-800 font-bold">
                        {coin.coin_chain}
                      </span>
                    </td>
                    <td
                      onClick={() => {
                        window.location.href = "/coin/" + coin.coin_name;
                      }}
                      className="px-6 py-4 whitespace-nowrap"
                    >
                      <div className="text-sm text-gray-900">
                        $ {coin.coin_marketcap}
                      </div>
                    </td>
                    <td
                      onClick={() => {
                        window.location.href = "/coin/" + coin.coin_name;
                      }}
                      className="px-12 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      <div className="text-sm text-gray-900">
                        {moment(coin.coin_age, "DD/MM/YYYY").fromNow()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                      {!session && (
                        <>
                          <button
                            onClick={() => {
                              alert("You must login for vote")
                            }}
                            className="bg-white text-blue-600 border-2 border-blue-600  hover:bg-blue-600 hover:text-white hover:border-none font-bold w-24 h-10 rounded-md items-baseline"
                          >
                            ↑ {coin.coin_votes}
                          </button>
                        </>
                      )}
                      {session && (
                        <>
                          <button
                            onClick={() => {
                              vote(coin.coin_name, coin.coin_votes);
                            }}
                            className="bg-white text-blue-600 border-2 border-blue-600  hover:bg-blue-600 hover:text-white hover:border-none font-bold w-24 h-10 rounded-md items-baseline"
                          >
                            ↑ {coin.coin_votes}
                          </button>
                        </>
                      )}

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {isEmpty && <button className="bg-white text-black text-lg font-medium rounded-b-2xl focus-within:outline-none" disabled="disabled">ᐅ All coins are listed ᐊ</button>}
      {!isEmpty && <button className="bg-white text-black text-lg font-medium rounded-b-2xl focus-within:outline-none" onClick={() => fetchMore()}>▼ Show More ▼</button>}

    </div>

  );
}

export default table;
