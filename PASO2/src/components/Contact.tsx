import TitlePlanet from "./TitlePlanet"

const Contact: React.FC = () => {
    return (
        <div className="row justify-content-center align-items-center min-vh-90" id="contact">
            <div className="col-md-12 col-11 px-md-5">
                <div className="row py-5 justify-content-center">
                    <div className="col-md-5 col-12">
                        <TitlePlanet
                            imgRoute="src\assets\svg\earth-icon.svg"
                            title="contact" />
                        <p className="text-white text-center">Check out my <span className="fw-bold color-pink-diamond">contact information</span> and <span className="fw-bold color-pink-diamond">social media</span>, feel free to get in touch with me!</p>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Contact;