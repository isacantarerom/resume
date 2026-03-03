import ms from "./../images/MicrosoftLogo.png"
import qu from "./../images/QCOM.png"
import or from "./../images/oracleLogo.png"

const workExperience = [
  {
    title: "Software Engineer",
    company: "Qualcomm",
    dates: "April 2023 – September 2024",
    logo : qu,
    highlights: [
      "Contributed to Qualcomm's first in-house XR System Shell, the foundational software layer powering all Qualcomm Snapdragon-based XR headsets (including Lenovo enterprise devices). Previously, Qualcomm relied on external partners for this layer; this was built entirely in-house from the ground up.",
      "Co-engineered the boundary detection and safety system, the product's primary user-safety feature at launch, implementing real-time spatial awareness panels with dynamic edge indicators using HLSL and C#. Delivered as a two-person effort with no prior in-house precedent to reference.",
      "Extended StereoKit (the open-source engine powering the Shell) by directly modifying its C++ source to expose capabilities the product required but the engine didn't natively support, such as precision-step sliders and custom component geometries, unlocking new interaction patterns for the team.",
      "Mentored a junior engineer with a non-traditional background through weekly 1:1 sessions covering software engineering fundamentals, including data structures and coding patterns. Supported his growth from needing representation in team meetings to independently owning and presenting his own work."
    ],
    reflection: "I learned to balance urgency with thoughtful execution. The greatest asset is a team that listens to each other and learns together."
  },
  {
    title: "Software Engineer",
    company: "Microsoft",
    dates: "October 2021 – March 2023",
    logo : ms,
    highlights: [
      "Developed core interactive features for Microsoft Mesh using Unity, enabling users to enter an edit mode to design and personalize shared 3D virtual environments: placing, configuring, and syncing objects both in-app and online.",
      "Through deep independent research into an undocumented internal integration process, became the team's go-to resource for connecting features across the shared 3D environment. Other teams were regularly directed to consult with me, arecognition that surfaced organically through cross-team feedback to my manager.",
      "Identified a critical gap in the team's accessibility roadmap: no structured plan, no legal compliance framework. Took initiative to define the problem space by researching regulatory requirements, building user personas, and conducting first-person impairment simulations to surface real usability failures (e.g., screen-reader-style navigation that worked in 2D becamecompletely overwhelming in 3D space).",
      "Implemented rapid prototyping for 3D models in GLTF format, enabling the team to evaluate interaction and performance tradeoffs before committing to final implementations."
    ],
    reflection: "I strengthened my ability to develop for inclusive, user-centered goals and deepened my appreciation for how cross-functional collaboration drives meaningful innovation and transforms user experiences."
  },
  {
    title: "Applications Developer",
    company: "Oracle",
    dates: "January 2018 – October 2021",
    logo : or,
    highlights: [
      "Designed, implemented, and tested components for Oracle Fusion Cloud ERP's Payables application, an enterprise platform used by organizations globally, owning feature implementation across the full frontend lifecycle using Oracle JET, JavaScript, TypeScript, and related frameworks.",
      "Built the team's automated UI testing platform from scratch after inheriting a broken Selenium/Java setup that could only verify component rendering. Redesigned the approach entirely, achieving an estimated ~90% increase in meaningful test coverage by enabling behavioral validation of Oracle JET components for the project.",
      "Developed full-stack features end-to-end, including building REST API endpoints with Spring and the frontend components that consumed them. For example, owned the complete implementation of a configurable min/max monetary settings feature, from server-side endpoint to UI.",
      "Served as Scrum Master across two full teams (9 and 6 members) and onboarded a third team to agile practices. Reduced sprint planning meetings from 2+ hours to 45 minutes and daily standups from 60+ minutes to 15 minutes, eliminating backlog duplication and freeing PMs and UX leads to meet their other commitments."
    ],
    reflection: "This role taught me that the best way to grow both as a professional and as a person is by being part of a team that lifts each other up. I also discovered my passion for being multidisciplinary: saying yes to every challenge without fear, trusting that I’ll figure it out and succeed."
  }
]

export default workExperience;