import React from 'react';


const programmingLanguages = [
    "Java",
    "Python",
    "C",
    "C++",
    "HTML",
    "CSS",
    "JavaScript"
  ];
  
  const toolsIDEs = [
    "Git",
    "GitHub",
    "VS Code",
    "Visual Studio",
    "PyCharm",
    "IntelliJ",
    "Eclipse",
    "Jupyter Notebook"
  ];
  
  const librariesFrameworks = [
    "Pandas",
    "NumPy",
    "Matplotlib",
    "TensorFlow",
    "PyTorch",
    "Seaborn",
    "Scikit-learn",
    "BeautifulSoup",
    "Selenium",
    "Next.js",
    "React"
  ];

  const coursesTaken = [
    "CS 1x: Intermediate Computer Programming",
    "CS 2: Data Structures",
    "CS 3: Object Oriented Software Desgin",
    "CS 12: Tensorflow",
    "CS 21: Theory of Computation",
    "Ma 1abc: Multivariable Calculus & Linear Algebra",
  ]

  const coursesPlanned = [
    "CS 4: Functional Programming",
    "CS 24: Computer Systems & Architecture",
    "CS 38: Algorithms",
    "CS 121: Relational Databases",
    "CS 148: Large Language & Vision Models",
    "CS 155: Machine Learning & Data Mining",
    "CS 156ab: Learning Systems, Intro to Machine Learning",
    "Ma 2: Differntial Equations",
    "Ma 6a: Discrete Math",
    "ACM 104: Applied Linear Algebra",
  ]

export const Body: React.FC = () => {
    return (
        <div className="flex items-center justify-center bg-color mx-auto px-4 py-36">
            <section className="rounded-lg p-6">
                <h2 className="flex items-center justify-center text-3xl font-semibold mb-4">About Me</h2>
                <p className="text-lg mx-auto max-w-prose w text-center">
                    Hi, I&#39;m Rahel, a second-year student at Caltech studying computer science. I am currently looking for
                    internships and opportunities in industry. I&#39;m currently working at Caltech as an Undergraduate Research
                    Fellow in the High Energy Astrophysics Group, using Python and Pytorch to emulate X-Ray Spectra from Black Holes
                    and Neutron Stars collected by NASA/JPL/Caltech&#39;s NuSTAR [<a href="/SURF_2024_Proposal.pdf" target="_blank" className="link">Proposal</a>, <a href="/SURF_Report_1.pdf" target="_blank" className="link">Report 1</a>].
                    If you see anything interesting here or on my <a href="/Rahel_Joshi_s_Resume_2024.pdf" target="_blank" className="link">resume</a>, please reach out to me on <a href='https://www.linkedin.com/in/rahel-j-49a55a236/' target="_blank" className="link">LinkedIn</a> or at <a href="mailto:rrjoshi@caltech.edu" className="link">rrjoshi@caltech.edu</a>.
                </p>
                <div className='flex items-center justify-center gap-20 py-8'>
                    <a className='image-container' href='https://github.com/Rahel-Joshi' target="_blank">
                        <img 
                        src="/github.png" 
                        alt="Github" 
                        className="image-under w-32 h-32 mx-auto mb-4" 
                        />
                    </a>
                    <a href='https://www.linkedin.com/in/rahel-j-49a55a236/' target="_blank">
                        <img 
                        src="/in.png" 
                        alt="Linkedin" 
                        className="w-32 h-32 mx-auto mb-4 image-under" 
                        />
                    </a>
                </div>
                <h2 className="flex items-center justify-center text-3xl font-semibold mb-4">Skills</h2>
                <div className="flex flex-col">
                    <div className="p-0">
                        <span className="font-bold">Languages: </span>
                        <span>{programmingLanguages.join(', ')}</span>
                    </div>
                    <div className="p-0">
                        <span className="font-bold">Developer Tools: </span>
                        <span>{toolsIDEs.join(', ')}</span>
                    </div>
                    <div className="p-0">
                        <span className="font-bold">Libraries/Frameworks: </span>
                        <span>{librariesFrameworks.join(', ')}</span>
                    </div>
                </div>


                <div className="container mx-auto px-4 py-12">
                    <div className="flex justify-center gap-10">
                        <div className="">
                            <h3 className="text-center text-3xl font-semibold mb-2">Courses Taken</h3>
                            <ul className="list-disc list-inside">
                                {coursesTaken.map((language, index) => (
                                <li key={index}>{language}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="">
                            <h3 className="text-center text-3xl font-semibold mb-2">Courses Planned Before Summer 2025</h3>
                            <ul className="list-disc list-inside">
                                {coursesPlanned.map((tool, index) => (
                                <li key={index}>{tool}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
}