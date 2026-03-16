import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import './Home.css';

export function Home() {
    return (

        <>

            <Header />

            <div className='home-container'>
                <div className='category-container'>
                    <Link to='/luxurycarspage'>
                        <img
                            src='/images/luxury-cars/ferrari-laferrari-yellow-2026.jpg'
                            className='category-car-image'
                        />
                    </Link>
                    <div className='category-title'>Luxury Cars</div>
                </div>
                <div className='category-container'>
                    <Link to='/regularcarspage'>
                        <img
                            src='/images/regular-cars/peugeot-208-black-2024.jpg'
                            className='category-car-image'
                        />
                    </Link>
                    <div className='category-title'> Regular Cars</div>
                </div>

            </div>

            <Footer />

        </>
    )
}