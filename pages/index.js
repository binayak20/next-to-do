import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="keyword" content="todos" />
        <title>Todo List | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>
          Loren spam Loren spam Loren spam Loren spam Loren spam Loren spam
          Loren spam Loren spam Loren spam Loren spam{" "}
        </p>
        <Link href="/todos">
          <a className={styles.btn}>See Todo List</a>
        </Link>
      </div>
    </>
  );
}
