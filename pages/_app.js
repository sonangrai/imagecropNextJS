import "../styles/main.scss";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
