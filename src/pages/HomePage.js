import { useEffect, useState, useContext } from 'react';
import IntroAnimation from '../components/IntroAnimation.js';
import Navbar from '../components/Navbar.js';

import '../css/homePage.css';

import { useTranslation } from 'react-i18next';

import { motion } from "motion/react";

import { GeneralContext } from '../App.js';
import About from '../components/sections/About.js';
import Contact from '../components/sections/Contact.js';
import Footer from '../components/sections/Footer.js';
import Projects from '../components/sections/Projects.js';





const HomePage = () => {

  const { isDark } = useContext(GeneralContext);


  const [introFinished, setIntroFinished] = useState(false);



  const { t, i18n } = useTranslation();
  // const [languageSelected, setLanguageSelected] = useState(i18n.language);

  useEffect(() => {
    const body = document.body;

    if (i18n.language === 'he') {
      body.lang = 'he';
      body.classList.remove('lang-en');
      body.classList.add('lang-he');
    } else {
      body.lang = 'en';
      body.classList.remove('lang-he');
      body.classList.add('lang-en');
    }
  }, [i18n.language]);







  const manyVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1 // 0.2 Sec delay
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };





  return (
    <div className='homePageContainer'>


      {/* - INTRO - */}
      {/* Intro Animation Component */}
      <IntroAnimation setIntroFinished={setIntroFinished} />


      {/* - NAVBAR - */}
      {/* Show the Navbar just if the intro finisheded */}
      {introFinished && <Navbar show={introFinished} />}

      <motion.div
        variants={manyVariants}
        initial="hidden"
        whileInView="visible"
      >



        {/* - ICONS section - */}

        <div className="iconsContainer">

          <motion.div className='iconsHeadlineBox' variants={item}>
            <h1 className='headline'>
              {t('home.developerArsenal')}
            </h1>

          </motion.div>


          <div className="icons" >

            <motion.div variants={item} className="icon">

              <img className='iconImg' src={`${process.env.PUBLIC_URL}/icons/img-HTML.png`} alt="html" />
              <h6 className='iconText'>HTML</h6>
            </motion.div>


            <motion.div variants={item} className="icon">

              <img className='iconImg' src={`${process.env.PUBLIC_URL}/icons/img-CSS.png`} alt="css" />
              <h6 className='iconText'>CSS</h6>
              {/* </div> */}
            </motion.div>

            <motion.div variants={item} className="icon">
              <img className='iconImg' src={`${process.env.PUBLIC_URL}/icons/img-Bootstrap.png`} alt="bootstrap" />
              <h6 className='iconText'>Bootstrap</h6>
            </motion.div>


            <motion.div variants={item} className="icon">
              <img className='iconImg' src={`${process.env.PUBLIC_URL}/icons/img-JS.png`} alt="js" />
              <h6 className='iconText'>JavaScript</h6>
            </motion.div>


            <motion.div variants={item} className="icon">
              <img className='iconImg' src={`${process.env.PUBLIC_URL}/icons/img-TS.png`} alt="ts" />
              <h6 className='iconText'>TypeScript</h6>
            </motion.div>


            <motion.div variants={item} className="icon">
              <img className='iconImg' src={`${process.env.PUBLIC_URL}/icons/img-React.png`} alt="react" />
              <h6 className='iconText'>React</h6>
            </motion.div>

            <motion.div variants={item} className="icon">
              <img className='iconImg' src={`${process.env.PUBLIC_URL}/icons/img-NodeJS.png`} alt="node.js" />
              <h6 className='iconText'>NodeJS</h6>
            </motion.div>

            <motion.div variants={item} className="icon">
              <img className='iconImg' src={`${process.env.PUBLIC_URL}/icons/img-NextJS.svg`} alt="next.js" />
              <h6 className='iconText'>NextJS</h6>
            </motion.div>

            <motion.div variants={item} className="icon">
              <img className='iconImg' src={`${process.env.PUBLIC_URL}/icons/img-Git.png`} alt="Git" />
              <h6 className='iconText'>Git</h6>
            </motion.div>

            <motion.div variants={item} className="icon">
              <img className='iconImg' src={`${process.env.PUBLIC_URL}/icons/img-mongoDB.png`} alt="mongoDB" />
              <h6 className='iconText'>MongoDB</h6>
            </motion.div>

          </div>

        </div>

      </motion.div>




      {/* - PROJECTS section - */}


      <Projects manyVariants={manyVariants} item={item} t={t} />




      {/* - ABOUT section - */}

      <About variants={variants} item={item} t={t} />



      {/* - CONTACT section - */}

      <Contact variants={variants} item={item} t={t} />



      {/* - FOOTER - */}

      <Footer t={t} />


    </div>

  );
}

export default HomePage;











{/* <!-- top nav --> */ }
{/* <nav className="topNav">

          <ul className="profile">
            <img src="/me.jpeg" alt="me" />
            <li>Eli Holzman</li>
          </ul>

          <ul className="navBar">
            <li><a href="#conectsContainer">צור קשר</a></li>
            <li><a href="#projectsContainer">שירותים</a></li>
            <li><a href="#onMe">אודות</a></li>
            <li><a href="#">ראשי</a></li>
          </ul>

          <div className="navBarMobile"></div>

          <div id="hamburgerContainer">
            <div className="hamburger"></div>
            <div className="hamburger"></div>
            <div className="hamburger"></div>
          </div>

        </nav> */}



{/* <!-- header --> */ }
{/* <div class="header"> */ }

{/* <div class="headerContainer"> */ }




{/* <motion.div
              className='box headlineHeader"'
              style={{ x: x1 }}>
              <h1>
                Hi!
                <br />
                I'm Eli
              </h1>
            </motion.div> */}

{/* <motion.div className='box textHeader' style={{ x: x2 }}> */ }
{/* <p> */ }
{/* Welcome to my protfolio site */ }
{/* I'm a Frontend Developer, with a passion for creating engaging and user-friendly websites. I have a deep understanding of HTML, CSS, and JavaScript, as well as some experience with popular libraries like React and Bootstrap. I'm always eager to learn and improve my skills. */ }
{/* </p> */ }

{/* <a href="./cv.zip"><button className='viewBtn'>VIEW PROJETCS</button></a>
              <a href="./cv.zip"><button className='viewBtn'>VIEW RESUME</button></a> */}

{/* </motion.div> */ }
{/* 
            <div className="spacer"></div>
          </div>

        </div>
        <div /> */}






{/* <div className='project'>
          <h3>Events site</h3>
          <img src="/images/EventsSitePrtSc.png" alt="Events Site" />
          <button>Live site</button>
          <button>
            <a target="_blank" rel="noreferrer" href="https://github.com/eli2023777/events-site">
              View code
            </a>
          </button>
        </div> */}

{/* 
        <div className='project'>
          <h3>Bussiness Cards site</h3> */}
{/* Img */ }
{/* <button>Live site</button>
          <button><a target="_blank" rel="noreferrer" href="https://github.com/eli2023777/my-cards">View code</a></button>
        </div> */}

{/* <div className='project'>
          <h3>CRUD API</h3> */}
{/* Img */ }
{/* <button><a target="_blank" rel="noreferrer" href="https://github.com/eli2023777/NodeJS-Project">View code</a></button>
        </div> */}


{/* <div className='project'> */ }
{/* <h3>JS projects</h3> */ }
{/* <div class="jsProjectsContainer"> */ }
{/* </div> */ }

{/* Img */ }
{/* <button onClick={() => navigate('/js_projects')}></button> */ }
{/* </div> */ }



{/* Mini Apps */ }
{/* <MiniApps /> */ }

{/* Landing Pages */ }
{/* -- PUT HERE Landing Pages -- */ }




{/* <!-- On me section --> */ }
{/* <div class="aboutMe">
          <img src="/me.jpeg" alt="Big me" />
          <div className="textOnMe">
            <h2>About me</h2>
            <p>

              A Fullstack Developer with experience working with React, Node.js, and MongoDB. I have a passion for learning and exploring new technologies, and I’m always looking for the most efficient way to solve problems and deliver excellent results. Over the years, I've worked on a variety of projects, including developing websites and both client-side and server-side software.
              <br />
              <br />
              Beyond my technical work, I love spending time in nature, working out at the gym, building relationships with people, and growing personally. I believe that a combination of creativity, hard work, and persistence is the key to success.
              <br />
              <br />

              If you're looking for a developer who works in an organized, professional manner and always seeks creative solutions, do not hesitate to send me a message!


            </p> */}
{/* <p>נעים מאוד, קוראים לי אלי הולצמן ואני בן 22 מביתר עילית. אני מגיע מרקע של ישיבות חרדיות שלאחריהן למדתי
              בגרויות במכינה אקדמית של המרכז האקדמי לב. לאחר תקופה הבנתי שאני רוצה ללמוד ולהתעסק בתכנות
              ולמדתי קורס פול סטאק במכללת האקריו
            </p> */}
{/* </div>
        </div> */}

{/* <!-- HTML Projects grid --> */ }
{/* <div id="projectsContainer">
          <div className="textProjects">
            <h2>עבודות נבחרות</h2>
            <p id="mainP">לורם איפסום או בקיצור ליפסום, הוא מלל מקובל וחסר משמעות המשמש “ממלא מקום” בעת עריכה,
              בתחום.
            </p>
          </div>
          <div className="gridContainer">

            <div className="card"><img src="images/coffePrtSc.png" alt="Coffee" />
              <h3>בוקר טוב</h3>
              <p className="pCard">לורם איפסום או בקיצור ליפסום, הוא מלל מקובל וחסר משמעות המשמש “ממלא מקום” בעת עריכה,</p>
              <div className="iconsCardContainer">
                <img src="images/icons/img-HTML.png" alt="HTML" />
                <img src="images/icons/img-CSS.png" alt="CSS" />
              </div>
              <a href="./projects pages/coffee.html"><button>&lt;&lt; לעמוד הפרויקט</button></a>
            </div>

            <div className="card">
              <img src="images/gridPrtSc.png" alt="Grid" />
              <h3>לגלות את העולם</h3>
              <p className="pCard">לורם איפסום או בקיצור ליפסום, הוא מלל מקובל וחסר משמעות המשמש “ממלא מקום” בעת
                עריכה,</p>
              <div className="iconsCardContainer">
                <img src="images/icons/img-HTML.png" alt="HTML" />
                <img src="images/icons/img-CSS.png" alt="CSS" />
              </div>
              <a href="./projects pages/discoverGrid.html"><button>&lt;&lt; לעמוד הפרויקט</button></a>
            </div>

            <div className="card">
              <img src="./projects pages/images/outsideTheBoxPrtSc.png" alt="" />
              <h3>לחשוב מחוץ לקופסא</h3>
              <p className="pCard">לורם איפסום או בקיצור ליפסום, הוא מלל מקובל וחסר משמעות המשמש “ממלא מקום” בעת
                עריכה,</p>
              <div className="iconsCardContainer">
                <img src="images/icons/img-HTML.png" alt="HTML" />
                <img src="images/icons/img-CSS.png" alt="CSS" />
                <img src="images/icons/img-Bootstrap.png" alt="Bootstrap" />
              </div>
              <a href="./projects pages/outsideTheBox.html"><button>&lt;&lt; לעמוד הפרויקט</button></a>
            </div>

            <div className="card">
              <img src="images/letUsPrtSc.png" alt="Let Us Lead U" />
              <h3>תן לנו להוביל</h3>
              <p className="pCard">לורם איפסום או בקיצור ליפסום, הוא מלל מקובל וחסר משמעות המשמש “ממלא מקום” בעת
                עריכה,</p>
              <div className="iconsCardContainer">
                <img src="images/icons/img-HTML.png" alt="HTML" />
                <img src="images/icons/img-CSS.png" alt="CSS" />
              </div>
              <a href="./projects pages/letUsLead.html"><button>&lt;&lt; לעמוד הפרויקט</button></a>
            </div>

            <div className="card">
              <img src="./images/hereAndNowPrtSc.png" alt="hereAndNowPrtSc" />
              <h3>כאן ועכשיו</h3>
              <p className="pCard">לורם איפסום או בקיצור ליפסום, הוא מלל מקובל וחסר משמעות המשמש “ממלא מקום” בעת
                עריכה,</p>
              <div className="iconsCardContainer">
                <img src="images/icons/img-HTML.png" alt="HTML" />
                <img src="images/icons/img-CSS.png" alt="CSS" />
                <img src="images/icons/img-SASS.png" alt="SASS" />
              </div>
              <a href="./projects pages/hereAndNow.html"><button>&lt;&lt; לעמוד הפרויקט</button></a>
            </div>
            <div class="card"><img src="./images/letUsBluePrtSc.png" alt="letUsBluePrtSc" />
              <h3>תן לנו להוביל</h3>
              <p class="pCard">לורם איפסום או בקיצור ליפסום, הוא מלל מקובל וחסר משמעות המשמש “ממלא מקום” בעת
                עריכה,</p>
              <div class="iconsCardContainer">
                <img src="images/icons/img-HTML.png" alt="HTML" />
                <img src="images/icons/img-CSS.png" alt="CSS" />
              </div>
              <a href="./projects pages/letUsBlue.html"><button>&lt;&lt; לעמוד הפרויקט</button></a>
            </div>

            {/* <!-- JS projects grid --> */}
{/* <div id="projectsContainer">
              <div class="card"><img src="./images/TicTacToePrtSc.png" alt="TicTacToePrtSc" />
                <h3>משחק איקס עיגול</h3>
                <p class="pCard">לורם איפסום או בקיצור ליפסום, הוא מלל מקובל וחסר משמעות המשמש “ממלא מקום” בעת
                  עריכה,</p>
                <div class="iconsCardContainer">
                  <img src="images/icons/img-HTML.png" alt="HTML" />
                  <img src="images/icons/img-CSS.png" alt="CSS" />
                  <img src="images/icons/img-JS.png" alt="JS" />
                </div>
                <a href="./projects/tic-tac-toe/index.html"><button>&lt;&lt; לעמוד הפרויקט</button></a>
              </div>

              <div class="card"><img src="./images/SimonGamePrtSc.png" alt="SimonGamePrtSc" />
                <h3>משחק סיימון</h3>
                <p class="pCard">לורם איפסום או בקיצור ליפסום, הוא מלל מקובל וחסר משמעות המשמש “ממלא מקום” בעת
                  עריכה,</p>
                <div class="iconsCardContainer">
                  <img src="images/icons/img-HTML.png" alt="HTML" />
                  <img src="images/icons/img-CSS.png" alt="CSS" />
                  <img src="images/icons/img-JS.png" alt="JS" />
                </div>
                <a href="./projects/Simon-game/index.html"><button>&lt;&lt; לעמוד הפרויקט</button></a>
              </div>

              <div class="card"><img src="./images/ShoppingListPrtSc.png" alt="ShoppingListPrtSc" />
                <h3>רשימת קניות</h3>
                <p class="pCard">לורם איפסום או בקיצור ליפסום, הוא מלל מקובל וחסר משמעות המשמש “ממלא מקום” בעת
                  עריכה,</p>
                <div class="iconsCardContainer">
                  <img src="images/icons/img-HTML.png" alt="HTML" />
                  <img src="images/icons/img-CSS.png" alt="CSS" />
                  <img src="images/icons/img-JS.png" alt="JS" />
                </div>
                <a href="./projects/shopping_list/index.html"><button>&lt;&lt; לעמוד הפרויקט</button></a>
              </div>

              <div class="card"><img src="./images/UsersManagerPrtSc.png" alt="UsersManagerPrtSc" />
                <h3>ניהול משתמשים</h3>
                <p class="pCard">לורם איפסום או בקיצור ליפסום, הוא מלל מקובל וחסר משמעות המשמש “ממלא מקום” בעת
                  עריכה,</p>
                <div class="iconsCardContainer">
                  <img src="images/icons/img-HTML.png" alt="HTML" />
                  <img src="images/icons/img-CSS.png" alt="CSS" />
                  <img src="images/icons/img-JS.png" alt="JS" />
                  <img src="images/icons/img-TypeScript.png" alt="TS" />
                </div>
                <a href="./projects/users_manager/index.html"><button>&lt;&lt; לעמוד הפרויקט</button></a>
              </div>
              <div class="card"><img src="./images/screenBPrtSc.png" alt="letUsBluePrtSc" />
                <h3>בונה מסכים</h3>
                <p class="pCard">לורם איפסום או בקיצור ליפסום, הוא מלל מקובל וחסר משמעות המשמש “ממלא מקום” בעת
                  עריכה,</p>
                <div class="iconsCardContainer">
                  <img src="images/icons/img-HTML.png" alt="HTML" />
                  <img src="images/icons/img-CSS.png" alt="CSS" />
                  <img src="images/icons/img-JS.png" alt="JS" />
                </div>
                <a href="./projects/screens builder/index.html"><button>&lt;&lt; לעמוד הפרויקט</button></a>
              </div>

              <div class="card"><img src="./images/worldClockPrtSc.png" alt="worldClockPrtSc" />
                <h3>שעון עולמי</h3>
                <p class="pCard">לורם איפסום או בקיצור ליפסום, הוא מלל מקובל וחסר משמעות המשמש “ממלא מקום” בעת
                  עריכה,</p>
                <div class="iconsCardContainer">
                  <img src="images/icons/img-HTML.png" alt="HTML" />
                  <img src="images/icons/img-CSS.png" alt="CSS" />
                  <img src="images/icons/img-JS.png" alt="JS" />
                </div>
                <a href="./projects/world clocks/index.html"><button>&lt;&lt; לעמוד הפרויקט</button></a>
              </div>
            </div>
          </div>
        </div> */}


{/* <!-- contact --> */ }
{/* <div id="conectsContainer">
          <div class="letterContainer">
            <img src="images/letter.png" alt="Letter" />
          </div>
          <form action="https://formsubmit.co/eli770440@gmail.com" method="post" id="form">
            <h3>צור קשר</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore at aliquid perferendis facere asperiores ut distinctio sed
            </p>
            <label>שם מלא</label>
            <br />
            <input type="text" name="name" id="name" />
            <br />
            <label>דוא"ל</label><br />
            <input type="email" name="email" id="email" />
            <br />
            <label>טלפון</label>
            <br />
            <input type="phone" name="phone" id="phone" />
            <br />
            <label>תוכן ההודעה</label>
            <br />
            <textarea name="message"></textarea>
            <br /><br />
            <input type="hidden" name="_next"
              value="https://eli2023777.github.io/thankUFile/"
            />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <button type="submit" id="submit">שליחה</button>
          </form>
        </div> */}


{/* <!-- Footer --> */ }
{/* <footer>
          <nav>

            {/* <!-- location --> */}
{/* <div class="iconContainer">
              <img src="images/icons/Icon material-location-on.png" alt="location" />
              <p>נעם אלימלך 7, ביתר עילית</p>
            </div> */}

{/* <!-- email --> */ }
{/* <div class="iconContainer">
              <a class="button" href="mailto:eli770440@gmail.com" target="_blank">
                <img src="images/icons/Icon simple-email.png" alt="simple-email" />
              </a>
              <p>eli770440@gmail.com</p>
            </div> */}

{/* <!-- whatsapp --> */ }
{/* <div class="iconContainer">
              <a href="https://wa.me/+972587701440" target="_blank">
                <img src="images/icons/Icon simple-whatsapp.png" alt="simple-whatsapp" />
              </a>
              <p>058-7701440</p>
            </div> */}

{/* <!-- phone --> */ }
{/* <div class="iconContainer">
              <a href="tel:+972587701440" target="_blank">
                <img src="images/icons/Icon simple-phone.png" alt="simple-phone" />
              </a>
              <p>058-7701440</p>
            </div> */}

{/* <!-- linkedin --> */ }
{/* <div class="iconContainer">
              <a href="https://www.linkedin.com/in/eli-holzman-0b888b1b1?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BS0E4sA56RDqQPnS%2Fdd6gjg%3D%3D"
                target="_blank">
                <img src="images/icons/Icon awesome-linkedin-in.png" alt="awesome-linkedin" />
              </a>
              <p>Eli Holzman</p>
            </div> */}
{/* 
          </nav>

        </footer>  */}

{/* <!-- Under footer --> */ }
{/* <div class="underFooter">
          <p class="leftP">Eli Holzman</p>
          <p class="rightP">כל הזכויות שמורות &copy;</p>
        </div>
      </div> */}