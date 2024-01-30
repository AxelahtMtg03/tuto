import { useState } from "react";
import Fruit from "./components/Fruit";
import FruitsForm from "./components/FruitsForm";

function App(){
   const [fruits, setFruit] = useState([
    {id: 1,nom:"banne"},
    {id: 2,nom:"pomme"},
    {id: 3,nom:"coco"}
   ])

   const handleDelete = (id) =>{
    const fruisCopy = fruits.slice()
    const fruitsUpdated = fruisCopy.filter(fruit => fruit.id !== id )
    setFruit(fruitsUpdated)
  }
  const handleAdd = (fruitAAjouter) => {
    const fruitsCopie = [...fruits]
    fruitsCopie.push(fruitAAjouter)
    setFruit(fruitsCopie)

  }
  const afficherMonFruitPreferer = (fruitNom) =>{
    alert(`J'aime trop ce fruit: ${fruitNom}`)
  }
  return (
    <div>
    <h1>Liste de fruit</h1>
    <ul>
      {fruits.map((fruit) => (
        <Fruit fruitInfo={fruit} onClick = {() =>afficherMonFruitPreferer(fruit.nom)} key ={fruit.id} />
     ))}
    </ul>
    <FruitsForm handleAdd={handleAdd} />

    </div>
  )
}

export default App;
