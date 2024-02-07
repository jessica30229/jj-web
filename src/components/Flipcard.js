import "./Flipcard.css";

function Flipcard(props) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={props.img} alt="Avatar" className="imgClasses" />
        </div>
        <div className="flip-card-back">
          <div className="center">
            <h1 className="textClasses">{props.title}</h1>
            <p className="textClasses2">{props.discription}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flipcard;
