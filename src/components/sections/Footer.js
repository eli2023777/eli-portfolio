
const Footer = ({ t }) => {
    return (
        <div>
            < footer >
                <nav>

                    {/* <!-- linkedin --> */}
                    <div className="iconContainer">
                        <button className='FooterIconBtn'><a href="https://www.linkedin.com/in/eli-holzman"
                            target="_blank" rel="noopener noreferrer"
                        >
                            <img
                                src={`${process.env.PUBLIC_URL}/icons/footer/awesome-linkedin-in.png`} alt="linkedin" />
                        </a></button>
                        <p className='footerIconTtl mb-0'>eli-holzman</p>
                    </div>

                    {/* <!-- github --> */}
                    <div class="iconContainer">
                        <button className='FooterIconBtn'><a href="https://github.com/eli2023777"
                            target="_blank" rel="noopener noreferrer">
                            <img
                                src={`${process.env.PUBLIC_URL}/icons/footer/github.png`} alt="location" />
                        </a></button>
                        <p className='footerIconTtl mb-0'>eli2023777</p>
                    </div>

                    {/* <!-- Location --> */}
                    <div class="iconContainer">
                        <button className='FooterIconBtn'>
                            <a href="https://maps.app.goo.gl/YFUxwuChCffu68LQ6"
                                target="_blank"
                                rel="noopener noreferrer">
                                <img src={`${process.env.PUBLIC_URL}/icons/footer/location.png`} alt="location" />
                            </a>
                        </button>
                        <p className='footerIconTtl mb-0'>
                            {t("home.footer.location")}
                        </p>
                    </div>

                    {/* <!-- email --> */}
                    <div class="iconContainer">
                        <button className='FooterIconBtn'><a class="button" href="mailto:eli770440@gmail.com"
                            target="_blank" rel="noopener noreferrer"
                        >
                            <img src={`${process.env.PUBLIC_URL}/icons/footer/simple-email.png`} alt="simple-email" />
                        </a></button>
                        <p className='footerIconTtl mb-0'>eli770440@gmail.com</p>
                    </div>

                    {/* <!-- whatsapp --> */}
                    <div class="iconContainer">
                        <button className='FooterIconBtn'><a href="https://wa.me/+972587701440"
                            target="_blank" rel="noopener noreferrer"
                        >
                            <img src={`${process.env.PUBLIC_URL}/icons/footer/simple-whatsapp.png`} alt="simple-whatsapp" />
                        </a></button>
                        <p className='footerIconTtl mb-0'>
                            {t("home.footer.phone")}
                        </p>
                    </div>

                    {/* <!-- phone --> */}
                    {/* <div class="iconContainer">
            <button className='FooterIconBtn'><a href="tel:+972587701440"
              target="_blank" rel="noopener noreferrer"
            >
              <img src={`${process.env.PUBLIC_URL}/icons/footer/simple-phone.png`} alt="simple-phone" />
            </a></button>
          </div> */}

                </nav>
            </ footer >




            {/* - UNDER FOOTER - */}

            < div class="underFooter" >
                <p class="leftP">
                    {t("home.footer.name")}
                </p>
                <p class="rightP">
                    {t("home.footer.copyright")}
                    &copy; {new Date().getFullYear()}

                </p>
            </ div >



        </div>
    )
}

export default Footer
