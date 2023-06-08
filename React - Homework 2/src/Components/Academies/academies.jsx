import "./academies.css";

const Academies = (props) => {
  return (
    <div className="academies">
      <h2>{props.name}</h2>
      <div className="academies-container">
        {props.academies.map((academy) => (
          <div key={academy.id} className="academy-card">
            <h3>{academy.name}</h3>
            <p>{academy.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Academies;
