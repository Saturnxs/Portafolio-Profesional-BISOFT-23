import TitlePlanet from "./TitlePlanet"
import JupiterIcon from "../assets/svg/jupiter-icon.svg"
import { SiTypescript, SiJavascript, SiBootstrap, SiReact, SiPython, SiNodedotjs, SiAmazonaws, SiWordpress, SiGooglecolab, SiOpencv, SiTensorflow, SiFigma, SiNotion, SiDiagramsdotnet, SiGit, SiGithub, SiAdobeillustrator } from "react-icons/si";
import { DiMysql, DiMsqlServer } from "react-icons/di";
import { Trans, useTranslation } from 'react-i18next';
import { useEffect, useState } from "react";

const Stack: React.FC = () => {
    const { t } = useTranslation();
    const [iconsSize, setIconsSize] = useState<number>(50); // TODO: Change a new component to handle the icons size

    useEffect(() => {
        if (window.innerWidth < 768) {
            setIconsSize(35);
        } else {
            setIconsSize(50);
        }
    }, []);

    return (
        <div className="row justify-content-center align-items-center min-vh-100" id="stack">
            <div className="col-12">
                <div className="row py-5 justify-content-center" data-aos="fade-up" data-aos-duration="1000">
                    <div className="col-md-5 col-12">
                        <TitlePlanet
                            imgRoute={JupiterIcon}
                            title={<Trans t={t} i18nKey="navbar.stack" />}
                            subtext={<Trans t={t} i18nKey="stack.intro" components={{ pink: <span className="fw-bold color-pink-diamond" /> }} />} />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-11 col-12 d-flex justify-content-center flex-wrap px-md-5">
                        <div className="text-center px-5 px-md-4" data-aos="fade-up" data-aos-duration="1000">
                            <h3 className="fw-semibold text-white pb-3"><Trans t={t} i18nKey="stack.frontend" /></h3>
                            <div className="d-flex w-100 justify-content-center align-items-center flex-wrap text-white pb-md-5 pb-4">
                                <SiBootstrap size={iconsSize} className="mx-3 mb-4" />
                                <SiJavascript size={iconsSize} className="mx-3 mb-4" />
                                <SiTypescript size={iconsSize} className="mx-3 mb-4" />
                                <SiReact size={iconsSize} className="mx-3 mb-4" />
                            </div>
                        </div>
                        <div className="text-center px-5 px-md-4" data-aos="fade-up" data-aos-duration="1000">
                            <h3 className="fw-semibold text-white pb-3"><Trans t={t} i18nKey="stack.backend" /></h3>
                            <div className="d-flex w-100 justify-content-center align-items-center flex-wrap text-white pb-md-5 pb-4">
                                <SiPython size={iconsSize} className="mx-3 mb-4" />
                                <SiNodedotjs size={iconsSize} className="mx-3 mb-4" />
                            </div>
                        </div>
                        <div className="text-center px-5 px-md-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" data-aos-anchor-placement="top-bottom">
                            <h3 className="fw-semibold text-white pb-3"><Trans t={t} i18nKey="stack.database" /></h3>
                            <div className="d-flex w-100 justify-content-center align-items-center flex-wrap text-white pb-md-5 pb-4">
                                <DiMysql size={iconsSize} className="mx-3 mb-4" />
                                <DiMsqlServer size={iconsSize} className="mx-3 mb-4" />
                            </div>
                        </div>
                        <div className="text-center px-5 px-md-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" data-aos-anchor-placement="top-bottom">
                            <h3 className="fw-semibold text-white pb-3"><Trans t={t} i18nKey="stack.ml" /></h3>
                            <div className="d-flex w-100 justify-content-center align-items-center flex-wrap text-white pb-md-5 pb-4">
                                <SiGooglecolab size={iconsSize} className="mx-3 mb-4" />
                                <SiOpencv size={iconsSize} className="mx-3 mb-4" />
                                <SiTensorflow size={iconsSize} className="mx-3 mb-4" />
                            </div>
                        </div>
                        <div className="text-center px-5 px-md-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-anchor-placement="top-bottom">
                            <h3 className="fw-semibold text-white pb-3"><Trans t={t} i18nKey="stack.cloud" /></h3>
                            <div className="d-flex w-100 justify-content-center align-items-center flex-wrap text-white pb-md-5 pb-4">
                                <SiAmazonaws size={iconsSize} className="mx-3 mb-4" />
                                <SiWordpress size={iconsSize} className="mx-3 mb-4" />
                            </div>
                        </div>
                        <div className="text-center px-5 px-md-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-anchor-placement="top-bottom">
                            <h3 className="fw-semibold text-white pb-3"><Trans t={t} i18nKey="stack.version" /></h3>
                            <div className="d-flex w-100 justify-content-center align-items-center flex-wrap text-white pb-md-5 pb-4">
                                <SiGit size={iconsSize} className="mx-3 mb-4" />
                                <SiGithub size={iconsSize} className="mx-3 mb-4" />
                            </div>
                        </div>
                        <div className="text-center px-5 px-md-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-anchor-placement="top-bottom">
                            <h3 className="fw-semibold text-white pb-3"><Trans t={t} i18nKey="stack.design" /></h3>
                            <div className="d-flex w-100 justify-content-center align-items-center flex-wrap text-white pb-md-5 pb-4">
                                <SiFigma size={iconsSize} className="mx-3 mb-4" />
                                <SiAdobeillustrator size={iconsSize} className="mx-3 mb-4" />
                                <SiNotion size={iconsSize} className="mx-3 mb-4" />
                                <SiDiagramsdotnet size={iconsSize} className="mx-3 mb-4" />
                            </div>
                        </div>
                    </div >
                </div >
            </div>
        </div >
    );
};

export default Stack;
