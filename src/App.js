import Card from "./components/Card";
import "./App.css";

const data = [
  {
    id: 1,
    date: "28/10/2020",
    logo: "./amazon.png",
    heading: "Amazon Gift Pay",
    subHeading: "Desktop-Mobile",
    color: "#FFA500",
  },
  {
    id: 2,
    date: "17 Sep 2020",
    logo: "./apple.png",
    heading: "Apple Gift Payment",
    subHeading: "MacOS-Mobile",
    color: "#F5F5F5",
  },
];

function App() {
  return (
    <div className="App">
      {data.map((item) => (
        <Card
          key={item.id}
          date={item.date}
          logo={item.logo}
          heading={item.heading}
          color={item.color}
          subHeading={item.subHeading}
        />
      ))}
    </div>
  );
}

export default App;
