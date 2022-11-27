import type { AppProps } from "next/app";
import Header from "../components/share/header/header";
import "../styles/globals.scss";
import styles from "../styles/index.module.scss";
import Footer from "../components/share/footer/footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={styles.container}>
      <Header></Header>
      <div className={styles.mainContent}>
        <Component {...pageProps} />
      </div>
      <Footer></Footer>
    </main>
  );
}
