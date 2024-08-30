export default function Footer({arrayOfItems}){
    if(!arrayOfItems.length){
        return (
            <p className='stats'>
                <em>Start adding items to your packing list.</em>
            </p>
        )
    }

    let numItems = arrayOfItems.length; 
    let numPacked = arrayOfItems.filter(element => element.packed).length;
    let percentage = Math.round((numPacked / numItems) * 100);

    return (
        <footer className="stats">
            <em>
                {percentage === 100 ? 'You got everything! Ready to go!' : `You have ${numItems} items on your list, and you already packed      ${numPacked}(${percentage}%).`
                }
            </em>
        </footer>
    )
}