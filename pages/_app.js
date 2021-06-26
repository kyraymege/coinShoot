import "../styles/globals.css";
import { Provider } from "next-auth/client";
import Header from "../components/header";
import Banner from "../components/banner";
import Footer from "../components/footer";


function MyApp({ Component, pageProps }) {
  const { session } = pageProps;
 
 
  
  return (
    <div>
      
      <Provider options ={{ site:process.env.SITE}} session = {session}>
      <Header />
        <Component {...pageProps} />
        < Footer />
        </Provider>
      
    </div>
  );
}

export default MyApp;
