import { useState, useRef } from "react";
import jobsData from "./data.json";
import PlusIcon from "../../assets/PlusIcon.png";
import MinusIcon from "../../assets/MinusIcon.png";
import "./PortfolioPage.css";

export default function PortfolioPage() {
  const [expandedProjectId, setExpandedProjectId] = useState(null);
  const jobRefs = useRef([]);

  const toggleExpand = (projectId, index) => {
    if (projectId === expandedProjectId) {
      setExpandedProjectId(null);
    } else {
      setExpandedProjectId(projectId);
      setTimeout(() => {
        jobRefs.current[index].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        window.scrollBy(0, -60);
      }, 0);
    }
  };

  return (
    <div className="page-container">
      {jobsData.jobs.map((job, index) => (
        <div key={job.id} ref={(el) => (jobRefs.current[index] = el)}>
          <div className="header">
            <h2 className="job-name">
              {job.id === 2 ? (
                <div>
                  {job.name.split("\n").map((part, index) => (
                    <div key={index}>
                      {part}
                      <br />
                    </div>
                  ))}
                </div>
              ) : (
                <div>{job.name}</div>
              )}
            </h2>
            <img
              className="plus-icon"
              src={expandedProjectId === job.id ? MinusIcon : PlusIcon}
              alt="Expand"
              onClick={() => toggleExpand(job.id, index)}
            />
          </div>

          {expandedProjectId !== job.id && (
            <div className="main-img">
              <img
                className="project-image"
                src={job.main_img}
                alt={job.name}
              />{" "}
            </div>
          )}

          {expandedProjectId === job.id && (
            <div>
              <h3 className="more-details">More Details:</h3>
              <p className="details-p">{job.details}</p>
              <div className="gallery-container">
                {job.gallery.map((image, index) => (
                  <img
                    key={index}
                    className="gallery-image"
                    src={image}
                    alt={`${job.name} Gallery Image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
