import Link from 'next/link';
import styles from '../../styles/components/layout/Footer.module.scss';

const Footer = () => {
    return (
        <div style={styles}>
            <h3>FOOTER</h3>
            <Link href='/'>Go Back Home</Link>
        </div>
    )
}

export default Footer;
