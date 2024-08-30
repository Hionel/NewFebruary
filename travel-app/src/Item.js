export default function Item({ singleItem, onhandleDeleteItem, onhandleToggleItem }){  //copil
    return (
        <li>
            <input type="checkbox" value={singleItem.packed} onChange={() => onhandleToggleItem(singleItem.id)}/>
            <span style={singleItem.packed ? {textDecoration: 'line-through'} : {}}>{singleItem.quantity} {singleItem.description}</span>
            <button onClick={() => onhandleDeleteItem(singleItem.id)}>✖️</button>
        </li>
    )
}