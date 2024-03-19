import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import EarthIcon from "../assets/svg/earth-icon.svg"
import CVEn from "../assets/download/ThomasBM-CV-EN.pdf"
import CVEs from "../assets/download/ThomasBM-CV-ES.pdf"
import TitlePlanet from "./TitlePlanet"
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa";
import { useTranslation, Trans } from 'react-i18next';
import LinkBookmark from "./LinkBookmark";

const Contact: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [message, setMessage] = useState<string>("");
    const [mobile, setMobile] = useState<boolean>(false);
    const [iconsSize, setIconsSize] = useState<number>(50);

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

    useEffect(() => {
        if (window.innerWidth < 768) {
            setMobile(true);
            setIconsSize(35);
        } else {
            setMobile(false);
            setIconsSize(50);
        }
    }, []);

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
                <div className="row py-3 py-md-5 justify-content-center">
                    <div className="col-md-5 col-12" data-aos="fade-up" data-aos-duration="1000">
                        <TitlePlanet
                            imgRoute={EarthIcon}
                            title={t("navbar.contact")} />
                        <p className="text-white text-center">
                            <Trans i18nKey="contact.intro" components={{ pink: <span className="fw-bold color-pink-diamond" /> }} />
                        </p>
                    </div>
                </div>
                <div className="row justify-content-center align-items-center">
                    <div className="col-xl-5 col-md-7 col-12 pb-md-0 pb-5 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-duration="1000">
                        <LinkBookmark
                            icon={() => <FaGithub size={iconsSize} />}
                            title={t("contact.contact-info.github.title")}
                            url="https://github.com/Saturnxs"
                            urlTitle="github.com/Saturnxs"
                        />
                        <LinkBookmark
                            icon={() => <FaLinkedinIn size={iconsSize} />}
                            title={t("contact.contact-info.linkedin.title")}
                            url="https://www.linkedin.com/in/thomas-bermudez-mora"
                            urlTitle="in/thomas-bermudez-mora"
                        />
                        <LinkBookmark
                            icon={() => <FaRegEnvelope size={iconsSize} />}
                            title={t("contact.contact-info.email.title")}
                            url="mailto:bmthomas.code@gmail.com"
                            urlTitle={mobile ? t("contact.contact-info.email.mobile-variant") : "bmthomas.code@gmail.com"}
                        />
                        <LinkBookmark
                            icon={() => <FaWhatsapp size={iconsSize} />}
                            title={t("contact.contact-info.whatsapp.title")}
                            url="https://wa.me/50662536365"
                            urlTitle="wa.me/50662536365"
                        />
                        <LinkBookmark
                            icon={() => <FaRegFilePdf size={iconsSize} />}
                            title={t("contact.contact-info.cv.title")}
                            url={i18n.language === "en" ? CVEn : CVEs}
                            urlTitle={t("contact.contact-info.cv.url")}
                        />
                    </div>
                    <div className="col-xl-6 col-12" data-aos="fade-up" data-aos-duration="1000">
                        <form className="contact-form row bg-glassmorphism-light py-5 px-md-4 px-2" onSubmit={sendEmail}>
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