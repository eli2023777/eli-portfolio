
import { motion } from 'framer-motion';
import '../css/navbar.css';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Form, Button, Modal } from "react-bootstrap";


const Navbar = ({ show }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { t, i18n } = useTranslation();
    const [languageSelected, setLanguageSelected] = useState(i18n.language);
    const [activeLink, setActiveLink] = useState('');

    const handleClick = (sectionId) => {
        setActiveLink(sectionId);
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <motion.nav
                className={`topNav ${menuOpen ? 'open' : ''}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: show ? 1 : 0 }}
                transition={{ duration: 1 }}
            >
                <ul className="profile">
                    <a href="#">
                        <img src={`${process.env.PUBLIC_URL}/images/me.jpeg`} alt="me" />
                    </a>
                </ul>


                <div className='navbarLngBtns'>

                    <Button variant={languageSelected === 'en' ? 'dark' : 'none'}
                        onClick={() => { i18n.changeLanguage('en'); setLanguageSelected('en'); }}>
                        <img className='navbarLngImg' src={`${process.env.PUBLIC_URL}/icons/us-flag.svg`} alt="us-flag" />
                    </Button>

                    <Button variant={languageSelected === 'he' ? 'dark' : 'none'}
                        onClick={() => { i18n.changeLanguage('he'); setLanguageSelected('he'); }}>
                        <img className='navbarLngImg' src={`${process.env.PUBLIC_URL}/icons/israel-flag.svg`} alt="israel-flag" />
                    </Button>

                </div>


                <ul className="navBar">

                    <li><a href="#aboutSection"
                        className={activeLink === 'aboutSection' ? 'active' : ''}
                        onClick={() => handleClick('aboutSection')}
                    >
                        {t("navbar.about")}
                    </a></li>


                    <li><a href="#projectsSection"
                        className={activeLink === 'projectsSection' ? 'active' : ''}
                        onClick={() => handleClick('projectsSection')}
                    >
                        {t("navbar.projects")}
                    </a></li>


                    <li><a href="#contactSection"
                        className={activeLink === 'contactSection' ? 'active' : ''}
                        onClick={() => handleClick('contactSection')}
                    >
                        {t("navbar.contact")}
                    </a></li>

                </ul>



            </motion.nav>


            <div id="hamburgerContainer"
                className={menuOpen ? 'open' : ''}
                onClick={() => setMenuOpen(!menuOpen)}         >
                <div className="hamburger"></div>
                <div className="hamburger"></div>
                <div className="hamburger"></div>
            </div>
        </>
    );
};

export default Navbar;


// const Navbar = ({ show }) => {
//     return (
//         <div
//         // className={`navbar-container ${show ? 'visible' : 'hidden'}`}
//         >
//             <nav class="topNav">

//                 <ul class="profile">
//                     {/* <img src="/images/me.jpeg" alt="me"> */}
//                     <li><button><a href="#">Eli Holzman</a></button></li>
//                 </ul>


//                 <ul class="navBar">
//                     <li><button><a href="#contactSection">צור קשר</a></button></li>
//                     <li><button><a href="#projectsSection">שירותים</a></button></li>
//                     <li><button><a href="#onMeSection">אודות</a></button></li>
//                     {/* <li><button><a href="#">ראשי</a></button></li> */}

//                 </ul>

//                 <div class="navBarMobile"></div>

//                 <div id="hamburgerContainer">
//                     <div class="hamburger"></div>
//                     <div class="hamburger"></div>
//                     <div class="hamburger"></div>
//                 </div>

//             </nav>
//         </div >
//     )
// }

// export default Navbar
