import styles from '../styles/pages/Home.module.scss';
import { useSelector, useDispatch } from 'react-redux';

const Home = () => {
    let state = useSelector(state => state);
    console.log('state', state);
    return (
        <div className={styles.container}>
            <div></div>
            <img src='/balloons-background.jpg'/>
            <span className='firstspan'>Let's get it <br /> started!</span>
            <p><strong>PRTY PWR has the highest quality materials and <br/>
            services to bring your party to the next level.</strong></p>
        </div>
    );
}

export default Home;