export function Card({ title, description, image}) {
  return (
    <div className="icon-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export function IntroducingCards({title, description, image}){
  return(
    <div className="introducing-container">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p className="paragraph paragraph-grey">{description}</p>
    </div>
  );
}