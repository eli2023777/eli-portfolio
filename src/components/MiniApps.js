import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../css/miniApps.css';

import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

const slidesData = [
    {
        imgSrc: `${process.env.PUBLIC_URL}/images/TicTacToePrtSc.png`,
        title: 'Tic Tac Toe',
        key: 'ticTacToe',
        categories: ['Games'],
        toolsIcons: ['HTML', 'CSS', 'JS'],
    },
    {
        imgSrc: `${process.env.PUBLIC_URL}/images/SimonGamePrtSc.png`,
        title: 'Simon Game',
        key: 'simonGame',

        categories: ['Games'],
        toolsIcons: ['HTML', 'CSS', 'JS'],
    },
    {
        imgSrc: `${process.env.PUBLIC_URL}/images/ShoppingListPrtSc.png`,
        title: 'Shopping List',
        key: 'shoppingList',

        categories: ['Apps'],
        toolsIcons: ['HTML', 'CSS', 'JS'],
    },


    // {
    //     imgSrc: `${process.env.PUBLIC_URL}/images/UsersManagerPrtSc.png`,
    //     title: 'Users Manager',
    //     key: 'usersManager',

    //     categories: ['Apps'],
    //     toolsIcons: ['HTML', 'CSS', 'JS', 'TS'],
    // },
    // {
    //     imgSrc: `${process.env.PUBLIC_URL}/images/screenBPrtSc.png`,
    //     title: 'Screens Builder',
    //     key: 'screensBuilder',

    //     categories: ['Apps'],
    //     toolsIcons: ['HTML', 'CSS', 'JS'],
    // },


    {
        imgSrc: `${process.env.PUBLIC_URL}/images/worldClockPrtSc.png`,
        title: 'World Clocks',
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


const MiniApps = () => {

    const swiperWrappedRef = useRef(null);
    const { t } = useTranslation();


    const [dir, setDir] = useState(i18n.language === 'he' ? 'rtl' : 'ltr');

    useEffect(() => {
        const handleLanguageChanged = (lng) => {
            const newDir = lng === 'he' ? 'rtl' : 'ltr';
            setDir(newDir);

            if (swiperWrappedRef.current && swiperWrappedRef.current.swiper) {
                swiperWrappedRef.current.swiper.el.dir = newDir;
            }
            if (
                swiperWrappedRef.current &&
                swiperWrappedRef.current.swiper &&
                typeof swiperWrappedRef.current.swiper.update === 'function'
            ) {
                swiperWrappedRef.current.swiper.update();
            }
        };
        i18n.on('languageChanged', handleLanguageChanged);
        return () => i18n.off('languageChanged', handleLanguageChanged);
    }, []);



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
                    key={dir}
                    ref={swiperWrappedRef}
                    modules={[Pagination]}
                    grabCursor
                    initialSlide={2}
                    centeredSlides
                    slidesPerView='auto'
                    speed={800}
                    dir={dir}
                    rtl={dir === 'rtl'}
                    slideToClickedSlide
                    pagination={{ clickable: true }}
                    breakpoints={{
                        320: { spaceBetween: 40 },
                        650: { spaceBetween: 30 },
                        1000: { spaceBetween: 20 },
                    }}
                    onSwiper={(swiper) =>
                        swiperWrappedRef.current = swiper.wrapperEl
                    }
                >

                    {slidesData.map((slide, index) => (
                        <SwiperSlide key={index}
                            onDoubleClick={() => window.open(
                                `https://eli2023777.github.io/${formatTitleForRepoUrl
                                    (
                                        slide.title
                                    )}/`,
                                '_blank', 'noopener,noreferrer')}
                        >
                            <img src={slide.imgSrc} alt={t(`miniApps.${slide.key}.title`)} />



                            {/* Category */}
                            <div className="category">
                                {slide.categories.map((category, index) => (
                                    <span key={index} style={{ '--i': index + 1 }}>
                                        {t(`miniApps.${slide.key}.category`)}
                                    </span>
                                ))}
                            </div>

                            {/* Tools */}
                            <div className="tools">
                                {slide.toolsIcons.map((tool, index) => (
                                    <span key={index} style={{ '--i': index + 1 }}>
                                        <img className='toolsIcons'
                                            src={`${process.env.PUBLIC_URL}/icons/img-${tool}.png`}
                                            alt={tool} />
                                    </span>
                                ))}
                            </div>


                            {/* Content */}
                            <div className="content">
                                <div className="text-box">

                                    <h1>{t(`miniApps.${slide.key}.title`)}</h1>

                                    <p>{t(`miniApps.${slide.key}.description`)}</p>

                                </div>

                                <div className="footer">

                                    {/* Live Site Button */}
                                    <button className='linkBtn'>
                                        <span className='label'
                                            onClick={() => window.open(
                                                `https://eli2023777.github.io/${formatTitleForRepoUrl(
                                                    slide.title
                                                )
                                                }/`,
                                                '_blank', 'noopener,noreferrer')}
                                        >
                                            {/* Live site */}
                                            {t('miniApps.buttons.liveSite')}

                                        </span>
                                    </button>



                                    {/* View Code Button */}
                                    <button className='linkBtn'>
                                        <span className='label'
                                            onClick={() => window.open(
                                                `https://github.com/eli2023777/${formatTitleForRepoUrl
                                                    (
                                                        slide.title
                                                    )}.git`,
                                                '_blank', 'noopener,noreferrer')}
                                        >
                                            {/* View code */}
                                            {t('miniApps.buttons.viewCode')}
                                        </span>
                                    </button>



                                    {/* Download Button */}
                                    <button className='linkBtn'>
                                        <span className='label'>

                                            <a style={{}}
                                                href={`${process.env.PUBLIC_URL}/downloads/miniApps/${slide.key}.zip`} download>
                                                {/* Live site */}
                                                {t('miniApps.buttons.download')}
                                            </a>

                                        </span>
                                    </button>


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



