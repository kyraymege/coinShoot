import { providers, signIn, getSession, csrfToken } from "next-auth/client";

function signin(csrfToken) {
    return (
        <section className="bg-gray-800 min-h-screen">
            <div className="mx-auto flex justify-center lg:items-center h-full">

                <div>
                    <button className="bg-white text-gray-700" onClick={() => signIn("google")}>
                        Sign in with Google
                    </button>
                </div>
                <form
                    method="post"
                    action="/api/auth/signin/email"
                    className="w-full sm:w-4/6 md:w-3/6 lg:w-4/12 xl:w-3/12 text-white py-12 px-2 sm:px-0">
                    <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                    <div className="pt-16 px-2 flex flex-col items-center justify-center">
                        <h3 className="text-2xl sm:text-3xl xl:text-2xl font-bold leading-tight">Let's sign in your account</h3>
                    </div>
                    <div className="mt-12 w-full px-2 sm:px-6">
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