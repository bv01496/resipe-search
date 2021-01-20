import React,{useState,useEffect} from 'react';
import './app.css'
import Recipe from "./recipe.js"
function App(){

    const[item,setitem] = useState([])
    const[search,setsearch] = useState("")
    const[query,setQuery] = useState()
    const APP_ID = "5660a600"
    const APP_KEY = "f71884ddfafa064eab10f8098982ac92"
    const getrecipes = async() =>{
      const recipes = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      const data = await recipes.json()
      setitem(data.hits)
    }
    useEffect(()=>{
      alert("search and get details and ingrediants of the recipe u like")
    },[])
    useEffect(()=>{
     getrecipes(); 
    },[query])
    const updateSearch = (e)=>{
      setsearch(e.target.value)
    }
    const searchQuery=(e)=>{
      e.preventDefault()
      setQuery(search)
    }

  return (
    <center className="App">
    <div className="logo">
      <h1 style={{fontSize:50,color:"white"}}>Recipe Search</h1>
    </div>
      <form onSubmit={searchQuery} className="search">
        <input type="text" onChange={updateSearch} value={search} placeholder="search any recipe"/>
        <button className="search-btn" type="submit"> search</button>
      </form>
      <div className="recipe-container">
      {item.map((recipe)=>{
        return <Recipe index={item.indexOf(recipe)} key={recipe.recipe.label} src={recipe.recipe}/>
      })}
      </div>
    </center>
  )
}

export default App;
