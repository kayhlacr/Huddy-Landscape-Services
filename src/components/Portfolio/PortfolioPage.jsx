import { useState } from "react";
import jobsData from "./data.json";
import PlusIcon from "../../assets/PlusIcon.png";
import "./PortfolioPage.css";

export default function PortfolioPage() {
  const [expandedProjectId, setExpandedProjectId] = useState(null);

  const toggleExpand = (projectId) => {
    setExpandedProjectId(projectId === expandedProjectId ? null : projectId);
  };

  return (
    <div className="page-container">
      {jobsData.jobs.map((job) => (
        <div key={job.id}>
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
              src={PlusIcon}
              alt="Expand"
              onClick={() => toggleExpand(job.id)}
            />
          </div>
          {expandedProjectId !== job.id && (
            <img className="project-image" src={job.main_img} alt={job.name} />
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
