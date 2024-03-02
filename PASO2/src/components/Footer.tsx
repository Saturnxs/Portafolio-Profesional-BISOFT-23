import { FaHeart } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <footer className="container-fluid bg-transparent mt-5">
            <div className="row justify-content-center align-items-center flex-column min-vh-90">
                <div className="col-8 col-md-2 pb-5">
                    <img className='light-on img-fluid' src='src\assets\svg\vertical-logo.svg' alt='Thomas Logo' />
                </div>
                <div className="col-10 text-white text-center">
                    <p>Crafted with <FaHeart className="light-on" /> by <a href='https://github.com/Saturnxs' target='_blank' rel='noreferrer' className="text-white text-decoration-none hover-light-on">@Saturnxs!</a></p>
                    <p>©2024 Thomas Bermúdez</p>
                </div>
            </div>
        </footer >
    );
};

export default Footer;