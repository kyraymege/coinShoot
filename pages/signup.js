import { useSession } from "next-auth/client";
import ReCAPTCHA from "react-google-recaptcha";

function signup() {
    const [session, loading] = useSession();
    return(
    <>
        {!session && <>
            <div className="min-h-screen flex  justify-center bg-gray-700 py-36 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <img
                            className="mx-auto h-12 w-auto"
                            src="/logo.png"
                            alt="Workflow"
                        />
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Create a account</h2>
                    </div>

                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div className="mb-3">
                                <label htmlFor="your_name" className="text-xl font-bold">
                                    Your Name
                                </label>
                                <input
                                    id="your_name"
                                    name="your_name"
                                    type="name"
                                    autoComplete="name"
                                    required
                                    className="appearance-none rounded-xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email-address" className="text-xl font-bold">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none rounded-xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                />
                            </div>
                            <div className="py-3">
                                <label htmlFor="password" className="text-xl font-bold">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none rounded-xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="">
                                <label htmlFor="confirm-password" className="text-xl font-bold">
                                    Confirm Password
                                </label>
                                <input
                                    id="confirm-password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none rounded-xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Sign up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>}
        {session &&
            window.location.replace("http://localhost:3000/")}
    </>

    )}

export default signup
