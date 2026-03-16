import { Link } from 'react-router-dom';
import { cars } from '../../../data/cars'

export function DisplayPage({ category }) {

    return (

        <>
            <div className='cars-page'>
                {
                    //maping data to displayed data
                    cars.map((car) => {
                        if (car.category === category) {
                            return (
                                <div key={car.id} className='car-infos-container'>
                                    <img className="car-image" src={process.env.PUBLIC_URL + car.image} />
                                    <div className="car-infos">
                                        <div className="car-name">{car.name} {process.env.PUBLIC_URL + car.image}- {car.fuel} - {car.year}</div>
                                        <div className="car-price">{(car.price).toFixed(2)} DHS</div>
                                    </div>
                                    <Link to= {`/checkout?id=${car.id}`} className='book-link'>BOOK</Link>
                                </div>
                            )
                        }

                    })
                }
            </div>


        </>
    )
}