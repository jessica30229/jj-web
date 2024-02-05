import "./Flipcard.css";

function Flipcard(props) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={props.img}
            alt="Avatar"
            style={{ width: "300px", height: "200px" }}
          />
        </div>
        <div className="flip-card-back">
          <img
            src={props.img}
            alt="Avatar"
            style={{ width: "300px", height: "200px" }}
          />
          <h1>{props.text}</h1>
        </div>
      </div>
    </div>
  );
}

export default Flipcard;
