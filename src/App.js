import React, { useEffect, useReducer, useState } from "react"
import EssentialsState from './EssentialsState'
import EssentialsReducer from './EssentialsReducer'
import { Routes, Route  } from "react-router-dom";
import { Home, About, Events, Contact, Whoops404, CompanyHistory, Services, Location } from "./page";
import './App.css';

function Header( props ){
  return (
    <header>
      <h1> {props.name}'s Kitchen</h1>
    </header>
  )
}

function Main( props) {
  return (
    <section>
      <h1> This is the most {props.adjective } food</h1>
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
const dishes = [ "Mac", "burger", "Fish" ]
dishes.map(( dish) => console.log(dish))
const dishObjects = dishes.map( (dish, i ) => ({  id: i, title: dish  }))

function App() {

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
      <Main adjective="meh " dishes={dishObjects} />
      <EssentialsState />
      <EssentialsReducer />
      <Footer year={new Date().getFullYear() }/>
      { user ? user.login : <p> User Found </p> }
      <Routes>
          <Route  path="/" element={<Home />}/>
          <Route path="/about" element={<About />} >
            <Route path="history" element={<CompanyHistory /> } />
            <Route path="services" element={<Services /> } />
            <Route path="location" element={<Location /> } />
          </Route>
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Whoops404 />} />
          
      </Routes>
    </div>
  );
}

export default App;
