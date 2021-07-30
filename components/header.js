import Image from "next/image";
import Link from "next/link";
import { useSession, signIn } from "next-auth/client"
import UserAvatar from "./userAvatar"
import {useState} from "react"

function header() {
    const [session, loading] = useSession();
    const [searchBar , setSearchBar] = useState(false);
    const [coins , setCoins] = useState([]);
    const [text , setText] = useState();
    const Search = (e) => {
        setSearchBar(true)
        
    }
    return (
        <div className="flex flex-col md:flex-row sm:flex-row justify-evenly items-center h-auto bg-gray-900">
            <a href="/" className="xl:ml-20"> <Image className="object-contain animate-pulse h-8 mb-1" src="/logo.png" height={80} width={200} /></a>

            <div className="mx-2 outline-none flex flex-col items-center px-5 py-2 bg-gray-100 text-gray-600 rounded-lg focus-within:text-gray-600 focus-within:shadow-md">
                <div className="flex flex-row justify-center items-center">
                    <input className="outline-none flex-grow border-0 focus:outline-none px-5 text-base bg-transparent mr-2" value={text} onChange={(e) => { Search(e.target.value) }} type="text" placeholder="Search" />
                    {!searchBar &&
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5  mt-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                    }
                    {searchBar &&
                        <svg onClick={()=> {setSearchBar(false);setText("")}} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    }



                </div>
                <div className="justify-center items-start min-w-full flex">
                    {searchBar && (
                        <div className="mt-2 overflow-y-scroll max-h-64 justify-center flex-col absolute z-10  mx-2 md:mx-20 outline-none flex flex-grow items-center px-5 py-2 bg-gray-100 text-gray-600 rounded-b-lg focus-within:text-gray-600 focus-within:shadow-md">

                            {filteredCoins.map((coin) => {
                                return (
                                    <a className="flex items-center justify-start w-full px-6 py-1 cursor-pointer mt-3 hover:bg-gray-300" href={`/coin/${coin.coin_name}`}>
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
                                            <div className="text-sm font-medium text-gray-900 mt-2">
                                                {coin.coin_name}
                                            </div>
                                        </div>
                                    </a>
                                )
                            })}

                        </div>
                    )}
                </div>
            </div>
            <div className="flex flex-grow flex-col lg:flex-row justify-evenly  max-w-2xl sm:w-20 items-center p-5 ">
                <Link href="/addcoin"><p className="font-bold tracking-widest cursor-pointer my-2 md:my-2">Add Coin</p></Link>
                <Link href="/promote"><p className="font-bold tracking-widest cursor-pointer my-2 md:my-2">Promote</p></Link>
                <Link href="/contact"><p className="font-bold tracking-widest cursor-pointer my-2 md:my-2">Contact</p></Link>
                {!session &&
                    <button onClick={signIn} className="bg-blue-600 hover:bg-blue-300 font-bold w-24 h-10 rounded-md my-2 shadow-lg">Sign In</button>
                }
                {session && <>
                    <UserAvatar />
                </>
                }
            </div>

        </div>
    )
}

export default header