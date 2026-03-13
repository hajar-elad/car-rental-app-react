import { Header } from '../../components/Header';
import { DisplayPage } from './shared-components/DisplayPage';
import { Footer } from '../../components/Footer';
import './CarsPage.css'

export function RegularCarsPage({category}) {
    return (
        <>
            <Header />
            <DisplayPage category = {category} />
            <Footer />
        </>
    )
} 