import { Header } from "../../components/Header"
import { CarInfoCheckout } from "./CarInfoCkeckout"
import { Footer } from '../../components/Footer';
import './Checkout.css'

export function Checkout() {

    return (
        <>

            <Header />

            <div className='checkout'>
                <form action="" className="checkout-form">
                    <label htmlFor="f-name">First Name</label>
                    <input type="text" id="f-name" />

                    <label htmlFor="l-name">Last Name</label>
                    <input type="text" id="l-name" />

                    <label htmlFor="phone-nbr">Phone Nunmber</label>
                    <input type="text" id="phone-nbr" />

                    <label htmlFor="start-date">Start Date</label>
                    <input type="date" id="start-date" />

                    <label htmlFor="return-date">Return Date</label>
                    <input type="date" id="return-date" />

                    <button className="send-button">SEND</button>

                </form>

                <CarInfoCheckout />
                
            </div>
            <Footer />

        </>
    )
}