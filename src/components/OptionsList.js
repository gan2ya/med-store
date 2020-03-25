import React from 'react';

import Option from './Option';

const OptionsList = () => {
    const services = [
        {title: 'Medicines', image:"pie_chart", link:"/medicines", id:"medicines"},
        {title: 'First aid kit', image:"local_hospital",link:"/kit",id:"kit"},
        {title: 'Find Doctor', image:"record_voice_over", link:"/doctors",id:"docs"},
        {title: 'Emergency', image:"airport_shuttle",link:"/emergency", id:"emergency"}
    ];
    return (
        <div className = "OptionsList">
           
           {services.map((service)=>(
          
                <Option key={service.id} option={service} />
          ))}
          
        </div>
    );
}

export default OptionsList;
