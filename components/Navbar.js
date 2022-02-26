import Link from 'next/link';
const Navbar = () => {
    return (
        <ul>
            <li><Link href="/">Party Home</Link></li>
            <li><Link href="/Shop">Shop</Link></li>
            <li><Link href="/Blog">Blog</Link></li>
            <li><Link href="/About">About</Link></li>
            <li><Link href="/ShoppingCart">Shopping Cart</Link></li>
        </ul>
    )
}

export default Navbar;
