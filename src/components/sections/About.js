import { motion } from "motion/react";
import '../../css/components/sections/about.css';

const About = ({ variants, item, t }) => {


    return (
        <div>
            < motion.div
                variants={variants}
                initial="hidden"
                whileInView="visible"
            >

                <motion.div variants={item} id='aboutSection'>

                    <img src={`${process.env.PUBLIC_URL}/me.jpeg`} alt="Big me" />
                    <div className="textOnMe">
                        <h1 className='headline'>{t('home.aboutMe')}</h1>
                        {t("home.aboutParagraphs", { returnObjects: true }).map((paragraph, index) => (
                            <p className='aboutMePar' key={index}>{paragraph}</p>
                        ))}

                    </div >

                </motion.div >
            </motion.div >

        </div>
    )
}

export default About
