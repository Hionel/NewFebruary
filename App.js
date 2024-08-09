import {useState} from 'react';

const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: true },
    { id: 2, description: "Socks", quantity: 12, packed: false },
];


export default function App(){
    return (
        <div className="app">
            <Logo />
            <Form />
            <PackingList />
            <Footer />
        </div>
    )
}


function Logo(){
    return <h1> 🌴 Far Away 🌴</h1>;
}

function Form(){
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);

    function handleSubmit(event){
        event.preventDefault();
        console.log('Form submitted');
        //console.log(event);

        if(!description) return;

        const newItem = {description, quantity, id: Date.now(), packed: false};
        console.log(newItem);
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your trip?</h3>
            <select value={quantity} onChange={(element) => setQuantity(Number(element.target.value))}>
                {Array.from({length: 50}, (obj, i) => i + 1).map(num => 
                    <option value={num}>{num}</option>
                )}
            </select>
            <input type="text" placeholder="Item..." value={description} onChange={(element) => setDescription(element.target.value)}/>
            <button>Add</button>
        </form>
    )
}

function PackingList(){  //parinte
    return (
        <div className="list">
            <ul>
                { 
                    initialItems.map((element) => {
                        return <Item singleItem = {element}/>
                    })
                }
            </ul>
        </div>
    );
}

function Item({ singleItem }){  //copil
    console.log(singleItem);
    return (
        <li>
            <span style={singleItem.packed ? {textDecoration: 'line-through'} : {}}>{singleItem.quantity} {singleItem.description}</span>
            <button>✖️</button>
        </li>
    )
}

function Footer(){
    return (
        <footer className="stats">
            <em>
                You have X items on your list, and you already packed X(Y%).
            </em>
        </footer>
    )
}