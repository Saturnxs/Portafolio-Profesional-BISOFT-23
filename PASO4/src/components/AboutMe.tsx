import { ReactTyped } from "react-typed";
import SaturnIcon from "../assets/svg/saturn-icon.svg";
import CenfoLogo from "../assets/img/cenfo-logo.png";
import PicoEGalloLogo from "../assets/img/pg-logo.png";
import { useTranslation, Trans } from 'react-i18next';

const AboutMe: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="row py-5 justify-content-center align-items-center min-vh-90" id="me">
            <div className="col-md-6 col-12 text-white px-4" data-aos="fade-up" data-aos-duration="1000">
                <div>
                    <h2>
                        {t("about-me.hi")}
                        <span className="px-3 align-bottom"><img src={SaturnIcon} className="body-icons light-on" /></span>
                        {t("about-me.name")}
                    </h2>
                </div>

                <h1 className="light-on py-4 mb-4" >
                    {t("about-me.im")} <ReactTyped
                        strings={t("about-me.typed-strings", { returnObjects: true }) as string[]}
                        typeSpeed={70}
                        backSpeed={90}
                        loop
                    />
                </h1>
                <p >
                    <Trans i18nKey="about-me.description-1" components={{ pink: <span className="fw-bold color-pink-diamond" /> }} />
                </p>

                <p >
                    <Trans i18nKey="about-me.description-2" components={{ pink: <span className="fw-bold color-pink-diamond" /> }} />
                </p>
            </div>
            <div className="col-md-3 col-12 d-flex justify-content-center" data-aos="fade-up" data-aos-duration="1000">
                <div className="about-me-image-container">
                    <div className="main-image w-100 h-100 position-relative z-1"></div>
                    <div className="light-on main-image-frame w-100 h-100"></div>
                </div>
            </div>
            <div className="col-9 pt-md-5 px-4" data-aos="fade-up" data-aos-duration="1000">
                <div className="row justify-content-evenly text-white d-none d-md-flex">
                    <div className="col-4 text-center">
                        <h5 className="m-0 fw-bold">
                            <Trans i18nKey="about-me.excellence" components={{ pink: <span className="color-pink-diamond" /> }} />
                        </h5>
                    </div>
                    <div className="col-4 text-center">
                        <h5 className="m-0 fw-bold">
                            <Trans i18nKey="about-me.expectations" components={{ pink: <span className="color-pink-diamond" /> }} />
                        </h5>
                    </div>
                </div>
                <div className="row pt-5 pt-md-0 justify-content-evenly text-white align-items-center">
                    <div className="col-md-5 text-center pt-5 pt-md-0">
                        <a href="https://www.ucenfotec.ac.cr/" target="_blank" className="text-decoration-none">
                            <h5 className="m-0 fw-bold text-white d-md-none d-block pb-4">Embracing <span className="color-pink-diamond">excellence</span> at</h5>
                            <img src={CenfoLogo} className="w-75 px-0 px-md-5 hover-light-on" />
                        </a>
                    </div>
                    <div className="col-md-5 text-center pt-5 pt-md-0">
                        <a href="https://picoegallo.com/" target="_blank" className="text-decoration-none">
                            <h5 className="m-0 fw-bold text-white d-md-none d-block pb-4">Challenging <span className="color-pink-diamond">expectations</span> at</h5>
                            <img src={PicoEGalloLogo} className="w-75 px-0 px-md-5 to-white-filter hover-light-on" />
                        </a>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default AboutMe;
