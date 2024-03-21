import { IconType } from "react-icons";

interface ILinkBookmark {
    icon: IconType;
    title: string | JSX.Element;
    url: string;
    urlTitle: string | JSX.Element;
}

export default ILinkBookmark;