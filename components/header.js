import Image from "next/image";
import Link from "next/link";
import {useSession, signIn } from "next-auth/client"
import UserAvatar from "./userAvatar"
import SearchBar from "./SearchBar";


function header() {
    const [session, loading] = useSession();

    return (
        <div className="flex flex-col md:flex-row sm:flex-row justify-evenly items-center h-auto bg-gray-900">
            <a href="/" className="xl:ml-20"> <Image className="object-contain animate-pulse h-8 mb-1" src="/logo.png" height={80} width={200} /></a>

            <SearchBar/>
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
