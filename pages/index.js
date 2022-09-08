import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <html dir="rtl" lang="he"></html>
        <meta content="text/html" charset="UTF-8" http-equiv="content-type" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <header>

        </header>

        <section className="songs">
          <ul>
            <Link href={"/song1"}>
              <li className="song">
                <h3>שם השיר</h3>
              </li>
            </Link>
            <li className="song">
              <h3>שם השיר</h3>
            </li>
            <li className="song">
              <h3>שם השיר</h3>
            </li>
            <li className="song">
              <h3>שם השיר</h3>
            </li>
            <li className="song">
              <h3>שם השיר</h3>
            </li>
            <li className="song">
              <h3>שם השיר</h3>
            </li>
            <li className="song">
              <h3>שם השיר</h3>
            </li>
            <li className="song">
              <h3>שם השיר</h3>
            </li>
            <li className="song">
              <h3>שם השיר</h3>
            </li>
            <li className="song">
              <h3>שם השיר</h3>
            </li>
          </ul>
        </section>
      </div>
      

      
    </div>
  )
}
