import { useState } from "react";
import Item from "./Item";

export default function PackingList({listItems, onhandleDeleteItem, onhandleToggleItem, onClearList}){  //parinte
    const [sortBy, setSortBy] = useState('input');

    let sortedItems;

    if(sortBy === 'input') sortedItems = listItems;
    if(sortBy === 'description') sortedItems = listItems.slice().sort((a, b) => a.description.localeCompare(b.description));
    if(sortBy === 'packed') sortedItems = listItems.slice().sort((a, b) => Number(a.packed) - Number(b.packed));

    return (
        <div className="list">
            <ul>
                { 
                    sortedItems.map((element) => {
                        return <Item singleItem = {element} onhandleDeleteItem={onhandleDeleteItem} onhandleToggleItem={onhandleToggleItem} key={element.id}/>
                    })
                }
            </ul>

            <div className='actions'>
                <select value={sortBy} onChange={(el) => setSortBy(el.target.value)}>
                    <option value='input'>Sort by input order</option>
                    <option value='description'>Sort by description</option>
                    <option value='packed'>Sort by packed status</option>
                </select>

                <button onClick={onClearList}>Clear List</button>
            </div>
        </div>
    );
}