import { MouseEvent, useState } from "react";
interface ListGroupProps{
    items : string[];
    heading: string
    onSelectedItem: (item:string) => void;
}

function ListGroup({items, heading, onSelectedItem} : ListGroupProps)
{
    const [selectedIndex, setSelectedIndex] = useState(-1);
   

    const handleClick = (event:MouseEvent) => console.log(event.target); 
    return (
        <>
            <h1> List </h1>
           {items.length === 0 && <p>No item found</p>} 
            <ul className="list-group">
                {items.map((item, index)=> ( 
                    <li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item' } 
                    key={item} 
                    onClick={() => {setSelectedIndex(index);
                        onSelectedItem(item);
                    }} > 
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;