import "../styles/globals.css";
import Header from "../components/header";
import Banner from "../components/banner";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      
      
      <Header />
        <Component {...pageProps} />
        < Footer />
      
      
    </div>
  );
}

export default MyApp;
