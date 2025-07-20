import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from "motion/react";
import '../css/introAnimation.css'

import { useTranslation } from 'react-i18next';


const IntroAnimationC = () => {
    const { scrollYProgress } = useScroll();
    const sectionRef = useRef(null);
    const [sectionTop, setSectionTop] = useState(0);
    const [opacity, setOpacity] = useState(1);

    const { t } = useTranslation();



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


    useEffect(() => {
        const unsubscribe = scrollYProgress.onChange((latest) => {
            if (latest >= 0.25) {
                setTimeout(() => setOpacity(0), 200);
            } else {
                setOpacity(1);
            }
        });

        return () => unsubscribe();
    }, [scrollYProgress]);


    const start = sectionTop;
    const end = sectionTop + window.innerHeight;
    const scrollYProgressInSection = useTransform(scrollYProgress, [start, end], [0, 1]);


    const textX = useTransform(scrollYProgressInSection, [0, 1], ["50%", "-300%"]);
    const blackScreenX = useTransform(scrollYProgressInSection, [0, 1], ["-110%", "0%"]);
    const meImg = useTransform(scrollYProgressInSection, [0, 1], ["-50%", "15%"]);
    const newTextY = useTransform(scrollYProgressInSection, [0, 1], ["-50%", "50%"]);





    return (
        <div>
            <div className="introContainer" style={{ height: "400vh" }}>
                <div ref={sectionRef} style={{ height: "100vh", background: "#fff", overflow: "hidden" }}>
                    <motion.div
                        style={{
                            position: "fixed",
                            top: "0",
                            left: blackScreenX,
                            width: "100vw",
                            height: "100vh",
                            backgroundColor: "black",
                            zIndex: 1,
                            opacity: opacity,
                            transition: "opacity 0.5s ease-out"

                        }}
                    ></motion.div>

                    <motion.img
                        src={`${process.env.PUBLIC_URL}/me.png`}
                        alt='me'
                        style={{
                            position: "fixed",
                            top: '18vh',
                            left: meImg,
                            opacity: opacity,
                            zIndex: 1,
                            width: "30vw",
                            height: "60vh",
                            WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
                            maskImage: "radial-gradient(circle, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)",
                            // filter: "drop-shadow(0px 0px 20px rgba(0,0,0,0.5))"
                        }}
                    ></motion.img>

                    <motion.h1 className='introHeadline'
                        style={{
                            position: "fixed",
                            top: "calc(70% - 2em)",
                            left: "calc(50% - 2em)",
                            transform: "translate(-50%, -50%)",
                            // transform: "translateX(-50%)",
                            fontSize: "10rem",
                            whiteSpace: "nowrap",
                            mixBlendMode: "difference",
                            color: "white",
                            x: textX,
                            zIndex: 2,
                            opacity: opacity,
                        }}
                    >
                        {/* Hi! <br /> I'm Eli */}
                        {t('intro.hi')}<br />{t('intro.name')}

                    </motion.h1>


                    <div
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100vw",
                            height: "100vh",
                            overflow: "hidden",
                            zIndex: 1,
                        }}
                    >
                        <motion.h1
                            style={{
                                position: "absolute",
                                top: newTextY,
                                left: "65%",
                                transform: "translate(-50%, -50%)",
                                fontSize: "3rem",
                                whiteSpace: "nowrap",
                                color: "white",
                                opacity: opacity,
                            }}

                        >
                            {/* Welcome
                            <br />
                            <br />
                            to my portfolio */}

                            {t('intro.welcome')} <br /><br /> {t('intro.portfolio')}


                        </motion.h1>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default IntroAnimationC;
