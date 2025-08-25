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

export function Highlights({ subheadline, heading, description, button, image, reverse}) {
  return (
    <div className={`highlight-card ${reverse ? "reverse": ""}`}>
      <div className="highlight-text">
        <h4 className="sub-heading-text">{subheadline}</h4>
        <h2>{heading}</h2>
        <p className="paragraph paragraph-grey">{description}</p>
        <button className="btn">{button}</button>
      </div>

      <div className="highlight-image">
        <img src={image} alt={heading} />
      </div>
    </div>
  );
}


export function Blogs({image, subheading, heading, date, time}){
  return (
    <div className={"blog-card"}>
      <div className="blogs-text">
        <h4 className="sub-heading-text">{subheading}</h4>
        <img src="" alt="" />
        <h2>{heading}</h2>
        <div className="blog-date">
          <span>{date}</span>
          <span>{time}</span>
        </div>
      </div>
    </div>
  )
}