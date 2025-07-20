import React from 'react'
import '../css/featuredProjects.css'
import { Button } from 'react-bootstrap';

import { useTranslation } from 'react-i18next';


const FeaturedProjects = () => {
    const { t } = useTranslation();

    return (
        <>
        <div className='featuredContainer'>

            <div className='project'>
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
                    {/* <button className='downloadBtn'>
                        <a target="_blank" rel="noreferrer" href=""> */}
                    {/* DOWNLOAD */}
                    {/* {t("featured.download")}

                        </a>
                    </button> */}
                </div>
            </div>


            <div className='project'>
                <img className='featuredProjectImg'
                    onDoubleClick={() => window.open(
                        `https://eli2023777.github.io/my-cards/`,
                        '_blank', 'noopener,noreferrer')}
                    src={`${process.env.PUBLIC_URL}/images/BcardsPrtSc.png`} alt="Bussiness Cards site"
                />
                <div className="text">
                    {/* <h3>Bussiness Cards site</h3>
                    <p>
                        A responsive business card website using React, part of my studies at
                        HackerU. This project includes features for creating, editing, and organizing business
                        cards, focusing on a smooth and user-friendly interface.
                    </p> */}

                    <h3>{t("featured.cardsSite.title")}</h3>
                    <p>{t("featured.cardsSite.desc")}</p>

                    <button className='liveSiteBtn'>
                        <a target="_blank" rel="noreferrer"
                            href="https://eli2023777.github.io/my-cards/">
                            {/* LIVE SITE */}
                            {t("featured.liveSite")}

                        </a>
                    </button>

                    <button className='viewCodeBtn'>
                        <a target="_blank" rel="noreferrer"
                            href="https://github.com/eli2023777/my-cards">
                            {/* VIEW CODE */}
                            {t("featured.viewCode")}

                        </a>
                    </button>

                    {/* <button className='downloadBtn'>
                        <a target="_blank" rel="noreferrer" href=""> */}
                    {/* DOWNLOAD */}
                    {/* {t("featured.download")}

                        </a>
                    </button> */}
                </div>
            </div>

            <div className='project'>
                <img className='featuredProjectImg'
                    onDoubleClick={() => window.open(
                        `https://github.com/eli2023777/NodeJS-Project`,
                        '_blank', 'noopener,noreferrer')}
                    src={`${process.env.PUBLIC_URL}/images/nodeJSPrtSc.png`} alt="CRUD API"
                />
                <div className="text">
                    {/* <h3>CRUD API</h3>
                    <p>
                        A server-side application with Node.js and MongoDB <br /> for user and card
                        management, allowing secure CRUD operations and user authentication.
                        <br /> This project emphasizes efficient backend structure <br /> and data handling.
                    </p> */}

                    <h3>{t("featured.crudApi.title")}</h3>
                    <p>{t("featured.crudApi.desc")}</p>

                    <button className='viewCodeBtn'>
                        <a target="_blank" rel="noreferrer" href="https://github.com/eli2023777/NodeJS-Project">
                            {/* VIEW CODE */}
                            {t("featured.viewCode")}

                        </a>
                    </button>

                    {/* <button className='downloadBtn'>
                        <a target="_blank" rel="noreferrer" href=""> */}
                    {/* DOWNLOAD */}
                    {/* {t("featured.download")}

                        </a>
                    </button> */}
                </div>
            </div>
        </div>
        </>
    )
}

export default FeaturedProjects;
