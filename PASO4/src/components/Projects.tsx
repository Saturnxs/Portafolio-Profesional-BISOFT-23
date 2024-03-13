import TitlePlanet from "./TitlePlanet"
import MarsIcon from "../assets/svg/mars-icon.svg"
import ProjectCard from "./ProjectCard";
import ProjectList from "../data/ProjectsList";
import { useTranslation, Trans } from 'react-i18next';
import { useState } from "react";

const Contact: React.FC = () => {
    const { t } = useTranslation();
    const [loadedProjects, setLoadedProjects] = useState(3);

    return (
        <div className="row justify-content-center align-items-center min-vh-90" id="projects">
            <div className="col-md-11 col-12" data-aos="fade-up" data-aos-duration="1000">
                <div className="row py-5 justify-content-center">
                    <div className="col-md-5 col-12">
                        <TitlePlanet
                            imgRoute={MarsIcon}
                            title={t("navbar.projects")} />
                        <p className="text-white text-center">
                            <Trans i18nKey="projects.intro" components={{ pink: <span className="fw-bold color-pink-diamond" /> }} />
                        </p>
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
                                {t("projects.button-close")}
                            </button>
                            :
                            <button className="button-pink-to-white" onClick={() => setLoadedProjects(loadedProjects + 3)}>
                                {t("projects.button")}
                            </button>
                        }
                    </div >
                </div>
            </div>
        </div >
    );
};

export default Contact;