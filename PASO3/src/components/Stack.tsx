import TitlePlanet from "./TitlePlanet"
import JupiterIcon from "../assets/svg/jupiter-icon.svg"
import { SiTypescript, SiJavascript, SiBootstrap, SiReact, SiPython, SiNodedotjs, SiAmazonaws, SiWordpress, SiGooglecolab, SiOpencv, SiTensorflow, SiFigma, SiNotion, SiDiagramsdotnet, SiGit, SiGithub, SiAdobeillustrator } from "react-icons/si";
import { DiMysql, DiMsqlServer } from "react-icons/di";
import { Trans, useTranslation } from 'react-i18next';

const Stack: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="row justify-content-center align-items-center min-vh-90" id="stack">
            <div className="col-12">
                <div className="row py-5 justify-content-center" data-aos="fade-up" data-aos-duration="1000">
                    <div className="col-md-5 col-12">
                        <TitlePlanet
                            imgRoute={JupiterIcon}
                            title="stack" />
                        <p className="text-white text-center">
                            <Trans i18nKey="stack.intro" components={{ pink: <span className="fw-bold color-pink-diamond" /> }} />
                        </p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-11 col-12 d-flex justify-content-center flex-wrap px-md-5">
                        <div className="text-center px-md-4" data-aos="fade-up" data-aos-duration="1000">
                            <h3 className="fw-semibold text-white pb-3">{t("stack.frontend")}</h3>
                            <div className="d-flex w-100 justify-content-center align-items-center flex-wrap text-white pb-md-5 pb-4">
                                <SiBootstrap size={50} className="mx-3 mb-4" />
                                <SiJavascript size={50} className="mx-3 mb-4" />
                                <SiTypescript size={50} className="mx-3 mb-4" />
                                <SiReact size={50} className="mx-3 mb-4" />
                            </div>
                        </div>
                        <div className="text-center px-md-4" data-aos="fade-up" data-aos-duration="1000">
                            <h3 className="fw-semibold text-white pb-3">{t("stack.backend")}</h3>
                            <div className="d-flex w-100 justify-content-center align-items-center flex-wrap text-white pb-md-5 pb-4">
                                <SiPython size={50} className="mx-3 mb-4" />
                                <SiNodedotjs size={50} className="mx-3 mb-4" />
                            </div>
                        </div>
                        <div className="text-center px-md-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" data-aos-anchor-placement="top-bottom">
                            <h3 className="fw-semibold text-white pb-3">{t("stack.database")}</h3>
                            <div className="d-flex w-100 justify-content-center align-items-center flex-wrap text-white pb-md-5 pb-4">
                                <DiMysql size={50} className="mx-3 mb-4" />
                                <DiMsqlServer size={50} className="mx-3 mb-4" />
                            </div>
                        </div>
                        <div className="text-center px-md-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" data-aos-anchor-placement="top-bottom">
                            <h3 className="fw-semibold text-white pb-3">{t("stack.ml")}</h3>
                            <div className="d-flex w-100 justify-content-center align-items-center flex-wrap text-white pb-md-5 pb-4">
                                <SiGooglecolab size={50} className="mx-3 mb-4" />
                                <SiOpencv size={50} className="mx-3 mb-4" />
                                <SiTensorflow size={50} className="mx-3 mb-4" />
                            </div>
                        </div>
                        <div className="text-center px-md-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-anchor-placement="top-bottom">
                            <h3 className="fw-semibold text-white pb-3">{t("stack.cloud")}</h3>
                            <div className="d-flex w-100 justify-content-center align-items-center flex-wrap text-white pb-md-5 pb-4">
                                <SiAmazonaws size={50} className="mx-3 mb-4" />
                                <SiWordpress size={50} className="mx-3 mb-4" />
                            </div>
                        </div>
                        <div className="text-center px-md-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-anchor-placement="top-bottom">
                            <h3 className="fw-semibold text-white pb-3">{t("stack.version")}</h3>
                            <div className="d-flex w-100 justify-content-center align-items-center flex-wrap text-white pb-md-5 pb-4">
                                <SiGit size={50} className="mx-3 mb-4" />
                                <SiGithub size={50} className="mx-3 mb-4" />
                            </div>
                        </div>
                        <div className="text-center px-md-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-anchor-placement="top-bottom">
                            <h3 className="fw-semibold text-white pb-3">{t("stack.design")}</h3>
                            <div className="d-flex w-100 justify-content-center align-items-center flex-wrap text-white pb-md-5 pb-4">
                                <SiFigma size={50} className="mx-3 mb-4" />
                                <SiAdobeillustrator size={50} className="mx-3 mb-4" />
                                <SiNotion size={50} className="mx-3 mb-4" />
                                <SiDiagramsdotnet size={50} className="mx-3 mb-4" />
                            </div>
                        </div>
                    </div >
                </div >
            </div>
        </div >
    );
};

export default Stack;
