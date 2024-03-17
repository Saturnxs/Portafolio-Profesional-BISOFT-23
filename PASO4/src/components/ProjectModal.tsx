import { useRef, useEffect } from "react";
import { IconType } from "react-icons";
import { CgCloseO } from "react-icons/cg";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { loadScrollModal } from "../utils/utils";
import { useTranslation } from "react-i18next";
import '@splidejs/react-splide/css';

interface IProjectModal {
    title: string;
    subtitle: string;
    year: string;
    stack: { name: string, icon: IconType }[];
    description: JSX.Element;
    images?: string[];
    links?: { title: string, text: string, url: string, icon: IconType }[];
    onClose: () => void;
}

const ProjectModal: React.FC<IProjectModal> = ({ title, subtitle, year, stack, description, links, images, onClose }) => {
    const [t] = useTranslation();

    const optionsMainCarousel = {
        fixedHeight: '55vh',
        fixedWidth: '100%',
        pagination: false,
        arrows: false,
        type: 'fade',
        breakpoints: {
            768: {
                fixedHeight: '40vh',
            },
        },
    };

    const optionsThumbnailsCarousel = {
        fixedWidth: 250,
        fixedHeight: '15vh',
        gap: 15,
        rewind: true,
        pagination: false,
        isNavigation: true,
        focus: 'center', // TODO: Check why this triggers a warning even though it's a valid option
        type: 'loop',
        breakpoints: {
            768: {
                fixedWidth: 150,
                fixedHeight: 100,
                gap: 10,
            },
        },
        autoplay: true,
        pauseOnHover: true,
        resetProgress: false,
    };

    // Sync the two carousels
    const mainRef = useRef<Splide | null>(null);
    const thumbsRef = useRef<Splide | null>(null);

    useEffect(() => {
        if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
            mainRef.current.sync(thumbsRef.current.splide);
        }
        loadScrollModal();
    }, []);


    return (
        <div className="container-fluid bg-glassmorphism position-fixed z-3 top-0 left-0 p-md-4 p-0 text-white modal-project">
            <div className="row px-md-4 p-4 align-items-center justify-content-between z-3 sticky-top">
                {/* <div className="col-1">
                        <img src={`src/assets/projects/${data.folderName}/icono.png`} className="w-75" /> TODO: Add icons
                    </div> // TODO: Add icons */}
                <div className="col-9">
                    <h2 className="fw-bold">{title}</h2>
                    <p className="m-0">{subtitle} - {year}</p>
                </div>
                <div className="col-3 ps-md-5">
                    <CgCloseO size={35} className="float-end h-100 hover-light-on" onClick={onClose} role="button" />
                </div>
            </div>
            <div className="row px-4 justify-content-between pb-5">
                <div className="col-md-7">
                    {/* Main Carousel */}
                    <Splide options={optionsMainCarousel} id="project-modal-splide" ref={mainRef} className="pb-4">
                        {images?.map((image, index) => {
                            return (
                                <SplideSlide key={index}>
                                    {image.endsWith('.mp4') ? (
                                        <video className="image-gallery-main-image" controls>
                                            <source src={image} type="video/mp4" />
                                        </video>
                                    ) : (
                                        <img src={image} className="image-gallery-main-image" alt={title} />
                                    )}
                                </SplideSlide>
                            );
                        })}
                    </Splide>
                    {/* Thumbnails Carousel */}
                    {images && images.length > 1 && (
                        <Splide options={optionsThumbnailsCarousel} id="thumbnails-modal-splide" className="image-gallery-thumbnails-slider" ref={thumbsRef}>
                            {images.map((image, index) => {
                                return (
                                    <SplideSlide key={index}>
                                        {image.endsWith('.mp4') ? (
                                            <img src={images[0]} className="image-gallery-thumbnails" alt={title} />
                                        ) : (
                                            <img src={image} className="image-gallery-thumbnails" alt={title} />
                                        )}
                                    </SplideSlide>
                                );
                            })}
                        </Splide>
                    )}
                </div>
                <div className="col-md-5 ps-md-5 info-div px-4 py-5 py-md-0">
                    <div className="mb-4">
                        {description}
                    </div>
                    <div className="mb-4">
                        {stack && stack.length > 0 && <>
                            <h3 className="fw-bold">{t("projects.stack")}</h3>
                            {stack.map((stackItem) => {
                                const Icon = stackItem.icon;
                                return (<Icon size={40} className="mx-2 my-3" key={stackItem.name} />);
                            })}
                        </>}
                    </div>
                    <div className="mb-4">
                        {links && links.length > 0 && <>
                            <h3 className="fw-bold">{t("projects.explore")}</h3>
                            {links?.map((link, index) => {
                                return (
                                    <a href={link.url} className="d-flex align-items-center text-decoration-none hover-light-on py-4" target="_blank" key={index}>
                                        <div className="row align-items-center">
                                            <div className="col-1 text-center text-white">
                                                {link.icon({ size: 50 })}
                                            </div>
                                            <div className="col-11">
                                                <p className="text-white m-0 ps-5">{link.title}<br /><span className="fw-bold color-pink-diamond">{link.text}</span></p>
                                            </div>
                                        </div>
                                    </a>
                                );
                            })}
                        </>}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ProjectModal;