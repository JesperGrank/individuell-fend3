import React, {useState} from 'react'
import { Button } from '../styles/Button'
import { Input } from '../styles/Input'

export default function CreateUser(props) {

    const [name, setName] = useState("")
    const [organisationNr, setOrgnumber] = useState("")
    const [vatNr , setVatnr] = useState("")
    const [reference , setRef] = useState("")
    const [paymentTerm, setPaymentTerm] = useState("")
    const [website, setWebsite] = useState("")
    const [email, setKundemail] = useState("")
    const [phoneNumber, setPhonenumber] = useState("")

    function renderInput(type, placeholder, value, onChange){
        return <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        ></Input>
    }

    function handleOnCreateUser(e){
        e.preventDefault()
        const url = "https://frebi.willandskill.eu/api/v1/customers"
        const token = localStorage.getItem("smallbus")
        const payload = {name, organisationNr, vatNr, reference, paymentTerm, website, email, phoneNumber}
        fetch (url, {
            method: "POST",
            headers: {"Content-Type": "application/json", "Authorization": `Bearer ${token}`},
            body: JSON.stringify(payload)    
        })
       .then(res => res.json())
       .then(data => {
           console.log(data)
           props.onSuccess()
       })
    }
    return (
        <div>
            <h2>Skapa användare</h2>

            <form onSubmit={handleOnCreateUser}>
                {renderInput("text", "Namn på kunden", name, setName)}
                {renderInput("number", "Orginationsnummer", organisationNr, setOrgnumber)}
                {renderInput("text", "Momsnummer", vatNr, setVatnr)}
                {renderInput("text", "Referens", reference, setRef)}
                {renderInput("number", "Betalningsvilkor (i dagar)", paymentTerm, setPaymentTerm)}
                {renderInput("text", "Hemsida", website, setWebsite)}
                {renderInput("text", "Mail", email, setKundemail)}
                {renderInput("text", "Telefon", phoneNumber, setPhonenumber)}

                <Button width="50%" bgcolor type="submit" >Skapa användare</Button>
            </form>
        </div>
    )
}
