import Logo from '../../assets/Logo.svg'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagream.svg'
import './Footer.css'
const Footer = () => {
    return (
        <footer className="footer p-20 bg-[#D9D9D9] mt-[195px]">
            <aside>
                <img src={Logo} alt="this is logo" />
                <p className='Ak-logo'>CAR COMPANY</p>
            </aside>
            <nav>
                <h6 className="footer-title">Menu</h6>
                <a className="link link-hover">Home</a>
                <a className="link link-hover">Car Catalogue</a>
                <a className="link link-hover">Services</a>
            </nav>
            <nav>
                <h6 className="footer-title">Further Information</h6>
                <a className="link link-hover">Terms & Conditions</a>
                <a className="link link-hover">Privicy Policy</a>
            </nav>
            <nav>
                <h6 className="footer-title">Contact us</h6>
                <a className="link link-hover">647P+4G5,Seif  <br/>Al-Doleh, Aleppo, Syria</a>
                <a className="link link-hover">+96323456</a>
                <a className="link link-hover">tagred@gmail.com</a>
            </nav>
            <nav>
                <h6 className="footer-title">Follow us</h6>
                <div className='flex gap-3'>
                    <img src={facebook} alt="" />
                    <img src={twitter} alt="" />
                    <img src={instagram} alt="" />
                </div>
            </nav>
        </footer>
    )
}

export default Footer
