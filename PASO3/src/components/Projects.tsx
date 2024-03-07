import TitlePlanet from "./TitlePlanet"
import MarsIcon from "../assets/svg/mars-icon.svg"

const Contact: React.FC = () => {
    return (
        <div className="row justify-content-center align-items-center min-vh-90" id="projects">
            <div className="col-md-10 col-12">
                <div className="row py-5 justify-content-center">
                    <div className="col-md-5 col-12">
                        <TitlePlanet
                            imgRoute={MarsIcon}
                            title="projects" />
                        <p className="text-white text-center">Some <span className="fw-bold color-pink-diamond">code</span>, <span className="fw-bold color-pink-diamond">design</span> and <span className="fw-bold color-pink-diamond">production</span> projects in which I've been involved. <span className="fw-bold color-pink-diamond">Click</span> on them to learn more!</p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Contact;