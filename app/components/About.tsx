export default function About() {
    return (
      <section
        id="about"
        className="w-full px-6 py-24 md:py-36 max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-semibold tracking-wide mb-6">
          About Me
        </h2>
  
        <p className="text-gray-300 text-sm md:text-base leading-loose tracking-wider">
          I'm a passionate <span className="text-purple-400">software developer</span> with a strong passion for building clean, efficient, and scalable solutions.
          I enjoy diving deep into complex problems, breaking them down, and engineering solutions that just make sense.
          <br className="hidden md:block" />
          <br />
          When I'm not writing code, you’ll find me tweaking terminal setups, learning new tech, or refining UI patterns.
        </p>
      </section>
    );
  }
  