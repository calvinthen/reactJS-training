import ListGroup from "./Components/ListGroup";

function App(){
  let items = ["New York", "SA", "Tokyo", "London", "Jakarta"];

  const handleSelectItem = (item:string) => {
      console.log(item);
  }

  return <div><ListGroup items={items} heading={"Cities"} onSelectedItem={handleSelectItem}/></div>
}

export default App;