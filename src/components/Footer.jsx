import './Footer.css';
import wtsIcon from '../assets/whatsap.png'
import emailIcon from '../assets/email.png'

export function Footer() {
    return (
        <>
            <footer>
                <div className="contact">
                    <div className="contact-us">CONTACTEZ-NOUS :</div>
                    <div className="phone-nbr">
                        <a href="https://wa.me/212701131213" target="_blank" title="Nous sommes joignable sur whatsapp">
                            <img src={wtsIcon} className="whatsapp-icon" />
                        </a>
                        <div>00212 701 13 12 13</div>
                    </div>
                    <div className="email">
                        <a href="mailto:Gadgets-Pro-Email@gmail.com">
                            <img src={emailIcon} className="email-icon" />
                        </a>
                        <div>Rent-Your-Car@gmail.com</div>
                    </div>
                </div>

                <div className="copyright">
                    Copyright © 2025, GAGDETS tous droits reserves.
                </div>

            </footer>
        </>
    )
}