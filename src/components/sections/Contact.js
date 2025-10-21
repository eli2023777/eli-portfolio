import { motion } from "motion/react";
import { useState } from 'react';
import { Form, Button, Modal } from "react-bootstrap";
import { BsPerson } from 'react-icons/bs';
import { BsEnvelope } from 'react-icons/bs';
import { BsPhone } from 'react-icons/bs';


const Contact = ({ variants, item, t }) => {

    const [showModal, setShowModal] = useState(false);
    const [focusedFields, setFocusedFields] = useState({});


    // For contact details
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });


    function handleFocus(name) {
        setFocusedFields(prev => ({ ...prev, [name]: true }));
    }
    function handleBlur(name) {
        setFocusedFields(prev => ({ ...prev, [name]: false }));
    }


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        // setSubmitted(true);
        setShowModal(true);

    };

    const handleClose = () => setShowModal(false);



    return (
        <div>

            < motion.div
                variants={variants}
                initial="hidden"
                whileInView="visible"
            >
                <motion.div variants={item} id='contactSection'>

                    {/* <div class="letterContainer">
          <img src={`${process.env.PUBLIC_URL}/images/letter.png`} alt="Letter" />
        </div> */}

                    {/* Form */}
                    <Form className='contactForm'
                        action="https://formsubmit.co/eli770440@gmail.com"
                        method="post"
                        target="hidden_iframe"
                        onSubmit={handleSubmit}
                    >
                        <h1 className='headline'>
                            {t("home.contact.h3")}
                        </h1>

                        {t("home.contact.p", { returnObjects: true })
                            .map((line, index) => (<p className='contactP' key={index}>{line}</p>))}

                        <div className="row">

                            {/* Name */}
                            <div className="col-md-6 mb-3">
                                <Form.Floating className="mb-3">
                                    <Form.Control type="name" placeholder=""
                                        name='name' onChange={handleChange} value={formData.name}
                                        required
                                        onFocus={() => handleFocus("name")}
                                        onBlur={() => handleBlur("name")}
                                    />
                                    <label htmlFor="formBasicName" className={focusedFields.name ? "focused" : ""}>

                                        <BsPerson className='ttlIcnContact'
                                            style={{

                                                transform: "translateY(-10%)",
                                                // color: "#0d6efd",
                                                pointerEvents: "none",
                                                fontSize: "1rem",
                                            }} />

                                        <span className='ttlTxtContact'>
                                            {t("home.contact.name")}
                                        </span>

                                    </label>
                                </Form.Floating>
                            </div>

                            {/* Email */}
                            <div className="col-md-6 mb-3">
                                <Form.Floating className="mb-3">
                                    <Form.Control type="email"
                                        name='email' onChange={handleChange} value={formData.email}
                                        placeholder="" required
                                        onFocus={() => handleFocus("email")}
                                        onBlur={() => handleBlur("email")}
                                    />
                                    <label htmlFor="formBasicEmail" className={focusedFields.email ? "focused" : ""}>

                                        <BsEnvelope className='ttlIcnContact'
                                            style={{

                                                transform: "translateY(-10%)",
                                                // color: "#0d6efd",
                                                pointerEvents: "none",
                                                fontSize: "1rem",
                                            }} />

                                        <span className='ttlTxtContact'>
                                            {t("home.contact.email")}
                                        </span>

                                    </label>
                                </Form.Floating>
                            </div>


                            {/* Phone */}
                            <div className="col-md-12 mb-3">
                                <Form.Floating className="mb-3">
                                    <Form.Control type="tel"
                                        name='phone' onChange={handleChange} value={formData.phone}
                                        placeholder=""
                                        onFocus={() => handleFocus("phone")}
                                        onBlur={() => handleBlur("phone")}
                                    />
                                    <label htmlFor="formBasicPhone" className={focusedFields.phone ? "focused" : ""}>

                                        <BsPhone className='ttlIcnContact'
                                            style={{

                                                transform: "translateY(-10%)",
                                                // color: "#0d6efd",
                                                pointerEvents: "none",
                                                fontSize: "1rem",
                                            }} />

                                        <span className='ttlTxtContact'>
                                            {t("home.contact.phone")}
                                        </span>

                                    </label>
                                </Form.Floating>

                            </div>


                            {/* Message */}
                            <div className="col-md-12 mb-3">

                                <Form.Group className="mb-3" controlId="formBasicMessage">
                                    <Form.Control as="textarea" rows={4}
                                        name='message' onChange={handleChange} value={formData.message}
                                        placeholder={t("home.contact.message")} required
                                    />

                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>

                            </div>

                            <input type="hidden" name="_template" value="table" />
                            <input type="hidden" name="_captcha" value="false" />
                        </div>

                        <div className="contactBtns">
                            {/* Submit btn */}
                            <Button variant="primary" type="submit">
                                {t("home.contact.submit")}
                            </Button>

                            {/* Reset btn */}
                            <Button variant="none"
                                onClick={() => setFormData({ name: '', email: '', phone: '', message: '' })}
                            >
                                <svg width={'25px'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#fb4646" d="M142.9 142.9c-17.5 17.5-30.1 38-37.8 59.8c-5.9 16.7-24.2 25.4-40.8 19.5s-25.4-24.2-19.5-40.8C55.6 150.7 73.2 122 97.6 97.6c87.2-87.2 228.3-87.5 315.8-1L455 55c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2l0 128c0 13.3-10.7 24-24 24l-8.4 0c0 0 0 0 0 0L344 224c-9.7 0-18.5-5.8-22.2-14.8s-1.7-19.3 5.2-26.2l41.1-41.1c-62.6-61.5-163.1-61.2-225.3 1zM16 312c0-13.3 10.7-24 24-24l7.6 0 .7 0L168 288c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2l-41.1 41.1c62.6 61.5 163.1 61.2 225.3-1c17.5-17.5 30.1-38 37.8-59.8c5.9-16.7 24.2-25.4 40.8-19.5s25.4 24.2 19.5 40.8c-10.8 30.6-28.4 59.3-52.9 83.8c-87.2 87.2-228.3 87.5-315.8 1L57 457c-6.9 6.9-17.2 8.9-26.2 5.2S16 449.7 16 440l0-119.6 0-.7 0-7.6z" /></svg>
                            </Button>
                        </div>

                        {/* Prevent page transition  */}
                        <iframe name="hidden_iframe" style={{ display: "none" }}></iframe>

                        {/* Pop-Up Modal */}
                        <Modal show={showModal} onHide={handleClose} centered backdrop="static">
                            <Modal.Header>
                                <Modal.Title>
                                    {t("home.contact.success.t")}
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {t("home.contact.success.b")}
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="primary" onClick={handleClose}>
                                    אישור
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Form>


                </motion.div >
            </motion.div >

        </div>
    )
}

export default Contact
