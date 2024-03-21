import { FaBars, FaXmark } from "react-icons/fa6";
import { useState, useEffect } from "react";
import ThomasLogo from "../assets/svg/thomas-logo.svg";
import { Trans, useTranslation } from 'react-i18next';
import { scrollToElement } from "../utils/utils";

const MobileHeader: React.FC = () => {
    const [t, i18n] = useTranslation();
    const [show, setShow] = useState(true);

    useEffect(() => {
        show ? document.body.style.overflow = 'auto' : document.body.style.overflow = 'hidden';
    }, [show]);

    return (
        <>
            <div className={`container-fluid bg-glassmorphism position-fixed z-2 p-5 h-100 d-xl-none ${show ? "modal-menu-mobile" : "modal-menu-mobile-active"}`}>
                <div className="row d-flex flex-column justify-content-around align-items-center h-100">
                    <div className="col-12 text-center">
                        <a href="#cover">
                            <img alt='Home' src={ThomasLogo} className="body-icons light-on" />
                        </a>
                    </div>
                    <div className="navbar col-12 d-flex flex-column justify-content-center align-items-center fs-5 fw-bold">
                        <a href="#cover" role="button" className="py-2 text-decoration-none text-white" onClick={e => { setShow(!show); scrollToElement(e) }}>
                            <Trans t={t} i18nKey="navbar.home" />
                        </a>
                        <a href="#me" role="button" className="py-2 text-decoration-none text-white" onClick={e => { setShow(!show); scrollToElement(e) }}>
                            <Trans t={t} i18nKey="navbar.about" />
                        </a>
                        <a href="#stack" role="button" className="py-2 text-decoration-none text-white" onClick={e => { setShow(!show); scrollToElement(e) }}>
                            <Trans t={t} i18nKey="navbar.stack" />
                        </a>
                        <a href="#projects" role="button" className="py-2 text-decoration-none text-white" onClick={e => { setShow(!show); scrollToElement(e) }}>
                            <Trans t={t} i18nKey="navbar.projects" />
                        </a>
                        <a href="#contact" role="button" className="py-2 text-decoration-none text-white" onClick={e => { setShow(!show); scrollToElement(e) }}>
                            <Trans t={t} i18nKey="navbar.contact" />
                        </a>
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                        <button className="button-white-to-pink" type="button" onClick={() => { i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en'); setShow(!show) }}>
                            {i18n.language === 'en' ? 'es' : 'en'}
                        </button>
                    </div>
                </div>
            </div >

            <nav className="p-4 sticky-top z-2 d-xl-none">
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