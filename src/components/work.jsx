
/**
 * Components
 */

import ProjectCard from "./projectcard.jsx";


const works = [
  {
    title: 'Weather Forecasting System',
    tags: ['Machine Learning', 'Big Data', 'Analytics'],
    projectLink: 'https://github.com/itzKieuMinh05/CO4033-Weather-forecast',
    repoName: 'CO4033-Weather-forecast'
  },
  {
    title: 'Sales Analytics & Data Warehouse',
    tags: ['Data Warehouse', 'Analytics', 'Visualization'],
    projectLink: 'https://github.com/itzKieuMinh05/Sales-analytics',
    repoName: 'Sales-analytics'
  },
  {
    title: 'Chatting Platform',
    tags: ['Python', 'Networking', 'Communication'],
    projectLink: 'https://github.com/itzKieuMinh05/CO3094-ComputerNetwork-Assignment01',
    repoName: 'CO3094-ComputerNetwork-Assignment01'
  },
  {
    title: 'ITworks - Recruitment Website',
    tags: ['Java', 'Web Application'],
    projectLink: 'https://github.com/itzKieuMinh05/KieuMinh',
    repoName: 'KieuMinh'
  },
  {
    title: 'Data Mining Project',
    tags: ['Data Mining', 'Python', 'Analytics'],
    projectLink: 'https://github.com/itzKieuMinh05/CO3029-Weather_forecasting',
    repoName: 'CO3029-Weather_forecasting'
  },
  {
    title: 'Audio Event Detection',
    tags: ['Machine Learning', 'Audio Processing', 'Deep Learning'],
    projectLink: 'https://github.com/itzKieuMinh05/audio_event_detection',
    repoName: 'audio_event_detection'
  },
  {
    title: 'B-Data Platform',
    tags: ['Docker', 'Spark', 'Kafka', 'Data Pipeline'],
    projectLink: 'https://github.com/itzKieuMinh05/b-data-platform',
    repoName: 'b-data-platform'
  },
  {
    title: 'HCSDL Database Frontend',
    tags: ['JavaScript', 'Frontend', 'Database'],
    projectLink: 'https://github.com/itzKieuMinh05/HCSDL_BTL2_FE',
    repoName: 'HCSDL_BTL2_FE'
  },
  {
    title: 'Travelling Data Project',
    tags: ['Python', 'Data Analysis', 'Analytics'],
    projectLink: 'https://github.com/itzKieuMinh05/Travelling',
    repoName: 'Travelling'
  },
];

const Work = () =>{
    return(
        <section 
            id="work"
            className="section"
        >
        <div className="container">
            <h2 className="headline-2">
                My Work
            </h2>

            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({title, tags, projectLink, repoName}, key) => (
                    <ProjectCard 
                    key={key}
                    title={title}
                    tags={tags}
                    projectLink={projectLink}
                    repoName={repoName}
                    />
                ))}
            </div>

        </div>
        </section>
    )
}
export default Work;