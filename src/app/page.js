import Hero from "./Components/Hero";
import Card from "./Components/Card";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <section className="px-5 py-24 bg-[#eee]">
        <div className="max-w-[1024px] mx-auto">
          <h2 className="text-3xl">..Some of what I have built</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <Card title="Semester Project 2" image="/semester-project-2.png" />
            <Card
              title="JavaScript Frameworks CA"
              image="/javascript-frameworks.png"
            />
            <Card title="Project Exam 2" image="/project-exam-2" />
          </div>
        </div>
      </section>
    </main>
  );
}
