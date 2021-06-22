import Image from "next/image";

function footer() {
    return (
        <>
            <div className="bg-gray-900">
                <div className="mx-auto container pt-20 lg:pt-12 flex flex-col items-center justify-center">
                    <div>
                <Image className="object-contain animate-pulse h-8 mb-1" src="/logo.png" height={80} width={200} />
                </div>
                    <div className="text-white flex flex-col md:items-center f-f-l pt-3">
                        <h1 className="text-2xl font-black">Tired of getting scammed ?</h1>
                        <p className="text-xl font-semibold">We're working hard to protect you. You're at the right address.</p>
                        <div className="md:flex items-center mt-5 md:mt-10 text-base text-color f-f-l">
                            <h2 className=" md:mr-6 pb-4 md:py-0 cursor-pointer">How to works ?</h2>
                            <h2 className="cursor-pointer">Newsletter</h2>
                        </div>
                        <div className="my-6 text-base text-color f-f-l">
                            <ul className="md:flex items-center">
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Add Coin</li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Promote</li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Contact</li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">All time Rankings</li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Daily Rankings</li>
                                <li className="cursor-pointer pt-4 lg:py-0">New Listings</li>
                            </ul>
                        </div>
                        <div className="text-sm text-color mb-10 f-f-l">
                            <p> CoinShooter © 2021 - info@coinshooter.net</p>
                        </div>
                    </div>
                    <div className="w-9/12  h-0.5 bg-gray-100 rounded-full" />
                    <div className="flex justify-between items-center pt-12">
                        <div className="mr-4">
                        <a href="https://t.me"><Image className="object-contain animate-spin mb-1" src="/telegram-logo.png" height={36} width={36} /></a>
                        </div>
                        <div className="mr-4">
                        <a href="https://twitter.com"><Image className="object-contain animate-spin mb-1" src="/twitter-logo.png" height={36} width={36} /></a>
                        </div>
                        <div className="mr-4">
                        <a href="https://twitter.com"><Image className="object-contain animate-bounce mb-1" src="/googlePlay-logo.png" height={72} width={72} /></a>
                        </div>
                        <div className="mr-4">
                            {/*AppStore*/}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default footer
