import React from 'react';

function Health_labels(props){
        return (<>
            <h2>health labels</h2>
            {props.item.healthLabels.map((label)=>{
                return(<>
                 <p>{label}</p>  
                </>)
            })}
        </>)
}
 
export default Health_labels;