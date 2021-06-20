import Image from "next/image";
import Link from "next/link";

function header() {
    return (
        <div className="flex flex-col sm:flex-row justify-around m-5 items-center h-auto">
           <a href="/"> <Image className="object-contain animate-pulse h-8 mb-1" src="/logo.png" height={80} width={200} /></a>
            <div className="flex flex-grow justify-evenly max-w-2xl sm:w-20 items-center ">
                <Link href="/addcoin"><p className="font-bold tracking-widest cursor-pointer">Add Coin</p></Link>
                <Link href="/promote"><p className="font-bold tracking-widest cursor-pointer">Promote</p></Link>
                <Link href="/contact"><p className="font-bold tracking-widest cursor-pointer">Contact</p></Link>
                <Link href="/signup"><button className="bg-blue-600 hover:bg-blue-300 font-bold w-24 h-10 rounded-md">Sign up</button></Link>
            </div>
           
        </div>
    )
}

export default header
