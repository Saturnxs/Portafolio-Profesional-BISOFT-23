import { ReactTyped } from "react-typed";
import SaturnIcon from "../assets/svg/saturn-icon.svg";
import CenfoLogo from "../assets/img/cenfo-logo.png";
import PicoEGalloLogo from "../assets/img/pg-logo.png";

const AboutMe: React.FC = () => {
    return (
        <div className="row py-5 justify-content-center align-items-center min-vh-90" id="me">
            <div className="col-md-6 col-12 text-white pt-5 px-4">
                <div>
                    <h2>
                        Hi!
                        <span className="px-3 align-bottom"><img src={SaturnIcon} className="body-icons light-on" /></span>
                        My name is Thomas!
                    </h2>
                </div>

                <h1 className="light-on py-4 mb-4">
                    I'm <ReactTyped
                        strings={[
                            "a Fullstack Developer",
                            "a Freelancer",
                            "a Web Developer",
                            "an Excellence Student",
                            "a Machine Learning Enthusiast"
                        ]}
                        typeSpeed={70}
                        backSpeed={90}
                        loop
                    />
                </h1>
                {/* I'm also an excellence student and ambassador at Universidad Cenfotec. */}
                <p>As a <span className="fw-bold color-pink-diamond">developer</span>, I build applications mainly oriented towards web services using technologies such as Bootstrap and React. As a <span className="fw-bold color-pink-diamond">professional</span>, I encourage excellence through good practices and continuous improvement, considering myself a person with high attention to detail and taking care of the craftsmanship in anything <span className="fw-bold color-pink-diamond">coded</span>, <span className="fw-bold color-pink-diamond">designed</span>, and <span className="fw-bold color-pink-diamond">produced</span> by me. </p>
                <p>And as a <span className="fw-bold color-pink-diamond">human</span>, I believe that social change can be achieved by spreading science and education, with technology being the key to success on this path.</p>
            </div>
            <div className="col-md-3 col-12 d-flex justify-content-center">
                <div className='about-me-image-container'>
                    <div className='main-image w-100 h-100'></div>
                    <div className="light-on main-image-frame w-100 h-100"></div>
                </div>
            </div>
            <div className="col-9 pt-md-5 px-4">
                <div className="row justify-content-evenly text-white d-none d-md-flex">
                    <div className="col-4 text-center">
                        <h5 className="m-0 fw-bold">Embracing <span className="color-pink-diamond">excellence</span> at</h5>
                    </div>
                    <div className="col-4 text-center">
                        <h5 className="m-0 fw-bold">Challenging <span className="color-pink-diamond">expectations</span> at</h5>
                    </div>
                </div>
                <div className="row pt-5 pt-md-0 justify-content-evenly text-white align-items-center">
                    <div className="col-md-5 text-center pt-5 pt-md-0">
                        <a href="https://www.ucenfotec.ac.cr/" target="_blank" className="text-decoration-none">
                            <h5 className="m-0 fw-bold text-white d-md-none d-block pb-4">Embracing <span className="color-pink-diamond">excellence</span> at</h5>
                            <img src={CenfoLogo} className="w-75 px-0 px-md-5" />
                        </a>
                    </div>
                    <div className="col-md-5 text-center pt-5 pt-md-0">
                        <a href="https://picoegallo.com/" target="_blank" className="text-decoration-none">
                            <h5 className="m-0 fw-bold text-white d-md-none d-block pb-4">Challenging <span className="color-pink-diamond">expectations</span> at</h5>
                            <img src={PicoEGalloLogo} className="w-75 px-0 px-md-5" />
                        </a>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default AboutMe;
