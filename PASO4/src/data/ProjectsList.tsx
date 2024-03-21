import IProject from "../interfaces/IProject";
import { DiMysql, DiMsqlServer } from "react-icons/di";
import { SiJavascript, SiReact, SiGithub, SiNodedotjs, SiExpress, SiAdobeillustrator, SiAdobepremierepro, SiDiagramsdotnet, SiFigma, SiHtml5, SiCss3, SiInstagram, SiPython, SiAmazonaws, SiGooglecolab, SiOpencv, SiTensorflow, SiYolo, SiCsharp, SiAngular, SiTypescript, SiFlask, SiYoutube } from "react-icons/si";
import { FaRegFilePdf, FaJava } from "react-icons/fa";
import { BiGlobe } from "react-icons/bi";
import { FaBookAtlas } from "react-icons/fa6";
import { Trans, useTranslation } from "react-i18next";

// ISAAC
import IsaacBanner from "../assets/projects/isaac/banner.jpg";

// Cenfoteco Kingdoms
import CenfotecoKingdomsBanner from "../assets/projects/cenfoteco/banner.jpg";

// Horus
import HorusBanner from "../assets/projects/horus/banner.jpg";

// MobyDyg
import MobyDygBanner from "../assets/projects/mobydyg/banner.jpg";
import MobyDyg1 from "../assets/projects/mobydyg/1.png";
import MobyDyg2 from "../assets/projects/mobydyg/2.png";
import MobyDyg3 from "../assets/projects/mobydyg/3.png";
import MobyDyg4 from "../assets/projects/mobydyg/4.png";
import MobyDyg5 from "../assets/projects/mobydyg/5.png";

// Crafting To Do's
import CrafToDosBanner from "../assets/projects/crafting-to-dos/banner.jpg";
import CrafToDos1 from "../assets/projects/crafting-to-dos/1.png";

// Contents Brand Book
import ContentsBrandBookBanner from "../assets/projects/content-brand-book/banner.jpg";
import BrandBook from "../assets/download/Contents-Brand-Book.pdf";

// Federacion Costarricense de Taekwondo
import FederacionCostarricenseDeTaekwondoBanner from "../assets/projects/tournament-app/banner.jpg";
import FederacionCostarricenseDeTaekwondo1 from "../assets/projects/tournament-app/1.png";
import FederacionCostarricenseDeTaekwondo2 from "../assets/projects/tournament-app/2.png";

// Atlas
import AtlasBanner from "../assets/projects/atlas/banner.jpg";
import AtlasDoc from "../assets/download/Atlas-Documentacion.pdf";
import AtlasVideo from "../assets/projects/atlas/video.mp4";

// SkemClub
import SkemClubBanner from "../assets/projects/skemclub/banner.jpg";
import SkemClub1 from "../assets/projects/skemclub/1.png";
import SkemClub2 from "../assets/projects/skemclub/2.png";
import SkemClub3 from "../assets/projects/skemclub/3.png";
import SkemClub4 from "../assets/projects/skemclub/4.png";

// Wonder
import WonderBanner from "../assets/projects/wonder/banner.jpg";
import Wonder1 from "../assets/projects/wonder/1.jpg";
import Wonder2 from "../assets/projects/wonder/2.jpg";
import Wonder3 from "../assets/projects/wonder/3.jpg";
import Wonder4 from "../assets/projects/wonder/4.jpg";
import Wonder5 from "../assets/projects/wonder/5.jpg";
import Wonder6 from "../assets/projects/wonder/6.jpg";
import Wonder7 from "../assets/projects/wonder/7.jpg";
import WondeVideo from "../assets/projects/wonder/video.mp4";

const ProjectsList: () => IProject[] = () => {
    const { t } = useTranslation("projects");

    return [
        {
            title: "ISAAC",
            subtitle: <Trans t={t} i18nKey="isaac.subtitle" />,
            icon: "",
            year: "2023",
            stack: [
                {
                    name: "Python",
                    icon: SiPython
                },
                {
                    name: "Flask",
                    icon: SiFlask
                },
                {
                    name: "TensorFlow",
                    icon: SiTensorflow
                },
                {
                    name: "OpenCV",
                    icon: SiOpencv
                },
                {
                    name: "Google Colab",
                    icon: SiGooglecolab
                },
                {
                    name: "AWS",
                    icon: SiAmazonaws
                },
                {
                    name: "MySQL",
                    icon: DiMysql
                },
                {
                    name: "GitHub",
                    icon: SiGithub
                }
            ],
            shortDescription: <Trans t={t} i18nKey="isaac.short-description" />,
            description: <Trans i18nKey="isaac.description" ns="projects" components={{ h3: <h3 className="fw-bold" />, p: <p /> }} />,
            images: [
                IsaacBanner
            ],
            links: [
                {
                    icon: BiGlobe,
                    title: <Trans t={t} i18nKey="isaac.links.news" />,
                    text: "so.ucr.ac.cr",
                    url: "https://www.so.ucr.ac.cr/es/noticia/estudiantes-de-ingenieria-industrial-resultaron-ganadores-del-programa-de-innovacion"
                },
                {
                    icon: SiYoutube,
                    title: <Trans t={t} i18nKey="isaac.links.video" />,
                    text: "ISAAC - Video",
                    url: "https://www.youtube.com/watch?v=_Bfynmz3pck"
                }
            ]
        },
        {
            title: "Cenfoteco Kingdoms",
            subtitle: <Trans t={t} i18nKey="cenfoteco.subtitle" />,
            icon: "",
            year: "2023",
            stack: [
                {
                    name: "Java",
                    icon: FaJava
                },
                {
                    name: "GitHub",
                    icon: SiGithub
                }
            ],
            shortDescription: <Trans t={t} i18nKey="cenfoteco.short-description" />,
            description: <Trans i18nKey="cenfoteco.description" ns="projects" components={{ h3: <h3 className="fw-bold" />, p: <p /> }} />,
            images: [
                CenfotecoKingdomsBanner
            ],
            links: []
        },
        {
            title: "Horus",
            subtitle: <Trans t={t} i18nKey="horus.subtitle" />,
            icon: "",
            year: "2022",
            stack: [
                {
                    name: "Python",
                    icon: SiPython
                },
                {
                    name: "Flask",
                    icon: SiFlask
                },
                {
                    name: "YOLO",
                    icon: SiYolo
                },
                {
                    name: "OpenCV",
                    icon: SiOpencv
                },
                {
                    name: "Google Colab",
                    icon: SiGooglecolab
                },
                {
                    name: "GitHub",
                    icon: SiGithub
                }
            ],
            shortDescription: <Trans t={t} i18nKey="horus.short-description" />,
            description: <Trans i18nKey="horus.description" ns="projects" components={{ h3: <h3 className="fw-bold" />, p: <p /> }} />,
            images: [
                HorusBanner
            ],
            links: []
        },
        {
            title: "MobyDyg",
            subtitle: <Trans t={t} i18nKey="mobydyg-1.subtitle" />,
            icon: "",
            year: "2022",
            stack: [
                {
                    name: "Angular",
                    icon: SiAngular
                },
                {
                    name: "TypeScript",
                    icon: SiTypescript
                },
                {
                    name: "AWS",
                    icon: SiAmazonaws
                },
                {
                    name: "MySQL",
                    icon: DiMysql
                },
                {
                    name: "GitHub",
                    icon: SiGithub
                },
                {
                    name: "Figma",
                    icon: SiFigma
                }
            ],
            shortDescription: <Trans t={t} i18nKey="mobydyg-1.short-description" />,
            description: <Trans i18nKey="mobydyg-1.description" ns="projects" components={{ h3: <h3 className="fw-bold" />, p: <p /> }} />,
            images: [
                MobyDygBanner,
                MobyDyg1,
                MobyDyg2,
                MobyDyg3,
                MobyDyg4,
                MobyDyg5
            ],
            links: []
        },
        {
            title: "MobyDyg",
            subtitle: <Trans t={t} i18nKey="mobydyg-2.subtitle" />,
            icon: "",
            year: "2022",
            stack: [
                {
                    name: "MySQL",
                    icon: DiMysql
                },
                {
                    name: "Draw.io",
                    icon: SiDiagramsdotnet
                },
                {
                    name: "AWS",
                    icon: SiAmazonaws
                },
                {
                    name: "GitHub",
                    icon: SiGithub
                }
            ],
            shortDescription: <Trans t={t} i18nKey="mobydyg-2.short-description" />,
            description: <Trans i18nKey="mobydyg-2.description" ns="projects" components={{ h3: <h3 className="fw-bold" />, p: <p /> }} />,
            images: [
                MobyDygBanner
            ],
            links: []
        },
        {
            title: "Contents Brand Book",
            subtitle: <Trans t={t} i18nKey="brand-book.subtitle" />,
            icon: "",
            year: "2022",
            stack: [
                {
                    name: "Figma",
                    icon: SiFigma
                },
                {
                    name: "Adobe Illustrator",
                    icon: SiAdobeillustrator
                }
            ],
            shortDescription: <Trans t={t} i18nKey="brand-book.short-description" />,
            description: <Trans i18nKey="brand-book.description" ns="projects" components={{ h3: <h3 className="fw-bold" />, p: <p /> }} />,
            images: [
                ContentsBrandBookBanner
            ],
            links: [
                {
                    icon: FaRegFilePdf,
                    title: <Trans t={t} i18nKey="brand-book.links.download" />,
                    text: "Contents Brand Book.pdf",
                    url: BrandBook
                }
            ]
        },
        {
            title: "Crafting To Do's",
            subtitle: <Trans t={t} i18nKey="crafting-to-dos.subtitle" />,
            icon: "",
            year: "2022",
            stack: [
                {
                    name: "React",
                    icon: SiReact
                },
                {
                    name: "JavaScript",
                    icon: SiJavascript
                },
                {
                    name: "GitHub",
                    icon: SiGithub
                }
            ],
            shortDescription: <Trans t={t} i18nKey="crafting-to-dos.short-description" />,
            description: <Trans i18nKey="crafting-to-dos.description" ns="projects" components={{ h3: <h3 className="fw-bold" />, p: <p /> }} />,
            images: [
                CrafToDosBanner,
                CrafToDos1
            ],
            links: [
                {
                    icon: BiGlobe,
                    title: <Trans t={t} i18nKey="crafting-to-dos.links.live" />,
                    text: "saturnxs.github.io/Crafting-ToDos",
                    url: "https://saturnxs.github.io/Crafting-ToDos/"
                },
                {
                    icon: SiGithub,
                    title: <Trans t={t} i18nKey="crafting-to-dos.links.github" />,
                    text: "github.com/Saturnxs/Crafting-ToDos",
                    url: "https://github.com/Saturnxs/Crafting-ToDos"
                }
            ]
        },
        {
            title: "Tournament App System",
            subtitle: <Trans t={t} i18nKey="tournament-app.subtitle" />,
            icon: "",
            year: "2021",
            stack: [
                {
                    name: "React",
                    icon: SiReact
                },
                {
                    name: "JavaScript",
                    icon: SiJavascript
                },
                {
                    name: "C#",
                    icon: SiCsharp
                },
                {
                    name: "Microsoft SQL Server",
                    icon: DiMsqlServer
                },
                {
                    name: "Figma",
                    icon: SiFigma
                }
            ],
            shortDescription: <Trans t={t} i18nKey="tournament-app.short-description" />,
            description: <Trans i18nKey="tournament-app.description" ns="projects" components={{ h3: <h3 className="fw-bold" />, p: <p /> }} />,
            images: [
                FederacionCostarricenseDeTaekwondoBanner,
                FederacionCostarricenseDeTaekwondo1,
                FederacionCostarricenseDeTaekwondo2
            ],
            links: []
        },
        {
            title: "Atlas",
            subtitle: <Trans t={t} i18nKey="atlas.subtitle" />,
            icon: "",
            year: "2021",
            stack: [
                {
                    name: "React",
                    icon: SiReact
                },
                {
                    name: "JavaScript",
                    icon: SiJavascript
                },
                {
                    name: "Node.js",
                    icon: SiNodedotjs
                },
                {
                    name: "Express",
                    icon: SiExpress
                },
                {
                    name: "Microsoft SQL Server",
                    icon: DiMsqlServer
                },
                {
                    name: "Adobe Illustrator",
                    icon: SiAdobeillustrator
                },
                {
                    name: "Figma",
                    icon: SiFigma
                }
            ],
            shortDescription: <Trans t={t} i18nKey="atlas.short-description" />,
            description: <Trans i18nKey="atlas.description" ns="projects" components={{ h3: <h3 className="fw-bold" />, p: <p /> }} />,
            images: [
                AtlasBanner,
                AtlasVideo
            ],
            links: [
                {
                    icon: FaRegFilePdf,
                    title: <Trans t={t} i18nKey="atlas.links.docs" />,
                    text: "Atlas - Documentación.pdf",
                    url: AtlasDoc
                }
            ]
        },
        {
            title: "Initial Journey 2021",
            subtitle: <Trans t={t} i18nKey="skem-club.subtitle" />,
            icon: "",
            year: "2021",
            stack: [],
            shortDescription: <Trans t={t} i18nKey="skem-club.short-description" />,
            description: <Trans i18nKey="skem-club.description" ns="projects" components={{ h3: <h3 className="fw-bold" />, p: <p />, ul: <ul />, li: <li /> }} />,
            images: [
                SkemClubBanner,
                SkemClub1,
                SkemClub2,
                SkemClub3,
                SkemClub4
            ],
            links: []
        },
        {
            title: "Wonder",
            subtitle: <Trans t={t} i18nKey="wonder.subtitle" />,
            icon: "",
            year: "2019",
            stack: [
                {
                    name: "HTML5",
                    icon: SiHtml5
                },
                {
                    name: "CSS3",
                    icon: SiCss3
                },
                {
                    name: "JavaScript",
                    icon: SiJavascript
                },
                {
                    name: "Adobe Illustrator",
                    icon: SiAdobeillustrator
                },
                {
                    name: "Adobe Premiere",
                    icon: SiAdobepremierepro
                }
            ],
            shortDescription: <Trans t={t} i18nKey="wonder.short-description" />,
            description: <Trans i18nKey="wonder.description" ns="projects" components={{ h3: <h3 className="fw-bold" />, p: <p />, ul: <ul />, li: <li /> }} />,
            images: [
                WonderBanner,
                WondeVideo,
                Wonder1,
                Wonder2,
                Wonder3,
                Wonder4,
                Wonder5,
                Wonder6,
                Wonder7
            ],
            links: [
                {
                    icon: FaBookAtlas,
                    title: <Trans t={t} i18nKey="wonder.links.docs" />,
                    text: "Wonder - Documentación.pdf",
                    url: "https://www.calameo.com/books/0060693746d1ded536ca7/"
                },
                {
                    icon: SiInstagram,
                    title: <Trans t={t} i18nKey="wonder.links.instagram" />,
                    text: "_wonder.r",
                    url: "https://www.instagram.com/_wonder.r/"
                }
            ]
        },
    ];
};

export default ProjectsList;


