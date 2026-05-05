const educationHighlights = [
  'Excellent Student 3 consecultive semesters',
];

const languages = [
  {
    name: 'English',
    level: 'Intermediate',
    detail: 'IELTS 6.0',
  },
  {
    name: 'French',
    level: 'Intermediate',
    detail: 'DELF B1',
  },
  {
    name: 'German',
    level: 'Beginner',
    detail: 'A2',
  },
];

const coursework = [
  'Data Structures & Algorithms',
  'Database Systems',
  'Big Data Analytics & Business Intelligence',
  'Mathematical Modeling',
  'Advanced Programming',
];

const Education = () => {
  return (
    <section id="education" className="section scroll-mt-24">
        <div className="container">
        <div className="mb-8 text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-sky-400 mb-2">
            Education
            </p>
            <h2 className="headline-2">
            Academic background
            </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-3xl border border-zinc-50/10 bg-zinc-800/50 p-6 md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-zinc-400 text-sm mb-2">Ho Chi Minh University of Technology (VNU - HCMUT)</p>
                <h3 className="title-1 font-semibold text-zinc-50 mb-2">Bachelor of Computer Science</h3>
                <p className="text-zinc-400">2023 – Present</p>
              </div>

              <div className="rounded-2xl bg-zinc-950/40 px-4 py-3 ring-1 ring-inset ring-zinc-50/5 min-w-fit">
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 mb-1">GPA</p>
                <p className="text-2xl font-semibold text-sky-400">3.4/4.0</p>
                <p className="text-sm text-zinc-400">8.05/10</p>
              </div>
            </div>

            <div className="mt-6">
            <div className="rounded-2xl bg-zinc-950/30 p-4 ring-1 ring-inset ring-zinc-50/5">
                
                <h4 className="text-sm font-semibold text-zinc-50 mb-3">Achievements</h4>
                <ul className="space-y-2 text-zinc-400 text-sm mb-4">
                {educationHighlights.map((item) => (
                    <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400 shrink-0" />
                    <span>{item}</span>
                    </li>
                ))}
                </ul>

                <h4 className="text-sm font-semibold text-zinc-50 mb-3">Relevant coursework</h4>
                <ul className="space-y-2 text-zinc-400 text-sm">
                {coursework.map((item) => (
                    <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400 shrink-0" />
                    <span>{item}</span>
                    </li>
                ))}
                </ul>

            </div>
            </div>
          </div>

            <div className="rounded-3xl border border-zinc-50/10 bg-zinc-800/50 p-6 md:p-8">
            <h3 className="title-1 font-semibold text-zinc-50 mb-4">Language</h3>
            <div className="space-y-3">
                {languages.map((language) => (
                <div
                    key={language.name}
                    className="min-h-24 rounded-2xl bg-zinc-950/30 px-4 py-4 ring-1 ring-inset ring-zinc-50/5 flex items-center"
                >
                    <div className="flex w-full items-center justify-between">
                    
                    {/* LEFT: Language */}
                    <p className="font-medium text-zinc-50">
                        {language.name}
                    </p>

                    {/* RIGHT: Level + detail */}
                    <div className="text-right">
                        <p className="text-sm text-zinc-400">
                        {language.level}
                        </p>
                        <p className="text-sm text-sky-400 font-medium">
                        {language.detail}
                        </p>
                    </div>

                    </div>
                </div>
                ))}
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Education;