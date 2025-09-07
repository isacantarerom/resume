// footerLinks.js
import { FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";
import resume from "./IsaCantareroResume.pdf"

const footerLinks = [
  { id: 1, icon: FaLinkedin, url: "https://www.linkedin.com/in/isacantarero/" },
  { id: 2, icon: FaEnvelope, url: "mailto:isacantarerom@gmail.com" },
  { id: 3, icon: FaFileAlt, url: resume, downloadName: "IsaCantareroResume",  download: true }
];

export default footerLinks;
