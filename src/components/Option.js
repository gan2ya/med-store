import React from 'react';
import {Link} from 'react-router-dom';



const Option = ({key, option}) => {
  
    return (
        
        <div className="Option">
            <div className="div" id={option.id}>
            <Link to={option.link}></Link>
                <div className = "Option__image" > 
                <i className="material-icons">{option.image}</i>
                </div>
            
            <div className="Option__title">{option.title}</div>
            </div>
        </div>
       
    );
}

export default Option;
