import { motion } from "motion/react";
import { Button } from "react-bootstrap";
import { useState, useRef } from 'react';
import FeaturedProjects from '../projects/FeaturedProjects.js'
import MiniApps from '../projects/MiniApps.js';
import LandingPages from '../projects/LandingPages.js';

const Projects = ({ manyVariants, item, t }) => {

    const [activeBtn, setActiveBtn] = useState("featured");
    const contentRef = useRef(null);

    // Scroll Into View
    const handleClick = (selectedView) => {
        setActiveBtn(selectedView);
        setTimeout(() => {
            contentRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 0);
    };


    return (
        <div>
            <motion.div
                variants={manyVariants}
                initial="hidden"
                whileInView="visible"
            >

                <div id='projectsSection'>
                    <motion.div variants={item}>
                        <h1 className='headline'>{t('home.myWorks')}</h1>
                    </motion.div>

                    {/* Projects Buttons */}

                    <div className="ProjectsButtons">
                        <motion.div variants={item}>

                            <Button
                                variant={activeBtn === 'featured' ? 'dark' : 'light'}
                                className="border border-black"
                                onClick={() => handleClick("featured")}>
                                {t('home.featured')}
                            </Button>

                        </motion.div>

                        <motion.div variants={item}>
                            <Button
                                variant={activeBtn === 'mini' ? 'dark' : 'light'}
                                className="border border-black"
                                onClick={() => handleClick("mini")}>
                                {t('home.miniApps')}
                            </Button>
                        </motion.div>

                        <motion.div variants={item}>
                            <Button
                                variant={activeBtn === 'landing' ? 'dark' : 'light'}

                                className="border border-black"
                                onClick={() => handleClick("landing")}>
                                {t('home.landingPages')}
                            </Button>
                        </motion.div>

                    </div >


                    <div
                        ref={contentRef}
                        style={{ marginTop: "40px" }}>

                        {activeBtn === "featured" && (
                            <FeaturedProjects />

                        )}

                        {activeBtn === "mini" && (
                            <MiniApps />

                        )}

                        {activeBtn === "landing" && (
                            <LandingPages />

                        )}

                    </div >
                </div >

            </motion.div >

        </div>
    )
}

export default Projects
