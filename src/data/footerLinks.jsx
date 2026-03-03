// footerLinks.js
import { FaLinkedin, FaEnvelope, FaFileAlt, FaGithub } from "react-icons/fa";
import resume from "./IsaCantareroResume.pdf"

const footerLinks = [
  { id: 1, icon: FaLinkedin, url: "https://www.linkedin.com/in/isacantarero/" },
  { id: 2, icon: FaEnvelope, url: "mailto:isacantarerom@gmail.com" },
  { id: 3, icon: FaFileAlt, url: resume, downloadName: "IsaCantareroResume",  download: true },
  {id: 4, icon: FaGithub, url: "https://github.com/isacantarerom"}
];

export default footerLinks;
