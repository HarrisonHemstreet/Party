import Head from 'next/head'
import styles from '../styles/pages/Home.module.scss'

const Home = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Party.com</title>
                <meta name="eCommerce website for buying party supplies" content="eCommerce website for buying party supplies" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>

            </main>

        </div>
    )
}

export default Home;