import IProject from "../interfaces/IProject";
import { DiMysql, DiMsqlServer } from "react-icons/di";
import { SiJavascript, SiReact, SiGithub, SiNodedotjs, SiExpress, SiAdobeillustrator, SiAdobepremierepro, SiDiagramsdotnet, SiFigma, SiHtml5, SiCss3, SiInstagram, SiPython, SiAmazonaws, SiGooglecolab, SiOpencv, SiTensorflow, SiYolo, SiCsharp, SiAngular, SiTypescript, SiFlask } from "react-icons/si";
import { FaRegFilePdf, FaJava } from "react-icons/fa";
import { BiGlobe } from "react-icons/bi";
import { useTranslation } from "react-i18next";

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

const ProjectsList: () => IProject[] = () => {
    const { t } = useTranslation("projects");

    return [
        {
            title: "ISAAC",
            subtitle: t("isaac.subtitle"),
            banner: IsaacBanner,
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
            images: [],
            links: []
        },
        {
            title: "Cenfoteco Kingdoms",
            subtitle: t("cenfoteco.subtitle"),
            banner: CenfotecoKingdomsBanner,
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
            images: [],
            links: []
        },
        {
            title: "Horus",
            subtitle: t("horus.subtitle"),
            banner: HorusBanner,
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
            images: [],
            links: []
        },
        {
            title: "MobyDyg",
            subtitle: t("mobydyg-1.subtitle"),
            banner: MobyDygBanner,
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
            images: [],
            links: []
        },
        {
            title: "MobyDyg",
            subtitle: t("mobydyg-2.subtitle"),
            banner: MobyDygBanner,
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
            images: [],
            links: []
        },
        {
            title: "Contents Brand Book",
            subtitle: t("brand-book.subtitle"),
            banner: ContentsBrandBookBanner,
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
            images: [],
            links: []
        },
        {
            title: "Crafting To Do's",
            subtitle: t("crafting-to-dos.subtitle"),
            banner: CrafToDosBanner,
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
            images: [],
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
            banner: FederacionCostarricenseDeTaekwondoBanner,
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
            images: [],
            links: []
        },
        {
            title: "Atlas",
            subtitle: t("atlas.subtitle"),
            banner: AtlasBanner,
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
            images: [],
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
            banner: SkemClubBanner,
            icon: "",
            year: "2021",
            stack: [],
            shortDescription: t("skem-club.short-description"),
            description: (<></>),
            images: [],
            links: []
        },
        {
            title: "Wonder",
            subtitle: t("wonder.subtitle"),
            banner: WonderBanner,
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
            description: (
                <>
                    <h2 className="subtitle">About.</h2>
                    <p className="body-text">Winning project at the Expotec: Science, Engineering and Art fair 2019. Wonder was a video game and a webpage with the goal of educating children about social, global and environmental problems. It’s teachings are part of the Sustainable Development Goals promoted by the United Nations (UN).
                        <br />As group project I contributed mainly to the webpage and also the art material for promoting the game in social media and the high school buildings.</p>
                    <h2 className="subtitle">Awards.</h2>
                    <ul>
                        <li>Second place in Software Development at Don Bosco Professional Technical High School.</li>
                        <li>Winner of the best project in the art category at Don Bosco Professional Technical High School.</li>
                        <li>Special recognition in software development.</li>
                        <li>Recognition of Isthmus of Costa Rica for a proposal to solve current problems such as global warming.</li>
                    </ul>
                </>
            ),
            images: [],
            links: [
                {
                    icon: FaRegFilePdf,
                    title: "Download the documentation here!",
                    text: "Wonder - Documentation.pdf",
                    url: "static/download/Wonder - Documentation.pdf" // TODO: Add the file to the project
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


