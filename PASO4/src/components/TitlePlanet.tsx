import TitlePlanetProps from "../interfaces/ITitlePlanet";

const TitlePlanet: React.FC<TitlePlanetProps> = ({ imgRoute, title }) => {
    return (
        <div className="d-flex justify-content-center light-on py-4">
            <img src={`${imgRoute}`} className="body-icons pe-3" />
            <h1 className="text-white text-center">{title}</h1>
            {/* //TODO: Add subtext */}
        </div>
    );
};

export default TitlePlanet;