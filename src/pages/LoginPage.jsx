import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../styles/Button'
import { Input } from '../styles/Input'
import { LoginContainer } from '../styles/LoginContainer'

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
        <LoginContainer>
          
        <form onSubmit={handleOnLogin}>        
          <Input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}></Input>
          <Input type="password" placeholder="Lösenord" value={password} onChange={e => setPassword(e.target.value)}></Input>
          <Button width="100%" bgcolor type="submit">Logga in</Button>
        </form>
        
        </LoginContainer>

    )
}
