import { useState } from "react"

export default function FruitsForm({handleAdd}){
    const[nouveauFruit, setNouveauFruit] = useState("")

    const handleSubmit = (event) =>{
        event.preventDefault();
        const id = new Date().getTime();
        const nom = nouveauFruit;
        const fruitAAjouter = { id, nom };
        handleAdd(fruitAAjouter);
        setNouveauFruit("");
      }
      const handleChange = (event) => {
        const valueAfterChange = event.target.value
        setNouveauFruit(valueAfterChange)
      }
    return (
        <form action="submit" onSubmit={handleSubmit}>
      <input value={nouveauFruit} onChange={handleChange} type="text" placeholder="ajouter un fruit"/>
      <button>ajouter</button>
    </form>
        )
}