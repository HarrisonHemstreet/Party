import Link from 'next/link';
import styles from '../../styles/components/layout/Navbar.module.scss';

const Navbar = () => {
    return (
        <ul className='navbar' style={styles}>
            <li><Link href="/">Party Home</Link></li>
            <li><Link href="/Shop">Shop</Link></li>
            <li><Link href="/Blog">Blog</Link></li>
            <li><Link href="/About">About</Link></li>
            <li><Link href="/ShoppingCart">Shopping Cart</Link></li>
        </ul>
    )
}

export default Navbar;
