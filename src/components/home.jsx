import {useRef} from 'react'

function Home() { 
    const inputRef = useRef()
    function handleClick() { 
        inputRef.current.focus()
    }
    return(
        <div className='body'> 
            <input type = "text" ref = {inputRef} placeholder="Type something ..."/>
            <br/><br/>
            <button onClick = {handleClick}>Focus Input </button>
        </div>


    )
}


export default Home