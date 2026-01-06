import {useState} from 'react'

function Profile() { 
    const[Name, setName] = useState("");
    function onNameChange(event) {
            setName(event.target.value);
        }
    return(
       <div className = "top-left">
        <input type = "text" id = "Name" value = {Name} onChange={onNameChange}/>
        <p> Your name is {Name}</p> 
       </div>
    )
}


export default Profile