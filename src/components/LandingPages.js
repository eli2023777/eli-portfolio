import React from 'react';
import '../css/landingPages.css'

const LandingPages = () => {
    return (
        <div>

            <div id="projectsContainer">

                <h1>Landing pages</h1>

                <div className="gridContainer">


                    <div className="card">
                        <img src="images/coffePrtSc.png" alt="Coffee" />

                        <div className="textArea">
                            <h3>בוקר טוב</h3>
                            <p className="pCard">לורם איפסום או בקיצור ליפסום, הוא מלל מקובל וחסר משמעות המשמש “ממלא מקום” בעת עריכה,</p>
                            <div className="iconsCardContainer">
                                <img src="images/icons/img-HTML.png" alt="HTML" />
                                <img src="images/icons/img-CSS.png" alt="CSS" />
                            </div>
                            <a href="./projects pages/coffee.html"><button>&lt;&lt; לעמוד הפרויקט</button></a>
                        </div>
                    </div>


                    <div className="card">
                        <img src="images/gridPrtSc.png" alt="Grid" />

                        <div className="textArea">
                            <h3>לגלות את העולם</h3>
                            <p className="pCard">לורם איפסום או בקיצור ליפסום, הוא מלל מקובל וחסר משמעות המשמש “ממלא מקום” בעת
                                עריכה,</p>
                            <div className="iconsCardContainer">
                                <img src="images/icons/img-HTML.png" alt="HTML" />
                                <img src="images/icons/img-CSS.png" alt="CSS" />
                            </div>
                            <a href="./projects pages/discoverGrid.html"><button>&lt;&lt; לעמוד הפרויקט</button></a>
                        </div>
                    </div>

                    <div className="card">
                        <img src="images/outsideTheBoxPrtSc.png"
                            alt="Outside The Box" />

                        <div className="textArea">
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
                    </div>


                    <div className="card">
                        <img src="images/letUsPrtSc.png" alt="Let Us Lead U" />

                        <div className="textArea">
                            <h3>תן לנו להוביל</h3>
                            <p className="pCard">לורם איפסום או בקיצור ליפסום, הוא מלל מקובל וחסר משמעות המשמש “ממלא מקום” בעת
                                עריכה,</p>
                            <div className="iconsCardContainer">
                                <img src="images/icons/img-HTML.png" alt="HTML" />
                                <img src="images/icons/img-CSS.png" alt="CSS" />
                            </div>
                            <a href="./projects pages/letUsLead.html"><button>&lt;&lt; לעמוד הפרויקט</button></a>
                        </div>
                    </div>


                    <div className="card">
                        <img src="/images/hereAndNowPrtSc.png" alt="hereAndNowPrtSc" />

                        <div className="textArea">
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
                    </div>


                    <div class="card">
                        <img src="./images/letUsBluePrtSc.png" alt="letUsBluePrtSc" />

                        <div className="textArea">
                            <h3>תן לנו להוביל</h3>
                            <p class="pCard">לורם איפסום או בקיצור ליפסום, הוא מלל מקובל וחסר משמעות המשמש “ממלא מקום” בעת
                                עריכה,</p>
                            <div class="iconsCardContainer">
                                <img src="images/icons/img-HTML.png" alt="HTML" />
                                <img src="images/icons/img-CSS.png" alt="CSS" />
                            </div>
                            <a href="./projects pages/letUsBlue.html"><button>&lt;&lt; לעמוד הפרויקט</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default LandingPages
