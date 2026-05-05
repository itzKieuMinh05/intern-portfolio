
/**
 * Components
 */

import SkillCard from "./skillcard.jsx";

const skillItem = [
  {
    imgSrc: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg',
    label: 'C++',
    desc: 'Programming Language'
  },
  {
    imgSrc: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
    label: 'HTML',
    desc: 'Markup Language'
  },
  {
    imgSrc: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
    label: 'Python',
    desc: 'Programming Language'
  },
  {
    imgSrc: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftsqlserver.svg',
    label: 'SQL Server',
    desc: 'Database Management System'
  },
  {
    imgSrc: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg',
    label: 'Spring Boot',
    desc: 'Framework'
  },
  {
    imgSrc: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg',
    label: 'TailwindCSS',
    desc: 'User Interface'
  },
  {
    imgSrc: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/apachekafka.svg',
    label: 'Apache Kafka',
    desc: 'Distributed streaming platform'
  },
  {
    imgSrc: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/apachespark.svg',
    label: 'Apache Spark',
    desc: 'Big data processing engine'
  },
  {
    imgSrc: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/apacheairflow.svg',
    label: 'Apache Airflow',
    desc: 'Workflow orchestration'
  },
  {
    imgSrc: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg',
    label: 'Docker',
    desc: 'Containerization'
  },
  {
    imgSrc: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/dbt.svg',
    label: 'dbt',
    desc: 'Analytics engineering / transformations'
  },
  {
    imgSrc: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/powerbi.svg',
    label: 'Power BI',
    desc: 'Business intelligence & analytics'
  },
  {
    imgSrc: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/grafana.svg',
    label: 'Grafana',
    desc: 'Monitoring & visualization'
  },
  {
    imgSrc: 'https://raw.githubusercontent.com/username/repo/main/superset.svg',
    label: 'Apache Superset',
    desc: 'Data visualization & BI'
  }
];


const Skill = () => {
    return (
        <section className="section">
            <div className="container">

                <h2 className="headline-2">
                    Essential Tools I use
                </h2>

                <p className="text-left text-zinc-400 mt-3 mb-8 max-w-[50ch]">
                    Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
                </p>

                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {
                        skillItem.map(({imgSrc, label, desc}, key) =>
                        (
                            <SkillCard 
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                            key={key}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Skill;