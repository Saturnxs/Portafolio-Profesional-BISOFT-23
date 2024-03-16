import { IconType } from "react-icons";

interface IProject {
    title: string;
    subtitle: string;
    icon: string;
    year: string;
    stack: {
        name: string;
        icon: IconType;
    }[];
    shortDescription: string;
    description: JSX.Element;
    images: string[];
    links?: {
        icon: IconType;
        title: string;
        text: string;
        url: string;
    }[];
}

export default IProject;