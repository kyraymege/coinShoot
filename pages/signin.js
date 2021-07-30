import { providers, signIn, getSession, csrfToken } from "next-auth/client";

function signin(csrfToken) {
    return (
        <section className="bg-gray-800 min-h-screen">
            <div className="pt-16 px-2 flex flex-col items-center justify-center">
                <h3 className="text-2xl sm:text-3xl xl:text-2xl font-bold leading-tight">Let's sign in your account</h3>
            </div>
            <div className="mx-auto flex flex-col justify-center lg:items-center h-full">
                <button
                    onClick={() => signIn("google")}
                    className="mt-12 bg-white transition text-xl font-bold duration-150 ease-in-out focus:outline-none hover:bg-gray-100 rounded text-indigo-700 px-6 py-2">
                    <img className="w-8 h-8" src="/google-logo.png" alt="google-logo" /></button>
                <form
                    method="post"
                    action="/api/auth/signin/email"
                    className="w-full sm:w-4/6 md:w-3/6 lg:w-4/12 xl:w-3/12 text-white py-2 px-2 sm:px-0">
                    <input name="csrfToken" type="hidden" defaultValue={csrfToken} />

                    <div className="mt-4 w-full px-2 sm:px-6">
                        <div className="flex flex-col mt-5">
                            <input required
                                name="email"
                                id="email"
                                type="email"
                                className="h-10 px-2 w-full text-gray-700 font-bold rounded mt-2 focus:outline-none shadow"
                                placeholder="Ex: info@coinshooter.live" />
                            <button className="bg-white text-gray-700 font-bold mt-6 rounded-xl py-2" type="submit">Sign in with E-mail</button>
                        </div>
                    </div>

                </form>
            </div>
        </section>
    )
}

export default signin

signin.getInitialProps = async (context) => {
    const { req, res } = context;
    const session = await getSession({ req });

    if (session && res && session.accessToken) {
        res.writeHead(302, {
            Location: "/",
        });
        res.end();
        return;
    }

    return {
        session: undefined,
        providers: await providers(context),
        csrfToken: await csrfToken(context),
    };
};