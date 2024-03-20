import TitlePlanetProps from "../interfaces/ITitlePlanet";

const TitlePlanet: React.FC<TitlePlanetProps> = ({ imgRoute, title }) => {
    return (
        <div className="d-flex align-items-center light-on py-4">
            <img src={`${imgRoute}`} className="body-icons me-3 p-2" />
            <h1 className="text-white text-center m-0">{title}</h1>
            {/* //TODO: Add subtext */}
        </div>
    );
};

export default TitlePlanet;