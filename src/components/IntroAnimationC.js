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
    const [blackSCOpacity, setBlackSCOpacity] = useState(1);

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


    const isInView = useInView(sectionRef, { margin: "350% 0px -100% 0px" });
    const isInMobileView = useInView(sectionRef, { margin: "250% 0px -100% 0px" });
    const isElementsInView = useInView(sectionRef, { margin: "150% 0px -100% 0px" });

    useEffect(() => {

        if (isMobile) {

            if (!isInMobileView) {
                setOpacity(0);
                setIntroFinished(true);
            } else {
                setOpacity(1);
                setIntroFinished(false);
            }
        }

        else {

            if (!isElementsInView)
                setOpacity(0);
            else
                setOpacity(1);

            if (!isInView) {
                setBlackSCOpacity(0);
                setIntroFinished(true);
            } else {
                setBlackSCOpacity(1);
                setIntroFinished(false);
            }
        }

    }, [isElementsInView, isInView, isInMobileView, setIntroFinished]);


    const start = sectionTop;
    const end = sectionTop + window.innerHeight * 4;
    const scrollYProgressInSection = useTransform(scrollYProgress, [start, end], [0, 1]);


    const textX = useTransform(scrollYProgressInSection, [0, 0.4], ["50%", "-300%"]);
    const blackScreenX = useTransform(scrollYProgressInSection, [0, 0.4], ["-100%", "0%"]);
    const blackScreenY = useTransform(scrollYProgressInSection, [0.8, 1], ["0", "-89%"]);
    const meImg = useTransform(scrollYProgressInSection, [0, 0.4],
        isMobile ? ["-200%", "18%"] : ["-50%", "15%"]);
    const newTextY = useTransform(scrollYProgressInSection, [0, 0.4],
        isMobile ? ["-200%", "73%"] : ["-300%", "50%"]);




    return (
        <div>
            <div className="introContainer" style={{ height: isMobile ? "500vh" : "600vh" }}>

                {/* Language Buttons */}
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

                {/* Black Screen */}
                <div ref={sectionRef} style={{ height: "100vh", background: "#fff", overflow: "hidden" }}>
                    <motion.div
                        style={{
                            position: "fixed",
                            top: isMobile ? '0' : blackScreenY,
                            left: blackScreenX,
                            width: "100%",
                            height: "100vh",
                            backgroundColor: "black",
                            zIndex: 1,
                            opacity: isMobile ? opacity : blackSCOpacity,
                            transition: "opacity 0.3s ease-out"
                        }}
                    ></motion.div>

                    {/* Me Img */}
                    <motion.img className='meImg'
                        src={`${process.env.PUBLIC_URL}/me.png`}
                        alt='me'
                        style={{
                            position: "fixed",
                            left: meImg,
                            opacity: opacity,
                            transition: "opacity 0.3s ease-out",
                            zIndex: 1,
                            WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
                            maskImage: "radial-gradient(circle, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)",
                        }}
                    ></motion.img>

                    {/* Intro Headline */}
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
                            transition: "opacity 0.3s ease-out",
                            whiteSpace: "normal",
                            textAlign: "center",
                            lineHeight: 1.2,
                            unicodeBidi: 'plaintext'
                        }}
                    >
                        {t('intro.hi')}<br />{t('intro.name')}

                    </motion.h1>

                    {/* Welcome Text */}
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
                                transition: "opacity 0.3s ease-out"
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
