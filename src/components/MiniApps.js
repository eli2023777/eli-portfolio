import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../css/miniApps.css';

import { useTranslation } from 'react-i18next';


const slidesData = [
    {
        imgSrc: `${process.env.PUBLIC_URL}/images/TicTacToePrtSc.png`,
        // title: 'Tic Tac Toe',
        key: 'ticTacToe',
        categories: ['Games'],
        toolsIcons: ['HTML', 'CSS', 'JS'],
    },
    {
        imgSrc: `${process.env.PUBLIC_URL}/images/SimonGamePrtSc.png`,
        // title: 'Simon Game',
        key: 'simonGame',

        categories: ['Games'],
        toolsIcons: ['HTML', 'CSS', 'JS'],
    },
    {
        imgSrc: `${process.env.PUBLIC_URL}/images/ShoppingListPrtSc.png`,
        // title: 'Shopping List',
        key: 'shoppingList',

        categories: ['Apps'],
        toolsIcons: ['HTML', 'CSS', 'JS'],
    },
    {
        imgSrc: `${process.env.PUBLIC_URL}/images/UsersManagerPrtSc.png`,
        // title: 'Users Manager',
        key: 'usersManager',

        categories: ['Apps'],
        toolsIcons: ['HTML', 'CSS', 'JS', 'TS'],
    },
    {
        imgSrc: `${process.env.PUBLIC_URL}/images/screenBPrtSc.png`,
        // title: 'Screens Builder',
        key: 'screensBuilder',

        categories: ['Apps'],
        toolsIcons: ['HTML', 'CSS', 'JS'],
    },
    {
        imgSrc: `${process.env.PUBLIC_URL}/images/worldClockPrtSc.png`,
        // title: 'World Clocks',
        key: 'worldClocks',

        categories: ['Apps'],
        toolsIcons: ['HTML', 'CSS', 'JS'],
    },
];

const formatTitleForRepoUrl = (title) => {
    const words = title.split(" ");
    return [
        words[0], // First word stay the same
        ...words.slice(1).map(word => word.toLowerCase()) // Other words are being small
    ].join("-");
};

console.log(formatTitleForRepoUrl('la la'));


const MiniApps = () => {

    const swiperWrappedRef = useRef(null);
    const { t } = useTranslation();


    function adjustMargin() {
        const screenWidth = window.innerWidth;
        if (swiperWrappedRef.current) {
            swiperWrappedRef.current.style.marginLeft =
                screenWidth <= 520
                    ? '0px'
                    : screenWidth <= 650
                        ? '-50px'
                        : screenWidth <= 800
                            ? '-100px'
                            : '-150px';
        }
    };

    useEffect(() => {
        adjustMargin();
        window.addEventListener('resize', adjustMargin);
        return () => window.removeEventListener('resize', adjustMargin);
    }, []);


    return (
        <main>
            <div className='container'>

                <Swiper
                    modules={[Pagination]}
                    grabCursor
                    initialSlide={2}
                    centeredSlides
                    slidesPerView='auto'
                    speed={800}
                    slideToClickedSlide
                    pagination={{ clickable: true }}
                    breakpoints={{
                        320: { spaceBetween: 40 },
                        650: { spaceBetween: 30 },
                        1000: { spaceBetween: 20 },
                    }}

                    // spaceBetween={50}
                    // slidesPerView={3}
                    // onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) =>
                        swiperWrappedRef.current = swiper.wrapperEl
                    }
                >

                    {slidesData.map((slide, index) => (
                        <SwiperSlide key={index}
                            onDoubleClick={() => window.open(
                                `https://eli2023777.github.io/${formatTitleForRepoUrl(t(`miniApps.${slide.key}.title`))}/`,
                                '_blank', 'noopener,noreferrer')}
                        >
                            <img src={slide.imgSrc} alt={t(`miniApps.${slide.key}.title`)} />

                            <div className="tools">
                                {slide.toolsIcons.map((tool, index) => (
                                    <span key={index} style={{ '--i': index + 1 }}>
                                        <img className='toolsIcons'
                                            src={`${process.env.PUBLIC_URL}/icons/img-${tool}.png`}
                                            alt={tool} />
                                    </span>
                                ))}
                            </div>

                            {/* </div> */}
                            <div className='title'>
                                {/* <h1>{slide.title}</h1> */}
                                <h1>{t(`miniApps.${slide.key}.title`)}</h1>

                            </div>
                            <div className="content">
                                <div className="text-box">
                                    {/* <p>{slide.description}</p> */}
                                    <p>{t(`miniApps.${slide.key}.description`)}</p>

                                </div>

                                <div className="footer">
                                    <div className="category">
                                        {slide.categories.map((category, index) => (
                                            <span key={index} style={{ '--i': index + 1 }}>
                                                {/* {category} */}
                                                <span>{t(`miniApps.${slide.key}.category`)}</span>
                                            </span>
                                        ))}
                                    </div>

                                    <div className="buttons">
                                        <button className='linkBtn'>
                                            <span className='label'
                                                onClick={() => window.open(
                                                    `https://github.com/eli2023777/${formatTitleForRepoUrl(t(`miniApps.${slide.key}.title`))}.git`,
                                                    '_blank', 'noopener,noreferrer')}
                                            >
                                                {/* View code */}
                                                {t('miniApps.buttons.viewCode')}
                                            </span>
                                        </button>

                                        <button className='linkBtn'>
                                            <span className='label'
                                                onClick={() => window.open(
                                                    `https://eli2023777.github.io/${formatTitleForRepoUrl(t(`miniApps.${slide.key}.title`))}/`,
                                                    '_blank', 'noopener,noreferrer')}
                                            >
                                                {/* Live site */}
                                                {t('miniApps.buttons.liveSite')}

                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}




                </Swiper>
            </div>


        </main >
    )
}

export default MiniApps





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
// <div id="projectsContainer">
//     <div class="card"><img src="./images/TicTacToePrtSc.png" alt="TicTacToePrtSc" />
//         <h3>משחק איקס עיגול</h3>
//         <p class="pCard">לורם איפסום או בקיצור ליפסום, הוא מלל מקובל וחסר משמעות המשמש “ממלא מקום” בעת
//             עריכה,</p>
//         <div class="iconsCardContainer">
//             <img src="images/icons/img-HTML.png" alt="HTML" />
//             <img src="images/icons/img-CSS.png" alt="CSS" />
//             <img src="images/icons/img-JS.png" alt="JS" />
//         </div>
//         <a href="./projects/tic-tac-toe/index.html"><button>&lt;&lt; לעמוד הפרויקט</button></a>
//     </div>

//     <div class="card"><img src="./images/SimonGamePrtSc.png" alt="SimonGamePrtSc" />
//         <h3>משחק סיימון</h3>
//         <p class="pCard">לורם איפסום או בקיצור ליפסום, הוא מלל מקובל וחסר משמעות המשמש “ממלא מקום” בעת
//             עריכה,</p>
//         <div class="iconsCardContainer">
//             <img src="images/icons/img-HTML.png" alt="HTML" />
//             <img src="images/icons/img-CSS.png" alt="CSS" />
//             <img src="images/icons/img-JS.png" alt="JS" />
//         </div>
//         <a href="./projects/Simon-game/index.html"><button>&lt;&lt; לעמוד הפרויקט</button></a>
//     </div>

//     <div class="card"><img src="./images/ShoppingListPrtSc.png" alt="ShoppingListPrtSc" />
//         <h3>רשימת קניות</h3>
//         <p class="pCard">לורם איפסום או בקיצור ליפסום, הוא מלל מקובל וחסר משמעות המשמש “ממלא מקום” בעת
//             עריכה,</p>
//         <div class="iconsCardContainer">
//             <img src="images/icons/img-HTML.png" alt="HTML" />
//             <img src="images/icons/img-CSS.png" alt="CSS" />
//             <img src="images/icons/img-JS.png" alt="JS" />
//         </div>
//         <a href="./projects/shopping_list/index.html"><button>&lt;&lt; לעמוד הפרויקט</button></a>
//     </div>

//     <div class="card"><img src="./images/UsersManagerPrtSc.png" alt="UsersManagerPrtSc" />
//         <h3>ניהול משתמשים</h3>
//         <p class="pCard">לורם איפסום או בקיצור ליפסום, הוא מלל מקובל וחסר משמעות המשמש “ממלא מקום” בעת
//             עריכה,</p>
//         <div class="iconsCardContainer">
//             <img src="images/icons/img-HTML.png" alt="HTML" />
//             <img src="images/icons/img-CSS.png" alt="CSS" />
//             <img src="images/icons/img-JS.png" alt="JS" />
//             <img src="images/icons/img-TypeScript.png" alt="TS" />
//         </div>
//         <a href="./projects/users_manager/index.html"><button>&lt;&lt; לעמוד הפרויקט</button></a>
//     </div>
//     <div class="card"><img src="./images/screenBPrtSc.png" alt="letUsBluePrtSc" />
//         <h3>בונה מסכים</h3>
//         <p class="pCard">לורם איפסום או בקיצור ליפסום, הוא מלל מקובל וחסר משמעות המשמש “ממלא מקום” בעת
//             עריכה,</p>
//         <div class="iconsCardContainer">
//             <img src="images/icons/img-HTML.png" alt="HTML" />
//             <img src="images/icons/img-CSS.png" alt="CSS" />
//             <img src="images/icons/img-JS.png" alt="JS" />
//         </div>
//         <a href="./projects/screens builder/index.html"><button>&lt;&lt; לעמוד הפרויקט</button></a>
//     </div>

//     <div class="card"><img src="./images/worldClockPrtSc.png" alt="worldClockPrtSc" />
//         <h3>שעון עולמי</h3>
//         <p class="pCard">לורם איפסום או בקיצור ליפסום, הוא מלל מקובל וחסר משמעות המשמש “ממלא מקום” בעת
//             עריכה,</p>
//         <div class="iconsCardContainer">
//             <img src="images/icons/img-HTML.png" alt="HTML" />
//             <img src="images/icons/img-CSS.png" alt="CSS" />
//             <img src="images/icons/img-JS.png" alt="JS" />
//         </div>
//         <a href="./projects/world clocks/index.html"><button>&lt;&lt; לעמוד הפרויקט</button></a>
//     </div>

// </div>


//     </div >
// </div > */}

