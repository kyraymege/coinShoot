import Image from "next/image";
import Link from "next/link";

function header() {
    return (
        <div className="flex flex-col sm:flex-row justify-around items-center h-auto bg-gray-900">
           <a href="/"> <Image className="object-contain animate-pulse h-8 mb-1" src="/logo.png" height={80} width={200} /></a>
            <div className="flex flex-grow lg:flex-row justify-evenly max-w-2xl sm:w-20 items-center p-5 ">
                <Link href="/addcoin"><p className="font-bold tracking-widest cursor-pointer my-2">Add Coin</p></Link>
                <Link href="/promote"><p className="font-bold tracking-widest cursor-pointer my-2">Promote</p></Link>
                <Link href="/contact"><p className="font-bold tracking-widest cursor-pointer my-2">Contact</p></Link>
                <Link href="/signin"><button className="bg-blue-600 hover:bg-blue-300 font-bold w-24 h-10 rounded-md my-2">Sign In</button></Link>
            </div>
           
        </div>
    )
}

export default header
