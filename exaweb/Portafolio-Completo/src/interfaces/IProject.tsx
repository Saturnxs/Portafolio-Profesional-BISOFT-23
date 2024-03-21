import { IconType } from "react-icons";

interface IProject {
    title: string;
    subtitle: string | JSX.Element
    icon: string;
    year: string;
    stack: {
        name: string;
        icon: IconType;
    }[];
    shortDescription: string | JSX.Element
    description: JSX.Element;
    images: string[];
    links?: {
        icon: IconType;
        title: string | JSX.Element;
        text: string;
        url: string;
    }[];
}

export default IProject;