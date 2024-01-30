export default function Fruit({fruitInfo,onClick}){


    return (
        <li>
        {fruitInfo.nom} <button onClick={onClick}>X</button>
        </li>
    )
}