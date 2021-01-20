import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Ingrediants from './ingrediants.js'
import Health_labels from './health_labels'
import {MemoryRouter} from 'react-router'

function Recipe(props){
        return (<>
        <div className="recipe">
            <img className={props.index % 2 === 0? "left img":"right img"} src={props.src.image}/>
            <div className={props.index % 2 === 0? "right info":"left info"} >
            <h1>{props.src.label}</h1> 
            <MemoryRouter>
            <Link to="/ingrediants"><button className="link-btn left"> ingredients</button></Link>
            <Link to="/health_labels"><button className="link-btn right"> health labels</button></Link>
            <Route path="/ingrediants" component={()=><Ingrediants key={props.src.label} item={props.src}/>}></Route>
            <Route path="/health_labels" component={()=><Health_labels key={props.src.label} item={props.src}/>}></Route>
            </MemoryRouter>
            </div>
            </div>
        </>)
}
 
export default Recipe;