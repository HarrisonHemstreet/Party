import Image from 'next/image';
import styles from '../styles/pages/Home.module.scss'

const Home = () => {
    return (
        <div className={styles.container}>
            <img src='/balloons-background.jpg'/>
            <span className='firstspan'>Let's get it <br /> started!</span>
            <p><strong>PRTY PWR has the highest quality materials and <br/>
            services to bring your party to the next level.</strong></p>
        </div>
    );
}

export default Home;