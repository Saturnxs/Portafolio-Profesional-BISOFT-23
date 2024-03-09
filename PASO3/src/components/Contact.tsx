import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import EarthIcon from "../assets/svg/earth-icon.svg"
import CV from "../assets/download/CV-Thomas.pdf"
import TitlePlanet from "./TitlePlanet"
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa";
import { useTranslation, Trans } from 'react-i18next';

const Contact: React.FC = () => {
    const { t } = useTranslation();
    const [message, setMessage] = useState<string>("");

    useEffect(() => {
        const alertMessage = document.querySelector(".alert-message") as HTMLElement;
        if (message === "") {
            setTimeout(() => {
                alertMessage.style.opacity = "0";
            }, 2000);
        } else {
            alertMessage.style.opacity = "1";
            setTimeout(() => {
                alertMessage.style.opacity = "0";
                setMessage("");
            }, 3000);
        }
    }, [message]);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const nameInput = (document.getElementById("nameForm") as HTMLInputElement);
        const emailInput = (document.getElementById("emailForm") as HTMLInputElement);
        const subjectInput = (document.getElementById("subjectForm") as HTMLInputElement);
        const messageInput = (document.getElementById("messageForm") as HTMLInputElement);

        if (nameInput.value === "" || emailInput.value === "" || subjectInput.value === "" || messageInput.value === "") {
            setMessage(t("contact.contact-form.alerts.empty"));
            return
        }

        if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
            setMessage(t("contact.contact-form.alerts.invalid-email"));
            return;
        }

        emailjs.sendForm("portfolio_contact_form", "template_nin7nvw", e.currentTarget, "4acdwaoQ7X87wcYZS")
            .then(() => {
                setMessage(t("contact.contact-form.alerts.success"));
                nameInput.value = "";
                emailInput.value = "";
                subjectInput.value = "";
                messageInput.value = "";
            }, () => {
                setMessage(t("contact.contact-form.alerts.error"));
            });
    }

    return (
        <div className="row justify-content-center align-items-center min-vh-90" id="contact">
            <div className="col-md-12 col-11 px-md-5">
                <div className="row py-5 justify-content-center">
                    <div className="col-md-5 col-12" data-aos="fade-up" data-aos-duration="1000">
                        <TitlePlanet
                            imgRoute={EarthIcon}
                            title="contact" />
                        <p className="text-white text-center">
                            <Trans i18nKey="contact.intro" components={{ pink: <span className="fw-bold color-pink-diamond" /> }} />
                        </p>
                    </div>
                </div>
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-4 col-12 pb-md-0 pb-5 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-duration="1000">
                        <a href="https://github.com/Saturnxs" target="_blank" className="d-flex align-items-center text-decoration-none hover-light-on py-4">
                            <div className="row align-items-center">
                                <div className="col-1 text-center text-white">
                                    <FaGithub size={50} />
                                </div>
                                <div className="col-11">
                                    <p className="text-white m-0 ps-5">
                                        {t("contact.contact-info.github.title")}
                                        <br /><span className="fw-bold color-pink-diamond">github.com/Saturnxs</span>
                                    </p>
                                </div>
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/thomas-bermudez-mora" target="_blank" className="d-flex align-items-center text-decoration-none hover-light-on py-4">
                            <div className="row align-items-center">
                                <div className="col-1 text-center text-white">
                                    <FaLinkedinIn size={50} />
                                </div>
                                <div className="col-11">
                                    <p className="text-white m-0 ps-5">
                                        {t("contact.contact-info.linkedin.title")}
                                        <br /><span className="fw-bold color-pink-diamond">in/thomas-bermudez-mora</span>
                                    </p>
                                </div>
                            </div>
                        </a>
                        <a href="mailto:bmthomas.code@gmail.com" className="d-flex align-items-center text-decoration-none hover-light-on py-4">
                            <div className="row align-items-center">
                                <div className="col-1 text-center text-white">
                                    <FaRegEnvelope size={50} />
                                </div>
                                <div className="col-11">
                                    <p className="text-white m-0 ps-5">
                                        {t("contact.contact-info.email.title")}
                                        <br />
                                        <span className="fw-bold color-pink-diamond d-md-block d-none">
                                            bmthomas.code@gmail.com
                                        </span>
                                        <span className="fw-bold color-pink-diamond d-md-none d-block">
                                            {t("contact.contact-info.email.mobile-variant")}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </a>
                        <a href="https://wa.me/50662536365" target="_blank" className="d-flex align-items-center text-decoration-none hover-light-on py-4">
                            <div className="row align-items-center">
                                <div className="col-1 text-center text-white">
                                    <FaWhatsapp size={50} />
                                </div>
                                <div className="col-11">
                                    <p className="text-white m-0 ps-5">
                                        {t("contact.contact-info.whatsapp.title")}
                                        <br /><span className="fw-bold color-pink-diamond">wa.me/50662536365</span>
                                    </p>
                                </div>
                            </div>
                        </a>
                        <a href={CV} download="CV-Thomas.pdf" className="d-flex align-items-center text-decoration-none hover-light-on py-4">
                            <div className="row align-items-center">
                                <div className="col-1 text-center text-white">
                                    <FaRegFilePdf size={50} />
                                </div>
                                <div className="col-11">
                                    <p className="text-white m-0 ps-5">
                                        {t("contact.contact-info.cv.title")}
                                        <br /><span className="fw-bold color-pink-diamond">{t("contact.contact-info.cv.url")}</span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-5 col-12">
                        <form className="contact-form row bg-glassmorphism-light py-5 px-4" onSubmit={sendEmail} data-aos="fade-up" data-aos-duration="1000">
                            <div className="col-12 alert-message">
                                <h5 className="text-white light-on d-flex align-items-center mb-4">{message}</h5>
                            </div>
                            <div className="col-md-6 col-12 mb-4">
                                <div className="form-floating">
                                    <input type="text" className="form-control bg-transparent text-white fw-bolder" id="nameForm" name="nameForm" placeholder="name@example.com" />
                                    <label htmlFor="nameForm" className="text-white">{t("contact.contact-form.name")}</label>
                                </div>
                            </div>
                            <div className="col-md-6 col-12 mb-4">
                                <div className="form-floating">
                                    <input type="text" className="form-control bg-transparent text-white fw-bolder" id="emailForm" name="emailForm" placeholder="My name is..." />
                                    <label htmlFor="emailForm" className="text-white">{t("contact.contact-form.email")}</label>
                                </div>
                            </div>
                            <div className="col-12 mb-4">
                                <div className="form-floating">
                                    <input type="text" className="form-control bg-transparent text-white fw-bolder" id="subjectForm" name="subjectForm" placeholder="I want to talk about..." />
                                    <label htmlFor="subjectForm" className="text-white">{t("contact.contact-form.subject")}</label>
                                </div>
                            </div>
                            <div className="col-12 mb-4">
                                <div className="form-floating">
                                    <textarea className="form-control bg-transparent text-white fw-bolder" placeholder="Leave a comment here" id="messageForm" name="messageForm" style={{ height: "200px", resize: "none" }}></textarea>
                                    <label htmlFor="messageForm" className="text-white">{t("contact.contact-form.message")}</label>
                                </div>
                            </div>
                            <div className="col-12 text-center">
                                <button type="submit" className="button-white-to-pink">{t("contact.contact-form.submit")}</button>
                            </div>
                        </form>
                    </div>
                </div >
            </div >
        </div >
    );
};

export default Contact;