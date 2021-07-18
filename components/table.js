import { useState, useEffect } from "react";
import { db } from "../components/firebase/firebase";
import moment from "moment";
import { useSession } from "next-auth/client"

function table() {
  const [coins, setCoins] = useState([]);
  const [votes, setVotes] = useState([]);
  const [lastDoc, setLastDoc] = useState();
  const [control, setControl] = useState(true);
  const [session, loading] = useSession();
  var controler = false;

  useEffect(() => {
    db.collection("coins").orderBy("coin_votes", "desc").where("coin_status", "==", "listed").limit(2).onSnapshot((snapshot) => {
      const lastDoc = snapshot.docs[snapshot.docs.length-1];
      setLastDoc(lastDoc);
      setCoins(
        snapshot.docs.map((doc) => ({
          coin_name: doc.data().coin_name,
          coin_symbol: doc.data().coin_symbol,
          coin_marketcap: doc.data().coin_marketcap,
          coin_chain: doc.data().coin_chain,
          coin_age: doc.data().coin_age,
          coin_votes: doc.data().coin_votes,
          coin_imageUri: doc.data().coin_imageUri,
          coin_status: doc.data().coin_status
        }))
      )
    }
    );

  }, []);



  const fetchMore = () => {
    db.collection("coins").orderBy("coin_votes", "desc").where("coin_status", "==", "listed").startAfter(lastDoc).limit(2).onSnapshot((snapshot) => {
      const lastDoc = snapshot.docs[snapshot.docs.length-1];
      const coin = snapshot.docs.map((doc) => ({
        coin_name: doc.data().coin_name,
        coin_symbol: doc.data().coin_symbol,
        coin_marketcap: doc.data().coin_marketcap,
        coin_chain: doc.data().coin_chain,
        coin_age: doc.data().coin_age,
        coin_votes: doc.data().coin_votes,
        coin_imageUri: doc.data().coin_imageUri,
        coin_status: doc.data().coin_status
      }));
      setLastDoc(lastDoc);
      setCoins((coins) => [...coins,...coin]
      )
    })
  }



  const vote = (currentCoin, votes) => {
    db.collection("votes").doc(currentCoin).get().then((voteInf) => {
      if (control) {
        var users = voteInf.data().users
        for (let i = 0; i < users.length; i++) {
          if (users[i] === session.user.email) {
            alert("You are already vote");
            controler = true;
            break;
          } else {
            console.log("_________")
          }
        }
        console.log(controler)
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
        }
      }
    })
  };


  return (
    <div className="flex flex-col max-w-screen-2xl mx-auto p-10">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-b-none sm:rounded-t-lg ">
            <table className="min-w-full divide-y divide-gray-200 ">
              <thead className="bg-gray-50 ">
                <tr>
                  <th
                    scope="col"
                    className=" font-bold px-12 py-3 text-left text-xs text-gray-500 uppercase tracking-wider"
                  >
                    Coin Name
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
                {coins.map((coin, index) => (
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
                              console.log(votes.users);
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
      <button className="bg-white text-black rounded-b-2xl focus-within:outline-none" onClick={()=>fetchMore()}>Show More</button>
    </div>
  );
}

export default table;
