//import { useState } from "react";
import { Header } from "../../components/Header"
import { CarInfoCheckout } from "./CarInfoCkeckout"
import { Footer } from '../../components/Footer';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from '@emailjs/browser';
import './Checkout.css'

export function Checkout() {

    //const [currentDateTime] = useState(() => new Date());
    // const toLocalDate = currentDateTime.toLocaleDateString();

    const schema = yup.object().shape({
        fName: yup.string().required("Please Enter Your First Name"),
        lName: yup.string().required("Please Enter A Valid Email Adress"),
        email :yup.string().required(),
        phone: yup.number().integer().required(),
        startDate: yup.date().min(new Date(), "The start date can't be in the past").required(),
        returnDate: yup.date().min(yup.ref("startDate"), "The Return Date Should Be After The Pick Up Date").required()
    });

    const { register, handleSubmit, formState: { errors }, reset } = useForm(
        {
            resolver: yupResolver(schema),
        }
    );


    const onSubmit = (data) => {
        console.log(data);
        //Send Email via EmailJS
        emailjs.send('service_hga1poa', 'template_1sgmna4', data, 'GOMix2LO1ZuwB4JUt')
            .then(() => {
                alert('Message sent successfully!');
                reset();
            }, (error) => {
                console.error('Failed...', error);
            });
    }

    return (
        <>

            <Header />

            <div className='checkout'>
                <form onSubmit={handleSubmit(onSubmit)} className="checkout-form">
                    <label htmlFor="f-name">First Name</label>
                    <input type="text" id="f-name" {...register("fName")} />
                    <span>{errors.fName?.message}</span>

                    <label htmlFor="l-name">Last Name</label>
                    <input type="text" id="l-name" {...register("lName")} />
                    <span>{errors.lName?.message}</span>

                    <label htmlFor="email">Last Name</label>
                    <input type="email" id="email" {...register("email")} />
                    <span>{errors.email?.message}</span>

                    <label htmlFor="phone-nbr">Phone Nunmber</label>
                    <input type="number" id="phone-nbr" {...register("phone")} />
                    <span>{errors.phone?.message}</span>

                    <label htmlFor="start-date">Start Date</label>
                    <input type="date" id="start-date" {...register("startDate")} />
                    <span>{errors.startDate?.message}</span>

                    <label htmlFor="return-date">Return Date</label>
                    <input type="date" id="return-date" {...register("returnDate")} />
                    <span>{errors.returnDate?.message}</span>

                    <button className="send-button">SEND</button>

                </form>

                <CarInfoCheckout />

            </div>
            <Footer />

        </>
    )
}