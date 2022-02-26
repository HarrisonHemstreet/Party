import '../styles/globals.scss';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
    return (
        <Navbar>
            <Component {...pageProps} />
        </Navbar>
    );
}

export default MyApp
