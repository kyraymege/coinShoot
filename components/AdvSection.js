import Image from "next/image";
function AdvSection() {
    return (
        <div className="flex flex-col lg:flex-row md:flex-row items-center text-justify max-w-screen-2xl mx-auto my-20">
            <div className="mr-20 mb-10 lg:mb-0">
            <h1 className="font-bold lg:text-4xl ml-10 text-3xl">Fastest and most reliable</h1>
            <h3 className="lg:text-2xl text-xl ml-10">The highest-rated cryptocurrency of all time is here!</h3>
            </div>
            <Image className=" ml-10" src="/ad.gif" width={730} height={90}/>
        </div>
    )
}

export default AdvSection
