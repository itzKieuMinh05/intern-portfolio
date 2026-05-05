
/**
 * Components
 */

import SkillCard from "./skillcard.jsx";

const skillItem = [
  {
    imgSrc: './src/favicon/cpp.jpg',
    label: 'C++',
    desc: 'Programming Language'
  },
  {
    imgSrc: './src/favicon/html.png',
    label: 'HTML',
    desc: 'Markup Language'
  },
  {
    imgSrc: './src/favicon/js.png',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: './src/favicon/python.png',
    label: 'Python',
    desc: 'Programming Language'
  },
  {
    imgSrc: './src/favicon/sqlserver2.jpg',
    label: 'SQL Server',
    desc: 'Database Management System'
  },
  {
    imgSrc: '/src/favicon/react.jpg',
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: './src/favicon/springboot.png',
    label: 'Spring Boot',
    desc: 'Framework'
  },
  {
    imgSrc: '/src/favicon/tailwind.png',
    label: 'TailwindCSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/src/favicon/kafka.png',
    label: 'Apache Kafka',
    desc: 'Distributed streaming platform'
  },
  {
    imgSrc: '/src/favicon/spark.png',
    label: 'Apache Spark',
    desc: 'Big data processing engine'
  },
  {
    imgSrc: '/src/favicon/airflow.png',
    label: 'Apache Airflow',
    desc: 'Workflow orchestration'
  },
  {
    imgSrc: '/src/favicon/docker.png',
    label: 'Docker',
    desc: 'Containerization'
  },
  {
    imgSrc: '/src/favicon/dbt.png',
    label: 'dbt',
    desc: 'Analytics engineering / transformations'
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