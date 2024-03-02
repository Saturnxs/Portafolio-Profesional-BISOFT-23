import TitlePlanet from "./TitlePlanet"
import { SiTypescript, SiJavascript, SiBootstrap, SiReact, SiPython, SiNodedotjs, SiAmazonaws, SiWordpress, SiGooglecolab, SiOpencv, SiTensorflow, SiFigma, SiNotion, SiDiagramsdotnet, SiGit, SiGithub, SiAdobeillustrator } from "react-icons/si";
import { DiMysql, DiMsqlServer } from "react-icons/di";

const Stack: React.FC = () => {
    return (
        <div className="row justify-content-center align-items-center min-vh-90" id="stack">
            <div className="col-12">
                <div className="row py-5 justify-content-center">
                    <div className="col-md-5 col-12">
                        <TitlePlanet
                            imgRoute="src\assets\svg\jupiter-icon.svg"
                            title="stack" />
                        <p className="text-white text-center">Some technologies and tools I use in my day by day to <span className="fw-bold color-pink-diamond">code</span>, <span className="fw-bold color-pink-diamond">design</span>, and <span className="fw-bold color-pink-diamond">create</span>.</p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-11 col-12 d-flex justify-content-center flex-wrap px-md-5">
                        <div className="text-center px-md-4">
                            <h3 className="fw-semibold text-white pb-3">Frontend</h3>
                            <div className="d-flex w-100 justify-content-center align-items-center flex-wrap text-white pb-md-5 pb-4">
                                <SiBootstrap size={50} className="mx-3 mb-4" />
                                <SiJavascript size={50} className="mx-3 mb-4" />
                                <SiTypescript size={50} className="mx-3 mb-4" />
                                <SiReact size={50} className="mx-3 mb-4" />
                            </div>
                        </div>
                        <div className="text-center px-md-4">
                            <h3 className="fw-semibold text-white pb-3">Backend</h3>
                            <div className="d-flex w-100 justify-content-center align-items-center flex-wrap text-white pb-md-5 pb-4">
                                <SiPython size={50} className="mx-3 mb-4" />
                                <SiNodedotjs size={50} className="mx-3 mb-4" />
                            </div>
                        </div>
                        <div className="text-center px-md-4">
                            <h3 className="fw-semibold text-white pb-3">Database</h3>
                            <div className="d-flex w-100 justify-content-center align-items-center flex-wrap text-white pb-md-5 pb-4">
                                <DiMysql size={50} className="mx-3 mb-4" />
                                <DiMsqlServer size={50} className="mx-3 mb-4" />
                            </div>
                        </div>
                        <div className="text-center px-md-4">
                            <h3 className="fw-semibold text-white pb-3">ML & Computer Vision</h3>
                            <div className="d-flex w-100 justify-content-center align-items-center flex-wrap text-white pb-md-5 pb-4">
                                <SiGooglecolab size={50} className="mx-3 mb-4" />
                                <SiOpencv size={50} className="mx-3 mb-4" />
                                <SiTensorflow size={50} className="mx-3 mb-4" />
                            </div>
                        </div>
                        <div className="text-center px-md-4">
                            <h3 className="fw-semibold text-white pb-3">Cloud & CMS</h3>
                            <div className="d-flex w-100 justify-content-center align-items-center flex-wrap text-white pb-md-5 pb-4">
                                <SiAmazonaws size={50} className="mx-3 mb-4" />
                                <SiWordpress size={50} className="mx-3 mb-4" />
                            </div>
                        </div>
                        <div className="text-center px-md-4">
                            <h3 className="fw-semibold text-white pb-3">Version Control</h3>
                            <div className="d-flex w-100 justify-content-center align-items-center flex-wrap text-white pb-md-5 pb-4">
                                <SiGit size={50} className="mx-3 mb-4" />
                                <SiGithub size={50} className="mx-3 mb-4" />
                            </div>
                        </div>
                        <div className="text-center px-md-4">
                            <h3 className="fw-semibold text-white pb-3">Design & Protoype</h3>
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
