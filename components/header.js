import Image from "next/image";
import Link from "next/link";

function header() {
    return (
        <div className="flex flex-col sm:flex-row justify-around m-5 items-center h-auto">
            <Image className="object-contain animate-pulse h-8 mb-1" src="/logo.png" height={80} width={200} />
            <div className="flex flex-grow justify-evenly max-w-2xl sm:w-20  ">
                <Link href="/addcoin" className="font-bold tracking-widest">Add coin</Link>
             <p className="font-bold tracking-widest">Promote</p>
             <p className="font-bold tracking-widest">Newsletter</p>
             <p className="font-bold tracking-widest">Login</p>
            </div>
           
        </div>
    )
}

export default header
