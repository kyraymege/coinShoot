import Image from "next/image";
function AdvSection() {
    return (
        <div className="flex flex-row items-center text-justify max-w-screen-2xl mx-auto my-20">
            <div className="mr-20">
            <h1 className="font-bold text-4xl ml-10">Fastest and most reliable</h1>
            <h3 className="text-2xl ml-10">The highest-rated cryptocurrency of all time is here!</h3>
            </div>
            <Image className="object-contain ml-10" src="/ad.gif" width={730} height={90}/>
        </div>
    )
}

export default AdvSection
