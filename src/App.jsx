import { BsFillCheckCircleFill } from "react-icons/bs";
import "./App.scss";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Applist from "./components/Applist";
import { test1, test2, test3, test4, test5, test6, test7, test8 } from "./data";

export default function App() {
  const [selected, setSelected] = useState("test1");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "test1",
      title: "24h Trending",
    },
    {
      id: "test2",
      title: "Latest shows",
    },
    {
      id: "test3",
      title: "Most popular",
    },
    {
      id: "test4",
      title: "In ganesis",
    },
    {
      id: "test5",
      title: "In Temple",
    },
    {
      id: "test6",
      title: "In Void",
    },
    {
      id: "test7",
      title: "Dark",
    },
    {
      id: "test8",
      title: "#Bayc",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "test1":
        setData(test1);
        break;
      case "test2":
        setData(test2);
        break;
      case "test3":
        setData(test3);
        break;
      case "test4":
        setData(test4);
        break;
      case "test5":
        setData(test5);
        break;
      case "test6":
        setData(test6);
        break;
      case "test7":
        setData(test7);
        break;
      case "test8":
        setData(test8);
        break;
      default:
        setData(test1);
    }
  }, [selected]);

  return (
    <div class="container">
      <div class="row1 col-md-12 col-md-6">
        <h2>Live Spaces</h2>
        <h5>
          <BsFillCheckCircleFill />
          All Nfts on Cyber either belong to or were minted by their space
          creator.
        </h5>
        {/* <div class="row2 col-md-12 col-md-6">
          <Button className="rounded-pill" type="primary" variant="dark">
            24h Trending
          </Button>
          <Button className="rounded-pill" type="primary" variant="dark">
            Latest shows
          </Button>
          <Button className="rounded-pill" type="primary" variant="dark">
            Most Popular
          </Button>
          <Button className="rounded-pill" type="primary" variant="dark">
            In Ganesis
          </Button>
          <Button className="rounded-pill" type="primary" variant="dark">
            In Temple
          </Button>
          <Button className="rounded-pill" type="primary" variant="dark">
            In Void
          </Button>
          <Button className="rounded-pill" type="primary" variant="dark">
            Dark
          </Button>
          <Button className="rounded-pill" type="primary" variant="dark">
            #BAYC
          </Button>
        </div> */}

        {/* <ul>
          {list.map((item) => (
            <Applist
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          ))}
        </ul> */}
      </div>

      <Container>
        <Row>
          <Col col-md-6 col-md-12 >
            <div className="horizontal-list">
              {list.map((item) => (
                <Applist
                  title={item.title}
                  active={selected === item.id}
                  setSelected={setSelected}
                  id={item.id}
                />
              ))}
            </div>
            {data.map((d) => (
              <div className="item">
                <img src={d.img} alt="" />
                <h3>{d.title}</h3>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
