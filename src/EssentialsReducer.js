import React, {  useReducer } from "react"

function EssentialsReducer() {
    const [checked, toggle ] = useReducer( (checked) => !checked , false) //Reducer

    return (
        <div>
            <p> </p>Using Reducer this Checkbox is {checked ? "cheked" : " not checked"} <p></p>

            <label>
                <input type="checkbox" onChange={toggle} value={checked} />
            </label>
        </div>
    )
}
export default  EssentialsReducer

