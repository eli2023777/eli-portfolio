import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from "motion/react";
import '../css/introAnimation.css'

import { useTranslation } from 'react-i18next';

import { Form, Button, Modal } from "react-bootstrap";
import { useInView } from "framer-motion";



const IntroAnimationC = ({ setIntroFinished }) => {
    const { scrollYProgress } = useScroll();
    const sectionRef = useRef(null);
    const [sectionTop, setSectionTop] = useState(0);
    const [opacity, setOpacity] = useState(1);

    const { t, i18n } = useTranslation();
    const [languageSelected, setLanguageSelected] = useState(i18n.language);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const updateSectionTop = () => {
            if (sectionRef.current) {
                setSectionTop(sectionRef.current.getBoundingClientRect().top);
            }
        };

        window.addEventListener("scroll", updateSectionTop);
        updateSectionTop();

        return () => window.removeEventListener("scroll", updateSectionTop);
    }, []);


    const isInView = useInView(sectionRef, { margin: "100% 0px -100% 0px" });

    useEffect(() => {
        if (!isInView) {
            setOpacity(0);
            setIntroFinished(true);
        } else {
            setOpacity(1);
            setIntroFinished(false);
        }
    }, [isInView, setIntroFinished]);


    const start = sectionTop;
    const end = sectionTop + window.innerHeight;
    const scrollYProgressInSection = useTransform(scrollYProgress, [start, end], [0, 1]);


    const textX = useTransform(scrollYProgressInSection, [0, 1], ["50%", "-300%"]);
    const blackScreenX = useTransform(scrollYProgressInSection, [0, 1], ["-110%", "0%"]);
    const meImg = useTransform(scrollYProgressInSection, [0, 1],
        isMobile ? ["-200%", "18%"] : ["-50%", "15%"]);
    const newTextY = useTransform(scrollYProgressInSection, [0, 1],
        isMobile ? ["-200%", "73%"] : ["-400%", "50%"]);




    return (
        <div>
            <div className="introContainer" style={{ height: "310vh" }}>

                <div className='languageButtons'
                    style={{ opacity: opacity }}           >

                    <Button variant={languageSelected === 'en' ? 'primary' : 'none'}
                        className="d-flex justify-content-center align-items-center"
                        onClick={() => { i18n.changeLanguage('en'); setLanguageSelected('en'); }}>
                        <img className='languageImg' src={`${process.env.PUBLIC_URL}/icons/us-flag.svg`} alt="us-flag" />
                    </Button>

                    <Button variant={languageSelected === 'he' ? 'primary' : 'none'}
                        className="d-flex justify-content-center align-items-center"
                        onClick={() => { i18n.changeLanguage('he'); setLanguageSelected('he'); }}>
                        <img className='languageImg' src={`${process.env.PUBLIC_URL}/icons/israel-flag.svg`} alt="israel-flag" />
                    </Button>

                </div>

                <div ref={sectionRef} style={{ height: "100vh", background: "#fff", overflow: "hidden" }}>
                    <motion.div
                        style={{
                            position: "fixed",
                            top: "0",
                            left: blackScreenX,
                            width: "100%",
                            height: "100vh",
                            backgroundColor: "black",
                            zIndex: 1,
                            opacity: opacity,
                            transition: "opacity 0.3s ease-out"

                        }}
                    ></motion.div>

                    <motion.img className='meImg'
                        src={`${process.env.PUBLIC_URL}/me.png`}
                        alt='me'
                        style={{
                            position: "fixed",
                            left: meImg,
                            opacity: opacity,
                            zIndex: 1,
                            WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
                            maskImage: "radial-gradient(circle, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)",
                        }}
                    ></motion.img>

                    <motion.h1 className='introHeadline'
                        dir={languageSelected === 'he' ? 'rtl' : 'ltr'}
                        style={{
                            position: "fixed",
                            top: "calc(70% - 2em)",
                            left: languageSelected === 'he' ? "calc(50% - 3em)" : "calc(50% - 2.3em)",
                            transform: "translate(-50%, -50%)",
                            fontSize: "clamp(6rem, 9vw, 10rem)",
                            mixBlendMode: "difference",
                            color: "white",
                            x: textX,
                            zIndex: 2,
                            opacity: opacity,
                            whiteSpace: "normal",
                            textAlign: "center",
                            lineHeight: 1.2,
                            unicodeBidi: 'plaintext'
                        }}
                    >
                        {t('intro.hi')}<br />{t('intro.name')}

                    </motion.h1>


                    <div
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100vh",
                            overflow: "hidden",
                            zIndex: 1,
                        }}
                    >

                        <motion.h1 className='newTextY'
                            style={{
                                position: "absolute",
                                top: newTextY,
                                transform: "translate(-50%, -50%)",
                                fontSize: "3rem",
                                fontSize: "clamp(2.5rem, 8vw, 3rem)",
                                whiteSpace: "nowrap",
                                color: "white",
                                opacity: opacity,
                            }}
                        >

                            {t('intro.welcome')} <br /><br /> {t('intro.portfolio')}

                        </motion.h1>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default IntroAnimationC;
