import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/components/layout/Navbar.module.scss';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li className={styles.logo}>
                    <Image src="/balloon.png" alt='balloon logo' width={40} height={40}/>
                </li>
                <li><Link href="/">Party Home</Link></li>
                <li><Link href="/Shop">Shop</Link></li>
                <li><Link href="/Blog">Blog</Link></li>
                <li><Link href="/About">About</Link></li>
                <li><Link href="/ShoppingCart">Shopping Cart</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;
