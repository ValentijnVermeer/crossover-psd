import TopLeft from "../../assets/tickets1.jpg";
import TopRight from "../../assets/tickets2.jpg";
import BottomLeft from "../../assets/tickets3.jpg";

import GridPhotos from '../../assets/Tickets_grid_pics.png'
import "./Tickets.css";

export default function index() {
  return (
    <section className="TicketsComponent">
      <div className="topContainer">
        <img src={TopLeft} />
        <img src={TopRight} alt="" />
      </div>
      <div className="bottomContainer">
        <div className="leftImage">
          <img src={BottomLeft} />
        </div>
        <div className="textBlock">
          <h1>
            <span>RESERVE</span> TICKETS
          </h1>
          <div className="textContainer">
            <div className="left">
              <p>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                </span>
                Blanditiis, delectus, quidem architecto culpa enim aliquid saepe
                quae, at voluptate vitae tempore{" "}
              </p>
              <button>LEARN MORE</button>
            </div>
            <div className="right">
              <p>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>{" "}
                Sint nisi nesciunt debitis deleniti quis dolorum sit sunt
                molestias id eveniet voluptate , deleniti!
              </p>
              <button>LEARN MORE</button>
            </div>
          </div>
        </div>
        <div className="gridPics"><img src={GridPhotos} /></div>
      </div>
    </section>
  );
}
