import React from "react";
import { Link, useLocation, Outlet } from "react-router-dom";

export function Home() {
    return (
        <div>
            <h1> [Company Website] </h1>
            <nav>
                <Link to="about"> About </Link>
                <Link to="events"> Events </Link>
                <Link to="contact"> Contact </Link>


            </nav>
        </div>
    )
}



export function About() {
    return (
        <div>
            <h1> [Company About] </h1>
            <Outlet />
        </div>
    )
}


export function Events() {
    return (
        <div>
            <h1> [Company Events] </h1>
        </div>
    )
}

export function Contact() {
    return (
        <div>
            <h1> [Company Contact] </h1>
        </div>
    )
}

export function Services(){
    return(
        <div>
            <h2>  THis is the services  </h2>
        </div>
    )
}

export function CompanyHistory(){
    return(
        <div>
            <h2>  THis is the CompanyHistory  </h2>
        </div>
    )
}

export function Location(){
    return(
        <div>
            <h2>  THis is the Our Location  </h2>
        </div>
    )
}


export function Whoops404() {
    let location = useLocation()
    console.log( location)
    return (
        <div>
            <h1> Resource not found at {location.pathname} [No page] </h1>
        </div>
    )
}