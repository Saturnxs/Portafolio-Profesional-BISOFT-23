import IProject from "../interfaces/IProject";


const ProjectCard: React.FC<IProject> = ({ title, subtitle, banner, year, stack, shortDescription }) => {
    return (
        <div className="project-card col-md-4 col-12 p-md-4 p-2">
            <div className="text-white text-center position-relative d-flex p-4 h-100" data-aos="fade-up" data-aos-duration="1000">
                <div className="border-radious-20 position-absolute top-0 start-0 end-0 bottom-0 overflow-hidden">
                    <div className="immersive-card-background border-radious-20">
                        <img src={banner} alt="immersive" className="h-auto w-100" />
                    </div>
                    <div className="immersive-card-gradient position-absolute top-0 start-0 end-0 bottom-0"></div>
                </div>
                <div className="immersive-card-content z-1 w-100 p-3 d-flex flex-column justify-content-between">
                    <div>
                        <img src={banner} alt={`${title} Banner`} className="w-100 border-radious-20 object-fit-cover" />
                        <div className="pt-4">
                            <h3>{title}</h3>
                            <h6>-{year}-</h6>
                            <h6>{subtitle}</h6>
                        </div>
                    </div>
                    <div className="h-100 pt-3 d-flex flex-column justify-content-between align-items-center">
                        <p>{shortDescription}</p>
                        <div>
                            {stack.map((stackItem) => {
                                const Icon = stackItem.icon;
                                return (<Icon size={25} className="mx-2 my-3" key={stackItem.name} />);
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
