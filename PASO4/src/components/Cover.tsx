// import { useTranslation } from "react-i18next";
import ThomasLogo from '../assets/svg/thomas-logo.svg';
import EarthIcon from '../assets/svg/earth-icon.svg';
import { FaAnglesDown } from "react-icons/fa6";
import { Trans, useTranslation } from 'react-i18next';
import TopNavBar from './TopNavbar';

const Cover: React.FC = () => {
    const { t } = useTranslation();

    return (<div id="cover" className="row align-items-center justify-content-center min-vh-100">
        <div className="col-12 d-flex justify-content-center align-items-center flex-column">
            <div className="d-flex justify-content-center align-items-baseline pe-5">
                <h1 className="text-white text-center"><Trans t={t} i18nKey="cover.hello" /></h1>
                <img src={EarthIcon} className="body-icons ps-3 light-on" />
            </div>
            <h3 className='fw-bold ps-5 text-white'>
                <Trans i18nKey="cover.subtitle" components={{ pink: <span className="fw-bold color-pink-diamond" /> }} />
            </h3>
        </div>
        <div className="col-12 d-flex justify-content-center align-items-center flex-column">
            <div className="row pb-5">
                <div className="col-12 text-center">
                    <img src={ThomasLogo} alt="Thomas Logo" className="w-50 light-on" />
                </div>
            </div>
            <div className="row justify-content-center pt-5">
                <div className="col-sm-8 col-12 text-center">
                    <h3 className="text-white"><Trans i18nKey="cover.scroll" components={{ pink: <span className="fw-bold color-pink-diamond" /> }} /></h3>
                    <FaAnglesDown className="text-white mt-4 fs-1 light-on" />
                </div>
            </div>
        </div>
        <TopNavBar />
    </div>)
}

export default Cover;