import React,{useEffect, useState} from 'react'

export default function ListPage() {

    const [customerList, setCustomerList] = useState(null)

    useEffect(()=> {
        const url = "https://frebi.willandskill.eu/api/v1/customers/"
        const token = localStorage.getItem("smallbus")
        fetch(url, {
            method: "GET",
            headers: {"Authorization": `Bearer ${token}`}
        })
        .then(res => res.json())
        .then(data => {
            setCustomerList(data.results)
            console.log(data.results)  
        })
    }, [])

    return (
        <div>

            {customerList && customerList.map(function(item, index){
            return <div key={index}>
                <p>Kundens namn: {item.name}</p>
                <p>Orginationsnummer: {item.organisationNr}</p>
                <p>vatNr: {item.vatNr}</p>
                <p>referens: {item.reference}</p>
                <p>paymenterm: {item.paymentTerm}</p>
                <p>website: {item.website}</p>
                <p>email: {item.email}</p>
                <p>phoneNumber: {item.phoneNumber}</p>

                <hr></hr>
            </div>
        })}
            
        </div>
    )
}
