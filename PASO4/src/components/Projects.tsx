import TitlePlanet from "./TitlePlanet"
import MarsIcon from "../assets/svg/mars-icon.svg"
import ProjectCard from "./ProjectCard";
import ProjectList from "../data/ProjectsList";
import { useTranslation, Trans } from 'react-i18next';
import { useEffect, useState } from "react";

const Contact: React.FC = () => {
    const { t } = useTranslation();
    const [loadedProjects, setLoadedProjects] = useState(3);

    useEffect(() => {
        const width = window.innerWidth;
        if (width <= 992) {
            setLoadedProjects(4);
        } else {
            setLoadedProjects(3);
        }
    }, []);

    return (
        <>
            <div className="row justify-content-center align-items-center min-vh-100" id="projects">
                <div className="col-md-11 col-12" data-aos="fade-up" data-aos-duration="1000">
                    <div className="row py-5 justify-content-center">
                        <div className="col-md-5 col-12">
                            <TitlePlanet
                                imgRoute={MarsIcon}
                                title={<Trans t={t} i18nKey="navbar.projects" />}
                                subtext={<Trans t={t} i18nKey="projects.intro" components={{ pink: <span className="fw-bold color-pink-diamond" /> }} />} />
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {ProjectList().slice(0, loadedProjects).map((project, index) => {
                            return (
                                <ProjectCard {...project} key={index} />
                            );
                        })}
                        <div className="col-12 text-center py-5" data-aos="fade-up" data-aos-duration="1000">
                            {loadedProjects >= ProjectList().length ?
                                <button className="button-pink-to-white" onClick={() => setLoadedProjects(3)}>
                                    <Trans t={t} i18nKey="projects.button-close" />
                                </button>
                                :
                                <button className="button-pink-to-white" onClick={() => setLoadedProjects(loadedProjects + 3)}>
                                    <Trans t={t} i18nKey="projects.button" />
                                </button>
                            }
                        </div >
                    </div>
                </div>
            </div >
        </>
    );
};

export default Contact;