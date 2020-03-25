import React  from 'react';
import base from '../baseData/data';
import Item from './Item';


const Main = ({option, search}) => {
  
  

    return (
        <div className="Main">
            {base.filter((item)=>(
                (option!=='all'?
            item.type===option : true)&&
            (search!==''? (item.name.toLowerCase().indexOf(search)>-1):true)
            
            )).map((item)=>(
            <Item item={item}  />
            ))}
        </div>
    );
}

export default Main;
