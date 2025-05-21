import React from 'react'
import '../css/featuredProjects.css'
import { Button } from 'react-bootstrap';

const FeaturedProjects = () => {
    return (
        <div>

            <div className='project'>
                <img className='featuredProjectImg'
                    onDoubleClick={() => window.open(
                        `https://eli2023777.github.io/events-site/`,
                        '_blank', 'noopener,noreferrer')}
                    src="/images/EventsSitePrtSc.png" alt="Events Site"
                />
                <div className="text">
                    <h3>Events site</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Eum labore <br /> sapiente modi amet saepe illo dignissimos, consectetur suscipit delectus <br />vitae! Distinctio, modi. Quae quibusdam ullam vel sint quas dicta officiis!
                    </p>
                    <button className='liveSiteBtn'>
                        <a target="_blank" rel="noreferrer" href="https://eli2023777.github.io/events-site/">
                            LIVE SITE
                        </a>
                    </button>
                    <button className='viewCodeBtn'>
                        <a target="_blank" rel="noreferrer" href="https://github.com/eli2023777/events-site">
                            VIEW CODE
                        </a>
                    </button>
                </div>
            </div>


            <div className='project'>
                <img className='featuredProjectImg'
                    onDoubleClick={() => window.open(
                        `https://eli2023777.github.io/my-cards/`,
                        '_blank', 'noopener,noreferrer')}
                    src="/images/BcardsPrtSc.png" alt="Bussiness Cards site"
                />
                <div className="text">
                    <h3>Bussiness Cards site</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Eum labore <br /> sapiente modi amet saepe illo dignissimos, consectetur suscipit delectus <br />vitae! Distinctio, modi. Quae quibusdam ullam vel sint quas dicta officiis!
                    </p>
                    <button className='liveSiteBtn'>
                        <a target="_blank" rel="noreferrer"
                            href="https://eli2023777.github.io/my-cards/">LIVE SITE</a>
                    </button>

                    <button className='viewCodeBtn'>
                        <a target="_blank" rel="noreferrer"
                            href="https://github.com/eli2023777/my-cards">VIEW CODE</a>
                    </button>
                </div>
            </div>

            <div className='project'>
                <img className='featuredProjectImg'
                    onDoubleClick={() => window.open(
                        `https://github.com/eli2023777/NodeJS-Project`,
                        '_blank', 'noopener,noreferrer')}
                    src="/images/nodeJSPrtSc.png" alt="CRUD API"
                />
                <div className="text">
                    <h3>CRUD API</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Eum labore <br /> sapiente modi amet saepe illo dignissimos, consectetur suscipit delectus <br />vitae! Distinctio, modi. Quae quibusdam ullam vel sint quas dicta officiis!
                    </p>
                    <button className='viewCodeBtn'>
                        <a target="_blank" rel="noreferrer" href="https://github.com/eli2023777/NodeJS-Project">
                            VIEW CODE
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProjects;
