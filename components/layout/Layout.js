import Head from 'next/head'
import Link from 'next/link';
import styles from '../../styles/components/layout/Layout.module.scss';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = (props) => {
    return (
        <>
            <Head>
                <title>PRTY PWR</title>
                <meta name="eCommerce website for buying party supplies" content="eCommerce website for buying party supplies" />
                <link rel="icon" href="/balloon.png" />
            </Head>
            <Navbar />
            <main>{props.children}</main>
            <Footer /> 
        </>
    )
}

export default Layout;
