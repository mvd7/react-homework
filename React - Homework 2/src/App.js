import Card from "./Components/Card/card.jsx";
import Academies from "./Components/Academies/academies.jsx";
import Counter from "./Components/Counter/counter.jsx";
import "./App.css";

function App() {
  const duckImg = "https://clipart-library.com/data_images/6103.png";
  const academies = [
    {
      id: "1",
      name: "Seavus",
      description: "Seavus Education & Development Center",
    },
    {
      id: "2",
      name: "Academy 2",
      description: "This is the description for Academy 2",
    },
    {
      id: "3",
      name: "Academy 3",
      description: "This is the description for Academy 3",
    },
  ];

  return (
    <div className="App">
      <div className="card-h1">
        <h1>Card</h1>
      </div>
      <div className="card-container">
        <Card title="Duck" content="This is duck =)" imageUrl={duckImg} />
        <Card
          title="Turtle"
          content="This is turtle =)"
          imageUrl="https://cdn.pixabay.com/photo/2016/04/01/08/29/animals-1298747_640.png"
        />
        <Card
          title="Lion"
          content="This is lion =)"
          imageUrl="https://www.vhv.rs/dpng/d/569-5695731_lion-safari-animal-cartoon-png-download-lion-safari.png"
        />
        <Card
          title="Elephant"
          content="This is elephant =)"
          imageUrl="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L2pvYjY4Ni0yODAtcC5wbmc.png?s=orLE2A6t9qZsN3PIPIuvo-8b4hZk0l2WZiNMqWHaN9o"
        />
        <Card
          title="Dog"
          content="This is dog =)"
          imageUrl="https://www.freeiconspng.com/uploads/dog-cartoon-png-31.png"
        />
      </div>
      <br />
      <hr />
      <div>
        <Academies academies={academies} name="Academies" />
      </div>
      <br />
      <hr />
      <div className="card-h1">
        <h1>Counter</h1>
      </div>
      <div className="counter-container">
        <Counter />
      </div>
    </div>
  );
}

export default App;
