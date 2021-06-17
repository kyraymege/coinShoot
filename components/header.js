import Image from "next/image";

function header() {
    return (
        <div className="flex flex-col sm:flex-row  m-5 justify-between items-center h-auto">
            <Image className="object-contain animate-pulse h-8 mb-1" src="/logo.png" height={80} width={200} />
            <div className="flex flex-grow justify-evenly max-w-2xl w-12 sm:w-20  ">
             <p className="tracking-widest">Add coin</p>
             <p className="tracking-widest">Promote</p>
             <p className="tracking-widest">Newsletter</p>
             <p className="tracking-widest">Login</p>
            </div>
           
        </div>
    )
}

export default header
