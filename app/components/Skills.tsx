// app/components/Skills.tsx
export default function Skills() {
    const skills = [
      { name: "Java", icon: "devicon-java-plain colored" },
      { name: "HTML", icon: "devicon-html5-plain colored" },
      { name: "CSS", icon: "devicon-css3-plain colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "Express.js", icon: "devicon-express-original" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "Next.js", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original-wordmark.svg" },
      { name: "Tailwind", icon: "devicon-tailwindcss-plain colored" },
      { name: "Docker", icon: "devicon-docker-plain colored" },
      { name: "Kubernetes", icon: "devicon-kubernetes-plain colored" },
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "GitHub", icon: "devicon-github-original" },
    ];
  
    return (
    //   <section id="skills" className="py-16 px-4 max-w-5xl mx-auto text-center">
    //     <h2 className="text-3xl font-semibold mb-8">Skills</h2>
    //     <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center">
    //       {skills.map((skill) => (
    //         <div key={skill.name} className="flex flex-col items-center group">
    //           <i className={`${skill.icon} text-4xl group-hover:text-[#1e3a8a] transition`} />
    //           <span className="mt-2 text-sm">{skill.name}</span>
    //         </div>
    //       ))}
    //     </div>
    //   </section>

    <section id="skills" className="py-16 px-4 max-w-5xl mx-auto text-center flex flex-col items-center justify-center">
    <h2 className="text-3xl font-semibold mb-10">Tech Stacks and <span className="text-purple-400">Skills</span></h2>
    <div className="flex flex-wrap justify-center gap-10 max-w-[1000px] mx-auto">
      {skills.map((skill) => (
        <div key={skill.name} className="flex flex-col items-center group">
          {skill.icon ? (
            <i className={`${skill.icon} text-4xl group-hover:scale-115 transition-transform`} />
          ) : (
            <img
              src={skill.img}
              alt={skill.name}
              className="w-10 h-10 object-contain invert group-hover:scale-115 transition-transform"
            />
          )}
          <span className="mt-2 text-sm">{skill.name}</span>
        </div>
      ))}
    </div>
  </section>
    );
  }
  