export default function Card({
  title,
  image,
  description,
  githubLink,
  websiteLink,
}) {
  return (
    <div className="rounded-2xl">
      <div className="h-98 md:h-48">
        <img
          src={image}
          alt="title"
          className="object-cover w-full h-full rounded-right-top-2xl"
        />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={githubLink}>Github</a>
        <a href={websiteLink}>Live site</a>
      </div>
    </div>
  );
}
