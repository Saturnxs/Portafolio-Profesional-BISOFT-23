import ITitlePlanet from "../interfaces/ITitlePlanet";

const TitlePlanet: React.FC<ITitlePlanet> = ({ imgRoute, title, subtext }) => {
    return (<>
        <div className="d-flex align-items-center justify-content-center light-on py-4">
            <img src={`${imgRoute}`} className="body-icons me-3 p-2" />
            <h1 className="text-white text-center m-0">{title}</h1>
        </div>
        {subtext && <p className="text-white text-center">
            {subtext}
        </p>}
    </>
    );
};

export default TitlePlanet;