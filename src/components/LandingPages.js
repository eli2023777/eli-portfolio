
import React, { useState, useEffect } from 'react';
import '../css/landingPages.css';
import { useTranslation } from 'react-i18next';

const LandingPages = () => {
    const [selectedCard, setSelectedCard] = useState(null);
    const { t } = useTranslation();

    useEffect(() => {
        const handleClickOutside = (event) => {
            const clickedInsideCard = event.target.closest('.card');
            if (!clickedInsideCard) {
                setSelectedCard(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleCardClick = (cardId) => {
        setSelectedCard(cardId);
    };

    return (
        <div>
            <div id="projectsContainer">
                <h1>{t('landingPages.title')}</h1>

                <div className="gridContainer">
                    {[
                        {
                            id: 1,
                            title: t('landingPages.cards.goodMorning'),
                            url: 'landing-page-good-morning',
                            img: 'coffePrtSc.png',
                            icons: ['HTML', 'CSS'],
                            zip: 'goodMorning.zip',
                        },
                        {
                            id: 2,
                            title: t('landingPages.cards.discover'),
                            url: 'landing-page-discover',
                            img: 'gridPrtSc.png',
                            icons: ['HTML', 'CSS'],
                            zip: 'discoverTheWorld.zip',
                        },
                        {
                            id: 3,
                            title: t('landingPages.cards.outside'),
                            url: 'landing-page-outside-the-box',
                            img: 'outsideTheBoxPrtSc.png',
                            icons: ['HTML', 'CSS', 'Bootstrap'],
                            zip: 'outsideTheBox.zip',
                        },
                        {
                            id: 4,
                            title: t('landingPages.cards.letUsLeadPink'),
                            url: 'landing-page-let-us-pink',
                            img: 'letUsPrtSc.png',
                            icons: ['HTML', 'CSS'],
                            zip: 'letUsBlue.zip',
                        },
                        {
                            id: 5,
                            title: t('landingPages.cards.hereAndNow'),
                            url: 'landing-page-here-and-now',
                            img: 'hereAndNowPrtSc.png',
                            icons: ['HTML', 'CSS', 'Sass'],
                            zip: 'hereAndNow.zip',
                        },
                        {
                            id: 6,
                            title: t('landingPages.cards.letUsLeadBlue'),
                            url: 'landing-page-let-us-blue',
                            img: 'letUsBluePrtSc.png',
                            icons: ['HTML', 'CSS'],
                            zip: 'letUsBlue.zip',
                        }
                    ].map((card) => (
                        <div key={card.id}
                            className={`card ${selectedCard === card.id ? 'selected' : ''}`}
                            onClick={() => handleCardClick(card.id)}
                            onDoubleClick={() => window.open(`https://eli2023777.github.io/${card.url}/`, '_blank', 'noopener,noreferrer')}>

                            <img src={`${process.env.PUBLIC_URL}/images/${card.img}`} alt={card.title} />

                            <div className="textArea">
                                <h3>{card.title}</h3>

                                <div className="iconsCardContainer">
                                    {card.icons.map(icon => (
                                        <img
                                            key={icon}
                                            src={`${process.env.PUBLIC_URL}/icons/img-${icon}.png`}
                                            alt={icon}
                                        />
                                    ))}
                                </div>

                                <a href={`https://eli2023777.github.io/${card.url}/`} target="_blank" rel="noopener noreferrer">
                                    <button className='liveBtn'>
                                        {t('landingPages.buttons.liveSite')}
                                    </button>
                                </a>

                                <div className="buttonsCard">
                                    <a href={`https://github.com/eli2023777/${card.url}`} target="_blank" rel="noopener noreferrer">
                                        <button>{t('landingPages.buttons.viewCode')}</button>
                                    </a>
                                    <a href={`/downloads/${card.zip}`} download>
                                        <button>{t('landingPages.buttons.download')}</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LandingPages;


















// import React, { useState, useEffect, useRef } from 'react';
// import '../css/landingPages.css';

// import { useTranslation } from 'react-i18next';


// const LandingPages = () => {

//     const [selectedCard, setSelectedCard] = useState(null);
//     const { t } = useTranslation();

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             // נבדוק אם נלחץ על כרטיס
//             const clickedInsideCard = event.target.closest('.card');
//             if (!clickedInsideCard) {
//                 setSelectedCard(null);
//             }
//         };

//         document.addEventListener('mousedown', handleClickOutside);
//         return () => document.removeEventListener('mousedown', handleClickOutside);
//     }, []);

//     const handleCardClick = (cardId) => {
//         setSelectedCard(cardId);
//     };


//     return (
//         <div>

//             <div id="projectsContainer">

//                 {/* <h1>Landing pages</h1> */}
//                 <h1>{t('landingPages.title')}</h1>


//                 <div className="gridContainer">


//                     <div className={`card ${selectedCard === 1 ? 'selected' : ''}`}
//                         onClick={() => handleCardClick(1)}
//                         onDoubleClick={() => window.open(
//                             `https://eli2023777.github.io/landing-page-good-morning/`,
//                             '_blank', 'noopener,noreferrer')}>

//                         <img src={`${process.env.PUBLIC_URL}/images/coffePrtSc.png`} alt="Coffee" />

//                         <div className="textArea">
//                             <h3>Good Morning</h3>

//                             <div className="iconsCardContainer">
//                                 <img src={`${process.env.PUBLIC_URL}/icons/img-HTML.png`} alt="HTML" />
//                                 <img src={`${process.env.PUBLIC_URL}/icons/img-CSS.png`} alt="CSS" />
//                             </div>
//                             <a href="https://eli2023777.github.io/landing-page-good-morning/" target="_blank"
//                                 rel="noopener noreferrer">
//                                 <button className='liveBtn'>Live site</button></a>

//                             <div className="buttonsCard">
//                                 <a href="https://github.com/eli2023777/landing-page-good-morning" target="_blank"
//                                     rel="noopener noreferrer">
//                                     <button>View code</button>
//                                 </a>
//                                 <a href="/downloads/goodMorning.zip" download>
//                                     <button>Download</button>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>


//                     <div className={`card ${selectedCard === 2 ? 'selected' : ''}`}
//                         onClick={() => handleCardClick(2)}
//                         onDoubleClick={() => window.open(
//                             `https://eli2023777.github.io/landing-page-discover/`,
//                             '_blank', 'noopener,noreferrer')}>

//                         <img src={`${process.env.PUBLIC_URL}/images/gridPrtSc.png`} alt="Grid" />

//                         <div className="textArea">
//                             <h3>Discover The World</h3>

//                             <div className="iconsCardContainer">
//                                 <img src={`${process.env.PUBLIC_URL}/icons/img-HTML.png`} alt="HTML" />
//                                 <img src={`${process.env.PUBLIC_URL}/icons/img-CSS.png`} alt="CSS" />
//                             </div>
//                             <a href="https://eli2023777.github.io/landing-page-discover/"
//                                 target="_blank"
//                                 rel="noopener noreferrer">
//                                 <button className='liveBtn'>Live site</button>
//                             </a>

//                             <div className="buttonsCard">
//                                 <a href="https://github.com/eli2023777/landing-page-discover" target="_blank" rel="noopener noreferrer">
//                                     <button>View code</button>
//                                 </a>
//                                 <a href="/downloads/discoverTheWorld.zip" download>
//                                     <button>Download</button>
//                                 </a>
//                             </div>

//                         </div>
//                     </div>

//                     <div className={`card ${selectedCard === 3 ? 'selected' : ''}`}
//                         onClick={() => handleCardClick(3)}
//                         onDoubleClick={() => window.open(
//                             `https://eli2023777.github.io/landing-page-outside-the-box/`,
//                             '_blank', 'noopener,noreferrer')}>

//                         <img src={`${process.env.PUBLIC_URL}/images/outsideTheBoxPrtSc.png`}
//                             alt="Outside The Box" />

//                         <div className="textArea">
//                             <h3>Outside The Box</h3>
//                             <div className="iconsCardContainer">
//                                 <img src={`${process.env.PUBLIC_URL}/icons/img-HTML.png`} alt="HTML" />
//                                 <img src={`${process.env.PUBLIC_URL}/icons/img-CSS.png`} alt="CSS" />
//                                 <img src={`${process.env.PUBLIC_URL}/icons/img-Bootstrap.png`} alt="Bootstrap" />
//                             </div>
//                             <a href="https://eli2023777.github.io/landing-page-outside-the-box/" target="_blank"
//                                 rel="noopener noreferrer">
//                                 <button className='liveBtn'>Live site</button></a>

//                             <div className="buttonsCard">
//                                 <a href="https://github.com/eli2023777/landing-page-outside-the-box/" target="_blank"
//                                     rel="noopener noreferrer">
//                                     <button>View code</button>
//                                 </a>
//                                 <a href="/downloads/outsideTheBox.zip" download>
//                                     <button>Download</button>
//                                 </a>
//                             </div>


//                         </div>
//                     </div>


//                     <div className={`card ${selectedCard === 4 ? 'selected' : ''}`}
//                         onClick={() => handleCardClick(4)}
//                         onDoubleClick={() => window.open(
//                             `https://eli2023777.github.io/landing-page-let-us-pink/`,
//                             '_blank', 'noopener,noreferrer')}>

//                         <img src={`${process.env.PUBLIC_URL}/images/letUsPrtSc.png`} alt="Let Us Lead U" />

//                         <div className="textArea">
//                             <h3>Let Us Lead</h3>

//                             <div className="iconsCardContainer">
//                                 <img src={`${process.env.PUBLIC_URL}/icons/img-HTML.png`} alt="HTML" />
//                                 <img src={`${process.env.PUBLIC_URL}/icons/img-CSS.png`} alt="CSS" />
//                             </div>
//                             <a href="https://eli2023777.github.io/landing-page-let-us-pink/" target="_blank"
//                                 rel="noopener noreferrer">
//                                 <button className='liveBtn'>Live site</button>
//                             </a>
//                             <div className="buttonsCard">
//                                 <a href="https://github.com/eli2023777/landing-page-let-us-pink" target="_blank"
//                                     rel="noopener noreferrer">
//                                     <button>View code</button>
//                                 </a>
//                                 <a href="/downloads/letUsBlue.zip" download>
//                                     <button>Download</button>
//                                 </a>
//                             </div>

//                         </div>
//                     </div>


//                     <div className={`card ${selectedCard === 5 ? 'selected' : ''}`}
//                         onClick={() => handleCardClick(5)}
//                         onDoubleClick={() => window.open(
//                             `https://eli2023777.github.io/landing-page-here-and-now/`,
//                             '_blank', 'noopener,noreferrer')}>

//                         <img src={`${process.env.PUBLIC_URL}/images/hereAndNowPrtSc.png`} alt="hereAndNowPrtSc" />

//                         <div className="textArea">
//                             <h3>Here And Now</h3>

//                             <div className="iconsCardContainer">
//                                 <img src={`${process.env.PUBLIC_URL}/icons/img-HTML.png`} alt="HTML" />
//                                 <img src={`${process.env.PUBLIC_URL}/icons/img-CSS.png`} alt="CSS" />
//                                 <img src={`${process.env.PUBLIC_URL}/icons/img-Sass.png`} alt="SASS" />
//                             </div>
//                             <a href="https://eli2023777.github.io/landing-page-here-and-now/" target="_blank"
//                                 rel="noopener noreferrer">
//                                 <button className='liveBtn'>Live site</button>
//                             </a>

//                             <div className="buttonsCard">
//                                 <a href="https://github.com/eli2023777/landing-page-here-and-now" target="_blank"
//                                     rel="noopener noreferrer">
//                                     <button>View code</button>
//                                 </a>
//                                 <a href="/downloads/hereAndNow.zip" download>
//                                     <button>Download</button>
//                                 </a>
//                             </div>


//                         </div>
//                     </div>


//                     <div className={`card ${selectedCard === 6 ? 'selected' : ''}`}
//                         onClick={() => handleCardClick(6)}
//                         onDoubleClick={() => window.open(
//                             `https://eli2023777.github.io/landing-page-let-us-blue/`,
//                             '_blank', 'noopener,noreferrer')}>

//                         <img src={`${process.env.PUBLIC_URL}/images/letUsBluePrtSc.png`} alt="letUsBluePrtSc" />

//                         <div className="textArea">
//                             <h3>Let Us Lead</h3>

//                             <div className="iconsCardContainer">
//                                 <img src={`${process.env.PUBLIC_URL}/icons/img-HTML.png`} alt="HTML" />
//                                 <img src={`${process.env.PUBLIC_URL}/icons/img-CSS.png`} alt="CSS" />
//                             </div>

//                             <a href="https://eli2023777.github.io/landing-page-let-us-blue/" target="_blank"
//                                 rel="noopener noreferrer">
//                                 <button className='liveBtn'>Live site</button>
//                             </a>

//                             <div className="buttonsCard">
//                                 <a href="https://github.com/eli2023777/landing-page-let-us-blue" target="_blank"
//                                     rel="noopener noreferrer">
//                                     <button>View code</button>
//                                 </a>
//                                 <a href="/downloads/letUsBlue.zip" download>
//                                     <button>Download</button>
//                                 </a>
//                             </div>

//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </div >
//     )
// }

// export default LandingPages
