import "./card.css";

const Card = (props) => {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <img src={props.imageUrl} alt="" />
      <p>{props.content}</p>
    </div>
  );
};

export default Card;
