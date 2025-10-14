import React from 'react'
import '../css/featuredProjects.css'
import { Button } from 'react-bootstrap';

import { useTranslation } from 'react-i18next';
import { motion } from "motion/react";


const FeaturedProjects = () => {
    const { t } = useTranslation();

    const manyVariants = {
        hidden: {},
        visible: {
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.8 // 0.2 Sec delay
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <>
            <motion.div
                variants={manyVariants}
                initial="hidden"
                whileInView="visible"
            // viewport={{ once: true, amount: 0.3 }}
            >
                <div className='featuredContainer'>

                    <motion.div variants={item} className='project'>
                        <img className='featuredProjectImg'
                            onDoubleClick={() => window.open(
                                `https://eli2023777.github.io/events-site/`,
                                '_blank', 'noopener,noreferrer')}
                            src={`${process.env.PUBLIC_URL}/images/EventsSitePrtSc.png`} alt="Events Site"
                        />
                        <div className="text">
                            {/* <h3>Events site</h3>
                    <p>A full-stack event management website, <br /> using React, Node.js, and
                        MongoDB <br /> as my final project at HackerU College.
                    </p>
                    <p>The application includes user and event management <br /> with a calendar feature integrated via a React library, <br /> allowing business users to create events and regular users <br /> to view and like them.
                    </p>
                    <p>This project demonstrates end-to-end development with a focus on interactive scheduling and role-based functionality.
                    </p> */}

                            <h3>{t("featured.eventsSite.title")}</h3>
                            <p>{t("featured.eventsSite.desc1")}</p>
                            <p>{t("featured.eventsSite.desc2")}</p>
                            <p>{t("featured.eventsSite.desc3")}</p>

                            <button className='liveSiteBtn'>
                                <a target="_blank" rel="noreferrer" href="https://eli2023777.github.io/events-site/">
                                    {/* LIVE SITE */}
                                    {t("featured.liveSite")}

                                </a>
                            </button>

                            <button className='viewCodeBtn'>
                                <a target="_blank" rel="noreferrer" href="https://github.com/eli2023777/events-site">
                                    {/* VIEW CODE */}
                                    {t("featured.viewCode")}

                                </a>
                            </button>

                            {/* download button */}
                            <button className='downloadBtn'>
                                <a target="_blank" rel="noreferrer"
                                    href={`/downloads/eventsSite.zip`} download>
                                    {t("featured.download")}

                                </a>
                            </button>

                        </div>
                    </motion.div>


                    {/* Bussines Cards Site */}
                    <motion.div variants={item} className='project'>

                        <img className='featuredProjectImg'
                            onDoubleClick={() => window.open(
                                `https://github.com/eli2023777/my-cards`,
                                '_blank', 'noopener,noreferrer')}
                            src={`${process.env.PUBLIC_URL}/images/BcardsPrtSc.png`} alt="Bussiness Cards site"
                        />
                        <div className="text">


                            <h3>{t("featured.cardsSite.title")}</h3>
                            <p>{t("featured.cardsSite.desc1")}</p>
                            <p>{t("featured.cardsSite.desc2")}</p>



                            {/* LIVE SITE */}
                            {/* 
                            <button className='liveSiteBtn'>
                                <a target="_blank" rel="noreferrer"
                                    href="https://eli2023777.github.io/my-cards/">
                                    {t("featured.liveSite")}

                                </a>
                            </button> */}


                            {/* view code button */}
                            <button className='liveSiteBtn'>
                                <a target="_blank" rel="noreferrer"
                                    href="https://github.com/eli2023777/my-cards">
                                    {/* VIEW CODE */}
                                    {t("featured.viewCode")}

                                </a>
                            </button>

                            {/* download button */}
                            <button className='downloadBtn'>
                                <a target="_blank" rel="noreferrer"
                                    href={`/downloads/bussinesCards.zip`} download>
                                    {t("featured.download")}

                                </a>
                            </button>

                        </div>
                    </motion.div>

                    <motion.div variants={item} className='project'>

                        <img className='featuredProjectImg'
                            onDoubleClick={() => window.open(
                                `https://github.com/eli2023777/NodeJS-Project`,
                                '_blank', 'noopener,noreferrer')}
                            src={`${process.env.PUBLIC_URL}/images/nodeJSPrtSc.png`} alt="CRUD API"
                        />
                        <div className="text">

                            <h3>{t("featured.crudApi.title")}</h3>
                            <p>{t("featured.crudApi.desc")}</p>

                            {/* view code button */}
                            <button className='liveSiteBtn'>
                                <a target="_blank" rel="noreferrer" href="https://github.com/eli2023777/NodeJS-Project">
                                    {t("featured.viewCode")}

                                </a>
                            </button>

                            {/* download button */}
                            <button className='downloadBtn'>
                                <a target="_blank" rel="noreferrer"
                                    href={`/downloads/CRUD-API.zip`} download>
                                    {t("featured.download")}
                                </a>
                            </button>

                        </div>

                    </motion.div >
                </div>
            </motion.div>
        </>
    )
}

export default FeaturedProjects;
