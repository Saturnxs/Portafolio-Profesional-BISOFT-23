const TopNavBar: React.FC = () => {
    return (
        <div className="container-fluid position-fixed py-2 bg-degradado z-3">
            <div className="row justify-content-start align-items-center p-2">
                <div className="col-1 text-center">
                    <a href="/">
                        <img alt='Home' src='src\assets\svg\thomas-logo.svg' className="w-50 light-on" />
                    </a>
                </div>
                <div className="col-10 d-flex justify-content-center">
                    <a href="#me" className="px-4 text-decoration-none fw-bold text-white d-flex align-items-center hover-light-on">
                        <img src='src\assets\svg\saturn-icon.svg' className="menu-icons text-white" />
                        <span className="px-3">about me</span>
                    </a>
                    <a href="#stack" className="px-4 text-decoration-none fw-bold text-white d-flex align-items-center hover-light-on">
                        <img src='src\assets\svg\jupiter-icon.svg' className="menu-icons text-white" />
                        <span className="px-3">stack</span>
                    </a>
                    <a href="#projects" className="px-4 text-decoration-none fw-bold text-white d-flex align-items-center hover-light-on">
                        <img src='src\assets\svg\mars-icon.svg' className="menu-icons text-white" />
                        <span className="px-3">projects</span>
                    </a>
                    <a href="#contact" className="px-4 text-decoration-none fw-bold text-white d-flex align-items-center hover-light-on">
                        <img src='src\assets\svg\earth-icon.svg' className="menu-icons text-white" />
                        <span className="px-3">contact</span>
                    </a>
                </div>
                <div className="col-1 text-center">
                    <button className="button-white-to-pink" type="button">
                        es
                    </button>
                </div>
            </div >
        </div >
    );
};

export default TopNavBar;