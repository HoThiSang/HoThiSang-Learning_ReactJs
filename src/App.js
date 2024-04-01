import logo from "./logo.svg";
import "./App.css";

function Feature() {
  return (
    <div className="card">
      <div className="card-header">Header</div>
      <div className="card-body">
        <h5 className="card-title">Primary card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
}
function App() {
  return (
    <div className="card text-white bg-primary mb-3">
      <YouToItem image="https://scr.vn/wp-content/uploads/2020/07/%E1%BA%A2nh-T%E1%BA%BFt-sum-v%E1%BA%A7y.jpg" />
      <YouToItem image="https://example.com/another-image.jpg" />
      <YouToItem image="https://example.com/yet-another-image.jpg" />
    </div>
  );
}

function YouToItem(props) {
  console.log(props);
  return (
    <div className="youtobe-item">
      <div className="youtobe-image">
        {/* Use props.image without curly braces */}
        <img src={props.image} alt="" />
      </div>
      <div className="youtobe-footer">
        <img src="https://tse4.mm.bing.net/th?id=OIP.Ae_CSR5Bx1_HQbNtFghCJQHaEM&pid=Api&P=0&h=220" className="image-avatar" alt="" />
      </div>
      <h2>Hahhaaaa</h2>
    </div>
  );
}

export default App;
