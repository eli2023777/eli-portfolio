
import { motion } from 'framer-motion';
import '../css/navbar.css';
import { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Form, Button, Modal } from "react-bootstrap";
import { GeneralContext } from '../App';
import { DualIcon } from '../helpers/DualIcon';




const Navbar = ({ show }) => {
    const { isDark, setIsDark } = useContext(GeneralContext);

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
                className={`topNav ${menuOpen ? 'open' : ''} ${languageSelected === 'he' ? 'rtl' : 'ltr'}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: show ? 1 : 0 }}
                transition={{ duration: 1 }}
            >
                <div className="profile">
                    <a href="#">
                        <img src={`${process.env.PUBLIC_URL}/images/me.jpeg`} alt="me" />
                    </a>
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



                    {/* Dark/light mood button */}
                    <Button variant='none'
                        className='darkIcon'
                        onClick={() => {
                            setIsDark(isDark ? false : true);
                            document.body.classList.toggle("dark", !isDark);
                        }} >

                        {isDark ?
                            <DualIcon iconName="sun" />
                            :
                            <DualIcon iconName="moon" />
                        }

                    </Button>


                    {/* Language buttons */}
                    <div className='navbarLngBtns'>

                        <Button
                            variant='none'
                            //  variant={languageSelected === 'en' ? 'dark' : 'none'}
                            className={`d-flex justify-content-center align-items-center
                             ${languageSelected === 'en' ? 'selected' : ''}`}
                            onClick={() => { i18n.changeLanguage('en'); setLanguageSelected('en'); }}>
                            <img className='navbarLngImg' src={`${process.env.PUBLIC_URL}/icons/us-flag.svg`} alt="us-flag" />
                        </Button>

                        <Button
                            //  variant={languageSelected === 'he' ? 'dark' : 'none'}
                            variant='none'
                            className={`d-flex justify-content-center align-items-center
                             ${languageSelected === 'he' ? 'selected' : ''}`}
                            onClick={() => { i18n.changeLanguage('he'); setLanguageSelected('he'); }}>
                            <img className='navbarLngImg' src={`${process.env.PUBLIC_URL}/icons/israel-flag.svg`} alt="israel-flag" />
                        </Button>

                    </div>


                </ul>



            </motion.nav >


            <div id="hamburgerContainer"
                className={`${menuOpen ? 'open' : ''} ${languageSelected === 'he' ? 'rtl' : 'ltr'}`}
                onClick={() => setMenuOpen(!menuOpen)}         >
                <div className="hamburger"></div>
                <div className="hamburger"></div>
                <div className="hamburger"></div>
            </div>
            {/* </div> */}
        </>
    );
};

export default Navbar;
