import WorkCard from "./WorkCard";
import workExperience from "./../data/workExperience"


function WorkExperience () {
    return (
        <div className="work-experience">
            <h2 className="mb-4"> Work Experience </h2>
            {workExperience.map((job, index) => (
                <WorkCard key={index} {...job} />
            ))}
        </div>
    );
}

export default WorkExperience;


