import { Link } from 'react-router-dom';
import './MenuBar.css';

export function MenuBar() {
    return (
        <>
            <div className='menu-bar'>
                <Link to='/LuxuryCarsPage' className='menu-links'>Luxury Cars</Link>
                <Link to='/RegularCarsPage' className='menu-links'>Regular Cars</Link>
                <Link to='/' className='menu-links'>Find US</Link>
            </div>
        </>
    )
}