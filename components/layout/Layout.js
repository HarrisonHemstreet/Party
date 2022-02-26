import Link from 'next/link';
import styles from '../../styles/components/layout/Layout.module.scss';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
    return (
        <div style={styles}>
            <Navbar />
            <Footer /> 
        </div>
    )
}

export default Layout;
