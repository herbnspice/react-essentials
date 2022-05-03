import React, { useEffect, useReducer, useState } from "react"
import './App.css';

//https://api.github.com/users/
const dishes = [
 "Mac", "burger", "Fish"
]

dishes.map(( dish) => console.log(dish))


function Header( props ){
  return (
    <header>
      <h1> {props.name}'s Kitchen</h1>
    </header>
  )
}

function Main( props){
  return (
    <section>
      <h1> This is the most {props.adjective } food</h1>
      <p> current user is {props.emotion} and {props.emotionS} </p>
      <ul style={({ textAlign: "left"})}>
        { props.dishes.map( (dish) => ( 
          <li key={dish.id}> {dish.id} {dish.title} </li>
          ))
        }
      </ul>

     
    </section>
  )
}

function Footer( props ){
  return (
    <header>
      <h1> Yes!! perfect! {props.year} </h1>
    </header>
  )
}

const dishObjects = dishes.map( (dish, i ) => ({  id: i, title: dish  }))
function App() {
  const [emotion, setEmotion] = useState('happy') //UseState
  const [checked, toggle ] = useReducer( (checked) => !checked , false) //Reducer
  const [emotionS, setEmotionS] = useState('happy')

  useEffect(() => { //UseEffect
    console.log( `its ${emotion} here`)
  }, [emotion])

  
  useEffect(() => {
    console.log( `its ${emotionS} here`)
  }, [emotionS] )

  const [user, setUser] = useState(null)
  const login = 'herbnspice'
  useEffect(()=> {
    fetch(`https://api.github.com/users/${login}`)
    .then( (response) => response.json() )
    .then( setUser )
  }, [])

  return (
    <div className="App">
      <Header name="Herbert" />
      <Main adjective="meh " dishes={dishObjects} emotion={emotion} emotionS={emotionS}/>
      <Footer year={new Date().getFullYear() }/>
      <button onClick={() => setEmotion('Sad')}> Frustrate </button>
      <button onClick={() => setEmotion('Happy')}> Happy </button>
      <button onClick={() => setEmotion('Meh')}> Meh </button>

      <div> Tired </div>
      <button onClick={() => setEmotionS('tired')}> tired </button>
      <button onClick={() => setEmotionS('Mesh')}> Meh </button>

      <label>
        <input type="checkbox" onChange={toggle} value={checked} />
      </label>

      { user ? user.login : <p> User Found </p> }

      Checkbox this is {checked ? "cheked" : " not checked"}
    </div>
  );
}

export default App;
