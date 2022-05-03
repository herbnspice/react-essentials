import React, { useEffect, useReducer, useState } from "react"

function EssentialsState( ){
    const [emotion, setEmotion] = useState('happy') //UseState
    const [emotionS, setEmotionS] = useState('happy')

     useEffect(() => { //UseEffect
         console.log( `its ${emotion} here`)
    }, [emotion])
    
      
      useEffect(() => {
        console.log( `its ${emotionS} here`)
      }, [emotionS] )

    return (
        <>
        <button onClick={() => setEmotion('Sad')}> Frustrate </button>
        <button onClick={() => setEmotion('Happy')}> Happy </button>
        <button onClick={() => setEmotion('Meh')}> Meh </button>
        <p> The urrent user is {emotion} and {emotionS} using useState </p>

        <button onClick={() => setEmotionS('tired')}> tired </button>
        <button onClick={() => setEmotionS('Mesh')}> Meh </button>
        </>
    )
}

export default  EssentialsState

