import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../styles/Button'

export default function Detail(props) {
    const [detail, setDetail] = useState([])

    const navigate = useNavigate()

    useEffect(()=> {
        const url = `https://frebi.willandskill.eu/api/v1/customers/${props.id}/`
        const token = localStorage.getItem("smallbus")
        fetch(url, {
            method: "GET",
            headers: {"Authorization": `Bearer ${token}`}
        })
        .then(res => res.json())
        .then(data => {
            setDetail(data)
            // console.log(data)
        }) 

    }, [props.id])

    function handleOnDelete(id){
        console.log(id)

        const token = localStorage.getItem("smallbus")
        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }

        fetch(`https://frebi.willandskill.eu/api/v1/customers/${id}/`, {
            method: "DELETE",
            headers: headers
        })
        .then(res => navigate("/home") )
    }

    const [name, setName] = useState("")
    // const [organisationNr, setOrgnumber] = useState("")
    // const [vatNr , setVatnr] = useState("")
    // const [reference , setRef] = useState("")
    // const [paymentTerm, setPaymentTerm] = useState("")
    // const [website, setWebsite] = useState("")
    // const [email, setKundemail] = useState("")
    // const [phoneNumber, setPhonenumber] = useState("")

    function handleOnSubmit(id){

        const token = localStorage.getItem("smallbus")
        const url = `https://frebi.willandskill.eu/api/v1/customers/${id}/`
        const payload = {name}

        fetch(url, {
            method: "PATCH",
            headers: {"Content-Type": "application/json", "Authorization": `Bearer ${token}`},
            body: JSON.stringify(payload)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setDetail(data)
            setName(data.name)
            
        })
    }

    return (
        <div>

            <h2>Gör ändringar till: {props.id}</h2>
            {detail && 
            <>
                <form onSubmit={handleOnSubmit}>
                Nytt namn: <input value={name} onChange={e => setName(e.target.value)}></input>
                {/* Nytt organisationsnr: <input value={organisationNr} onChange={e => setOrgnumber(e.target.value)}></input>
                Nytt namn: <input value={vatNr} onChange={e => setName(e.target.value)}></input>
                Nytt namn: <input value={reference} onChange={e => setName(e.target.value)}></input>
                Nytt namn: <input value={paymentTerm} onChange={e => setName(e.target.value)}></input>
                Nytt namn: <input value={website} onChange={e => setName(e.target.value)}></input>
                Nytt namn: <input value={email} onChange={e => setName(e.target.value)}></input>
                Nytt namn: <input value={phoneNumber} onChange={e => setName(e.target.value)}></input> */}

                </form>
                <h3>{detail.name}</h3>
                <h3> Org: {detail.organisationNr}</h3>
                <h3>{detail.vatNr}</h3>
                <h3>{detail.reference}</h3>
                <h3>{detail.paymentTerm}</h3>
                <h3>{detail.website}</h3>
                <h3>{detail.email}</h3>
                <h3>{detail.phoneNumber}</h3>

                <Button onClick={e => handleOnDelete(detail.id)}>Ta bort</Button>
                <Button bgcolor onClick={e => handleOnSubmit(detail.id)}>Uppdatera</Button>
            </>}     
        </div>
    )
}
