export default function Card({
  title,
  image,
  description,
  githubLink,
  websiteLink,
}) {
  return (
    <div className="rounded-xl bg-white">
      <div className="h-98 md:h-48 ">
        <img
          src={image}
          alt="title"
          className="object-cover w-full h-full rounded-right-top-2xl py-6 px-2"
        />
      </div>
      <div className="bg-white py-6 px-4 rounded-e-xl rounded-s-xl drop-shadow-lg">
        <h3 className="font-bold">{title}</h3>
        <p>{description}</p>
        <div className="flex flex-col text-center pt-4 font-semibold">
          <a
            href={githubLink}
            className="border border-black py-1 rounded-xl mt-4"
          >
            Github
          </a>
          <a
            href={websiteLink}
            className="border border-black py-1 rounded-xl mt-4"
          >
            Live site
          </a>
        </div>
      </div>
    </div>
  );
}
