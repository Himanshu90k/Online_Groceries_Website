import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="absolute bottom-0 w-full h-10 md:h-15 bg-customRed flex justify-center items-center">
            <p className="text-xxs md:text-base font-inter text-white font-semibold">Designed and Developed by Himanshu Rawat | <Link className="hover:text-yellow-400" target="_blank" title="contact" 
            to='https://api.whatsapp.com/send/?phone=%2B919968453518&text=I%27m+interested+in+connecting+with+you&type=phone_number&app_absent=0'>Contact</Link></p>
        </footer>
    );
};

export default Footer;