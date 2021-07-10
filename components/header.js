import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/client"
import UserAvatar from "./userAvatar"


function header() {
    const [session, loading] = useSession();

    return (
        <div className="flex flex-col sm:flex-row justify-evenly items-center h-auto bg-gray-900">
            <a href="/" className="ml-5"> <Image className="object-contain animate-pulse h-8 mb-1" src="/logo.png" height={80} width={200} /></a>

            <div className="mx-2 md:mx-20 outline-none flex flex-grow items-center px-5 py-2 bg-gray-100 text-gray-600 rounded-lg focus-within:text-gray-600 focus-within:shadow-md">
                <input className="outline-none flex-grow border-b-2 border-t-0 border-r-0 border-l-0 focus:outline-none px-5 text-base bg-transparent mr-2" type="text" placeholder="Search" />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
            </div>

            <div className="flex flex-grow flex-col lg:flex-row justify-evenly  max-w-2xl sm:w-20 items-center p-5 ">
                <Link href="/addcoin"><p className="font-bold tracking-widest cursor-pointer my-2">Add Coin</p></Link>
                <Link href="/promote"><p className="font-bold tracking-widest cursor-pointer my-2">Promote</p></Link>
                <Link href="/contact"><p className="font-bold tracking-widest cursor-pointer my-2">Contact</p></Link>
                {!session &&
                    <Link href="/signin"><button className="bg-blue-600 hover:bg-blue-300 font-bold w-24 h-10 rounded-md my-2 shadow-lg">Sign In</button></Link>
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
