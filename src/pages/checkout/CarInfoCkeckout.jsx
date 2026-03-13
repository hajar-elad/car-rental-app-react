import { cars } from "../../data/cars"
import { useSearchParams } from "react-router-dom"


export function CarInfoCheckout(){
    const [searchParams] = useSearchParams();
    const carId = searchParams.get('id');

    return (
       <div className="checkout=car-infos">
                    {cars.map((car) => {
                        if(car.id == carId) {
                            return(
                                 <div key={car.id} className="car-infos-container-checkout">
                                    <img className="car-image" src={car.image} />
                                    <div className="car-infos">
                                        <div className="car-name">{car.name} - {car.fuel} - {car.year}</div>
                                        <div className="car-price">{(car.price).toFixed(2)} DHS</div>
                                    </div>
                                </div>)
                          
                        }
                        

                    })
                    }

                </div>
    )
}