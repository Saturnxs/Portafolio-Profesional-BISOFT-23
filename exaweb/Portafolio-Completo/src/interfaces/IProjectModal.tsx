import { IconType } from "react-icons/lib";

interface IProjectModal {
    title: string;
    subtitle: string | JSX.Element;
    year: string;
    stack: { name: string, icon: IconType }[];
    description: JSX.Element;
    images?: string[];
    links?: {
        title: string | JSX.Element,
        text: string,
        url: string,
        icon: IconType
    }[];
    onClose: () => void;
}

export default IProjectModal;