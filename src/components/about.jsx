
const aboutItems = [
  {
    label: 'Project done',
    number: 9
  },
  {
    label: 'Years of experience',
    number: 0o0
  }
];

const About = () =>{
    return (
        <section
            id="about"
            className="section"
        >
            <div className="container">
                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
                    <p className="text-left text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                        I am a data student passionate about building reliable data systems and optimizing data workflows. I enjoy solving challenges in data processing and ensuring data quality for analytics and AI applications. My goal is to become a proficient data engineer with expertise in big data, cloud technologies, and scalable data solutions.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        {
                            aboutItems.map(({label, number}, key) =>(
                                <div key={key}>
                                    <div className="flex items-center md:mb-2">
                                        <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                        <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                                    </div>
                                    <p className="text-sm text-zinc-400">{label}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;