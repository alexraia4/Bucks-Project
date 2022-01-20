import "../styles/Easiest.css";
import city from "../images/city.jpeg";

function Easiest() {
  return (
    <div className="Easiest">
      <img className="Easiest_img" src={city} />
      <p className="Easiest_text"> The easiest way to source your products</p>
    </div>
  );
}

export default Easiest;
