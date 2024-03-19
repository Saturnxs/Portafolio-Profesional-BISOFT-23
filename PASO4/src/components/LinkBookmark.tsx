import ILinkBookmark from "../interfaces/ILinkBookmark";

const LinkBookmark: React.FC<ILinkBookmark> = ({ icon: Icon, title, url, urlTitle }) => {
    return (<a href={url} target="_blank" className="text-decoration-none hover-light-on">
        <div className="row align-items-center justify-content-center py-4">
            <div className="col-3 text-center text-white" >
                <Icon size={50} />
            </div >
            <div className="col-9 ">
                <p className="text-white m-0">
                    {title}
                    <br /><span className="fw-bold color-pink-diamond">{urlTitle}</span>
                </p>
            </div>
        </div >
    </a >);
};

export default LinkBookmark;