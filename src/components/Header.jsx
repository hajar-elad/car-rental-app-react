import { Link } from 'react-router-dom';
import './Header.css';
import { MenuBar } from './MenuBar';

export function Header(){
    return (
        <>
        <div className='header-container'>
            <Link to='/' className='business-name'><span className='big-letter'>R</span>ent your car</Link>
            <div className='moving-image'></div>
        </div>

        <MenuBar/>
        
        </>
    )
}