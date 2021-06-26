import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/client"


function header() {
     const [ session , loading ] = useSession();
     
    return (
        <div className="flex flex-col sm:flex-row justify-around items-center h-auto bg-gray-900">
           <a href="/"> <Image className="object-contain animate-pulse h-8 mb-1" src="/logo.png" height={80} width={200} /></a>
            <div className="flex flex-grow lg:flex-row justify-evenly max-w-2xl sm:w-20 items-center p-5 ">
                <Link href="/addcoin"><p className="font-bold tracking-widest cursor-pointer my-2">Add Coin</p></Link>
                <Link href="/promote"><p className="font-bold tracking-widest cursor-pointer my-2">Promote</p></Link>
                <Link href="/contact"><p className="font-bold tracking-widest cursor-pointer my-2">Contact</p></Link>
                {!session &&
                <Link href="/signin"><button className="bg-blue-600 hover:bg-blue-300 font-bold w-24 h-10 rounded-md my-2 shadow-lg">Sign In</button></Link>
                }
                {session &&
                <button onClick={()=> signOut()} className="bg-blue-600 hover:bg-blue-300 font-bold w-24 h-10 rounded-md my-2 shadow-lg">Logout</button>
                }
                   {   
                    session && <img className="rounded-full h-12 w-12" src={session.user.image}></img>
                    }
            </div>
           
        </div>
    )
}

export default header
