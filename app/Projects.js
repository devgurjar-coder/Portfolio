import React from 'react';
import './Projects.css'; // Import the updated CSS file

const ProjectSection = () => {
  return (
    <div id='projects' className="project-section">
      <h2>Discover My Works</h2>
      <div className="video-column">
        <div className="video-wrapper">
        <iframe title="vimeo-player" src="https://player.vimeo.com/video/949890964?h=500dbe58c9" width="640" height="360" frameborder="0"    allowfullscreen></iframe>
        </div>
        <div className="video-wrapper">
        <iframe title="vimeo-player" src="https://player.vimeo.com/video/948988841?h=bc130069c5" width="640" height="360" frameborder="0"    allowfullscreen></iframe>
        </div>
        <div className="video-wrapper">
        <iframe title="vimeo-player" src="https://player.vimeo.com/video/949892253?h=01650cf4b0" width="640" height="360" frameborder="0"    allowfullscreen></iframe>
        </div>
        <div className="video-wrapper">
          <iframe
            src="https://player.vimeo.com/video/936230582?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            title="Akshay on Goku and Discipline in His Life"
          ></iframe>
        </div>
        <div className="video-wrapper">
          <iframe
            src="https://player.vimeo.com/video/936241813?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            title="Samurai Death and Discipline"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
