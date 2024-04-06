import logo from "./logo.svg";
import "./App.css";
import { YouToBeDaTa } from "./youToBeData";

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
    <div className="youtobe-list">

      <YouToItem image="https://scr.vn/wp-content/uploads/2020/07/%E1%BA%A2nh-T%E1%BA%BFt-sum-v%E1%BA%A7y.jpg" />
      <YouToItem image="https://antimatter.vn/wp-content/uploads/2022/06/anh-bau-troi-va-hoa.jpg" />
      <YouToItem image="https://scr.vn/wp-content/uploads/2020/07/%E1%BA%A2nh-T%E1%BA%BFt-sum-v%E1%BA%A7y.jpg" />
      <YouToItem image="https://antimatter.vn/wp-content/uploads/2022/06/anh-bau-troi-va-hoa.jpg" />
      <YouToItem image="https://scr.vn/wp-content/uploads/2020/07/%E1%BA%A2nh-T%E1%BA%BFt-sum-v%E1%BA%A7y.jpg" />
      <YouToItem image="https://antimatter.vn/wp-content/uploads/2022/06/anh-bau-troi-va-hoa.jpg" />
      <YouToItem image="https://scr.vn/wp-content/uploads/2020/07/%E1%BA%A2nh-T%E1%BA%BFt-sum-v%E1%BA%A7y.jpg" />
      <YouToItem image="https://antimatter.vn/wp-content/uploads/2022/06/anh-bau-troi-va-hoa.jpg" />

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
        <h2 className="youtobe-title">
          {props.title || "This is example of title "}
        </h2>
        <h4 className="youtobe-author">
          {props.author || "This is example of author name "}
        </h4>
      </div>
      <div className="youtobe-avatar">
        <img src={props.avatar} alt="" />
      </div>
    </div>
  );
}

export default App;
