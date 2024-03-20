import { FaHeart } from "react-icons/fa";
import VerticalLogo from "../assets/svg/vertical-logo.svg";
import { Trans, useTranslation } from "react-i18next";

const Footer: React.FC = () => {
    const { t } = useTranslation();

    return (
        <footer className="row justify-content-center align-items-center flex-column min-vh-100 pt-5" data-aos="fade-up" data-aos-duration="1000">
            <div className="col-8 col-md-2 pb-5">
                <img className='light-on img-fluid' src={VerticalLogo} alt="Thomas BM" />
            </div>
            <div className="col-10 text-white text-center">
                <p>{t("footer.crafted-1")} <FaHeart className="light-on" /> <Trans i18nKey="footer.crafted-2" components={{ github: <a href='https://github.com/Saturnxs' target='_blank' rel='noreferrer' className="text-white text-decoration-none hover-light-on"></a> }} />
                </p>
                <p>©2024 Thomas Bermúdez</p>
            </div>
        </footer >
    );
};

export default Footer;