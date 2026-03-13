import './Footer.css';
import wtsIcon from '../assets/whatsap.png'
import emailIcon from '../assets/email.png'

export function Footer() {
    return (
        <>
            <footer>
                <div class="contact">
                    <div class="contact-us">CONTACTEZ-NOUS :</div>
                    <div class="phone-nbr">
                        <a href="https://wa.me/212701131213" target="_blank" title="Nous sommes joignable sur whatsapp">
                            <img src={wtsIcon} class="whatsapp-icon" />
                        </a>
                        <div>00212 701 13 12 13</div>
                    </div>
                    <div class="email">
                        <a href="mailto:Gadgets-Pro-Email@gmail.com">
                            <img src={emailIcon} class="email-icon" />
                        </a>
                        <div>Rent-Your-Car@gmail.com</div>
                    </div>
                </div>

                <div class="copyright">
                    Copyright © 2025, GAGDETS tous droits reserves.
                </div>

            </footer>
        </>
    )
}