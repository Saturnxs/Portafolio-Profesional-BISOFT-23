import ThomasLogo from '../assets/svg/thomas-logo.svg';
import SaturnIcon from '../assets/svg/saturn-icon.svg';
import JupiterIcon from '../assets/svg/jupiter-icon.svg';
import MarsIcon from '../assets/svg/mars-icon.svg';
import EarthIcon from '../assets/svg/earth-icon.svg';
import { useTranslation } from 'react-i18next';
import { scrollToElementById } from '../utils/utils';

const TopNavBar: React.FC = () => {
    const [t, i18n] = useTranslation();

    return (
        <div className="container-fluid sticky-top py-2 z-3 d-none d-lg-block">
            <div className="row justify-content-start align-items-center p-2">
                <div className="col-1 text-center">
                    <a href="/">
                        <img alt='Home' src={ThomasLogo} className="w-50 light-on" />
                    </a>
                </div>
                <div className="col-10 d-flex justify-content-center">
                    <a role="button" className="px-4 text-decoration-none fw-bold text-white d-flex align-items-center hover-light-on" onClick={() => scrollToElementById("me")}>
                        <img src={SaturnIcon} className="menu-icons text-white" />
                        <span className="px-3">{t("navbar.about")} </span>
                    </a>
                    <a role="button" className="px-4 text-decoration-none fw-bold text-white d-flex align-items-center hover-light-on" onClick={() => scrollToElementById("stack")}>
                        <img src={JupiterIcon} className="menu-icons text-white" />
                        <span className="px-3">{t("navbar.stack")}</span>
                    </a>
                    <a role="button" className="px-4 text-decoration-none fw-bold text-white d-flex align-items-center hover-light-on" onClick={() => scrollToElementById("projects")}>
                        <img src={MarsIcon} className="menu-icons text-white" />
                        <span className="px-3">{t("navbar.projects")}</span>
                    </a>
                    <a role="button" className="px-4 text-decoration-none fw-bold text-white d-flex align-items-center hover-light-on" onClick={() => scrollToElementById("contact")}>
                        <img src={EarthIcon} className="menu-icons text-white" />
                        <span className="px-3">{t("navbar.contact")}</span>
                    </a>
                </div>
                <div className="col-1 text-center">
                    <button className="button-white-to-pink" type="button" onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')}>
                        {i18n.language === 'en' ? 'es' : 'en'}
                    </button>
                </div>
            </div >
        </div >
    );
};

export default TopNavBar;