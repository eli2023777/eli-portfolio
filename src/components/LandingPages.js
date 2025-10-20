
import { useState, useEffect, useContext } from 'react';
import '../css/landingPages.css';
import { useTranslation } from 'react-i18next';
import { GeneralContext } from '../App';


const LandingPages = () => {
    const [selectedCard, setSelectedCard] = useState(null);
    const { t } = useTranslation();
    const { isDark } = useContext(GeneralContext);


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
            <div className="landingPagesContainer"
                style={{ background: isDark ? "#000" : "#F6F6F6" }}>

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
                            onDoubleClick={() =>
                                window.open(`https://eli2023777.github.io/${card.url}/`,
                                    '_blank', 'noopener,noreferrer'
                                )}>

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
                                    <a href={`${process.env.PUBLIC_URL}/downloads/landing/${card.zip}`} download>
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

















