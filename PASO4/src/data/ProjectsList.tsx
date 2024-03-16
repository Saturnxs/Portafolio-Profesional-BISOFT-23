import IProject from "../interfaces/IProject";
import { DiMysql, DiMsqlServer } from "react-icons/di";
import { SiJavascript, SiReact, SiGithub, SiNodedotjs, SiExpress, SiAdobeillustrator, SiAdobepremierepro, SiDiagramsdotnet, SiFigma, SiHtml5, SiCss3, SiInstagram, SiPython, SiAmazonaws, SiGooglecolab, SiOpencv, SiTensorflow, SiYolo, SiCsharp, SiAngular, SiTypescript, SiFlask } from "react-icons/si";
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

// Crafting To Do's
import CrafToDosBanner from "../assets/projects/crafting-to-dos/banner.jpg";

// Contents Brand Book
import ContentsBrandBookBanner from "../assets/projects/content-brand-book/banner.jpg";

// Federacion Costarricense de Taekwondo
import FederacionCostarricenseDeTaekwondoBanner from "../assets/projects/tournament-app/banner.jpg";

// Atlas
import AtlasBanner from "../assets/projects/atlas/banner.jpg";

// SkemClub
import SkemClubBanner from "../assets/projects/skemclub/banner.jpg";

// Wonder
import WonderBanner from "../assets/projects/wonder/banner.jpg";
import Wonder1 from "../assets/projects/wonder/1.jpg";
import Wonder2 from "../assets/projects/wonder/2.jpg";
import Wonder3 from "../assets/projects/wonder/3.jpg";
import Wonder4 from "../assets/projects/wonder/4.jpg";
import Wonder5 from "../assets/projects/wonder/5.jpg";
import Wonder6 from "../assets/projects/wonder/6.jpg";
import Wonder7 from "../assets/projects/wonder/7.jpg";

const ProjectsList: () => IProject[] = () => {
    const { t } = useTranslation("projects");

    return [
        {
            title: "ISAAC",
            subtitle: t("isaac.subtitle"),
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
            shortDescription: t("isaac.short-description"),
            description: (
                <>
                </>
            ),
            images: [
                IsaacBanner
            ],
            links: []
        },
        {
            title: "Cenfoteco Kingdoms",
            subtitle: t("cenfoteco.subtitle"),
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
            shortDescription: t("cenfoteco.short-description"),
            description: (
                <>
                </>
            ),
            images: [
                CenfotecoKingdomsBanner
            ],
            links: []
        },
        {
            title: "Horus",
            subtitle: t("horus.subtitle"),
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
            shortDescription: t("horus.short-description"),
            description: (
                <>
                </>
            ),
            images: [
                HorusBanner
            ],
            links: []
        },
        {
            title: "MobyDyg",
            subtitle: t("mobydyg-1.subtitle"),
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
            shortDescription: t("mobydyg-1.short-description"),
            description: (
                <></>
            ),
            images: [
                MobyDygBanner
            ],
            links: []
        },
        {
            title: "MobyDyg",
            subtitle: t("mobydyg-2.subtitle"),
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
            shortDescription: t("mobydyg-2.short-description"),
            description: (
                <></>
            ),
            images: [
                MobyDygBanner
            ],
            links: []
        },
        {
            title: "Contents Brand Book",
            subtitle: t("brand-book.subtitle"),
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
            shortDescription: t("brand-book.short-description"),
            description: (<></>),
            images: [
                ContentsBrandBookBanner
            ],
            links: []
        },
        {
            title: "Crafting To Do's",
            subtitle: t("crafting-to-dos.subtitle"),
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
            shortDescription: t("crafting-to-dos.short-description"),
            description: (
                <>
                    <h2 className="subtitle">About.</h2>
                    <p className="body-text">Crafting To Do's is an app created with React and JavaScript (JSX) that allows you to have your tasks organized. It’s a front end app, using local storage for the to-dos. Design based in my Personal Brand Book. Check it out!</p>
                </>
            ),
            images: [
                CrafToDosBanner
            ],
            links: [
                {
                    icon: BiGlobe,
                    title: "Click here to test it live!",
                    text: "saturnxs.github.io/Crafting-ToDos",
                    url: "https://saturnxs.github.io/Crafting-ToDos/"
                },
                {
                    icon: SiGithub,
                    title: "Check out the repository on GitHub!",
                    text: "github.com/Saturnxs/Crafting-ToDos",
                    url: "https://github.com/Saturnxs/Crafting-ToDos"
                }
            ]
        },
        {
            title: "Tournament App System",
            subtitle: t("tournament-app.subtitle"),
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
            shortDescription: t("tournament-app.short-description"),
            description: (
                <>
                    <h2 className="subtitle">About.</h2>
                    <p className="body-text">A web app for the Costa Rican Taekwondo Federation to manage their tournaments. It was developed with React and Node.js, using Microsoft SQL Server as the database. The app was designed with Figma and Adobe Illustrator.</p>
                </>
            ),
            images: [
                FederacionCostarricenseDeTaekwondoBanner
            ],
            links: []
        },
        {
            title: "Atlas",
            subtitle: t("atlas.subtitle"),
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
            shortDescription: t("atlas.short-description"),
            description: (
                <>
                    <h2 className="subtitle">About.</h2>
                    <p className="body-text">First application ever done with React as part of a graduation project. Atlas was a web app that allowed professionals to track workaholics while remote working during COVID-19 lockdown.</p>
                </>
            ),
            images: [
                AtlasBanner
            ],
            links: [
                {
                    icon: FaRegFilePdf,
                    title: "Click here to read full documentation!",
                    text: "Atlas - Documentación.pdf",
                    url: "static/doc/Atlas - Documentación.pdf" // TODO: Add the file to the project
                }
            ]
        },
        {
            title: "Initial Journey 2021",
            subtitle: t("skem-club.subtitle"),
            icon: "",
            year: "2021",
            stack: [],
            shortDescription: t("skem-club.short-description"),
            description: (<></>),
            images: [
                SkemClubBanner
            ],
            links: []
        },
        {
            title: "Wonder",
            subtitle: t("wonder.subtitle"),
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
            shortDescription: t("wonder.short-description"),
            description: <Trans i18nKey="wonder.description" ns="projects" components={{ h3: <h3 className="fw-bold" />, p: <p />, ul: <ul />, li: <li /> }} />,
            images: [
                WonderBanner,
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
                    title: "Read the documentation online!",
                    text: "Wonder - Documentación.pdf",
                    url: "https://www.calameo.com/books/0060693746d1ded536ca7/"
                },
                {
                    icon: SiInstagram,
                    title: "Read more about the project on Instagram!",
                    text: "_wonder.r",
                    url: "https://www.instagram.com/_wonder.r/"
                }
            ]
        },
    ];
};

export default ProjectsList;


