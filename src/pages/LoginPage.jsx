import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    function handleOnLogin(e){
        e.preventDefault()
        const url = "https://frebi.willandskill.eu//api-token-auth/"
        const payload = {email, password}
    
        fetch(url, {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(payload)
          
        })
        .then(res => res.json())
        .then(data => {
          const token = data.token
          localStorage.setItem("smallbus", token)
          navigate("/home")
    
        })
      }

    return (
        <div>
            <h1>Startpage / Logga in </h1>
            <form onSubmit={handleOnLogin}>
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}></input>
            <input type="password" placeholder="Lösenord" value={password} onChange={e => setPassword(e.target.value)}></input>

            <button type="submit">Logga in</button>
            </form>
        </div>
    )
}
