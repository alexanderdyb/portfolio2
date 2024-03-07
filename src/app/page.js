import Hero from "./Components/Hero";
import Card from "./Components/Card";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <section className="px-5 py-24 bg-[#eee]">
        <div className="max-w-[1024px] mx-auto">
          <h2 className="text-3xl pb-8">..Some of what I have built</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <Card
              title="Semester Project 2"
              image="/semester-project-2.png"
              githubLink="https://github.com/alexanderdyb/semester-project-2"
              websiteLink="https://sprightly-sunburst-2fd381.netlify.app"
              description="Auction House is a website that allows users to participate in auctions, create their own listings, and bid."
            />
            <Card
              title="JavaScript Frameworks CA"
              image="/javascript-frameworks.png"
              description="This project is a React-based e-commerce store utilizing the Noroff API for product data."
              websiteLink="https://dynamic-valkyrie-c0c083.netlify.app/"
              githubLink="https://github.com/alexanderdyb/javascript-frameworks-ca"
            />
            <Card
              title="Project Exam 2"
              image="/project-exam-2.png"
              description="The project aims to provide a modern booking application for a site named Holidaze."
              githubLink="https://github.com/alexanderdyb/project-exam-2"
              websiteLink="https://serene-brioche-46ed5b.netlify.app/"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
