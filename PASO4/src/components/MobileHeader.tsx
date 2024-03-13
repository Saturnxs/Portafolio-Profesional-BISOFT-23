import { FaBars, FaXmark } from "react-icons/fa6";
import { useState, useEffect } from "react";
import ThomasLogo from "../assets/svg/thomas-logo.svg";
import { useTranslation } from 'react-i18next';

const MobileHeader: React.FC = () => {
    const [t, i18n] = useTranslation();

    const [show, setShow] = useState(!false);

    useEffect(() => {
        !show ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';
    }, [show]);

    return (
        <>
            <div className={`container-fluid bg-glassmorphism position-fixed z-2 p-5 h-100 d-md-none ${show ? "modal-menu-mobile" : "modal-menu-mobile-active"}`}>
                <div className="row d-flex flex-column justify-content-around align-items-center h-100">
                    <div className="col-12 text-center">
                        <a href="/">
                            <img alt='Home' src={ThomasLogo} className="body-icons light-on" />
                        </a>
                    </div>
                    <div className="col-12 d-flex flex-column justify-content-center align-items-center fs-5 fw-bold">
                        <a href="#me" className="py-2 text-decoration-none text-white light-on" onClick={() => setShow(!show)}>
                            {t("navbar.about")}
                        </a>
                        <a href="#stack" className="py-2 text-decoration-none text-white light-on" onClick={() => setShow(!show)}>
                            {t("navbar.stack")}
                        </a>
                        <a href="#projects" className="py-2 text-decoration-none text-white light-on" onClick={() => setShow(!show)}>
                            {t("navbar.projects")}
                        </a>
                        <a href="#contact" className="py-2 text-decoration-none text-white light-on" onClick={() => setShow(!show)}>
                            {t("navbar.contact")}
                        </a>
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                        <button className="button-white-to-pink" type="button" onClick={() => { i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en'); setShow(!show) }}>
                            {i18n.language === 'en' ? 'es' : 'en'}
                        </button>
                    </div>
                </div>
            </div >

            <nav className="navbar-fixed-top p-4 position-fixed w-100 bg-degradado z-2 d-md-none">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-between align-items-center">
                            <a href="/" className={`${!show ? "modal-menu-mobile" : "modal-menu-mobile-active"}`}>
                                <img alt='Home' src={ThomasLogo} className="body-icons light-on" />
                            </a>
                            {show ? <FaBars className="fa-solid fa-bars fs-2 color-pink-diamond" onClick={() => setShow(!show)} /> : <FaXmark className="fa-solid fa-close fs-2 color-pink-diamond" onClick={() => setShow(!show)} />}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default MobileHeader;