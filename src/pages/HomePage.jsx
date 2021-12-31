import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import CreateUser from '../components/CreateUser'
// import ListPage from '../components/ListPage'
import MyPage from './MyPage'

export default function HomePage() {

    const [customerList, setCustomerList] = useState(null)

    useEffect(() => {
        fetchData()
    }, [])

    function fetchData(){
        const url = "https://frebi.willandskill.eu/api/v1/customers/"
        const token = localStorage.getItem("smallbus")
        fetch(url, {
            method: "GET",
            headers: {"Authorization": `Bearer ${token}`}
        })
        .then(res => res.json())
        .then(data => {
            setCustomerList(data.results)
            // console.log(data.results)
        }) 
    }

    return (
        <div>

            <MyPage></MyPage>
            <CreateUser onSuccess={fetchData}></CreateUser>

            <h2>Samtliga kunder:</h2>

            {/* <ListPage></ListPage> */}

            {customerList && customerList.map(function(item, index){
                return <div key={index}>
                    <Link to={`/home/${item.id}`}><p>Kundens namn: {item.name}</p></Link>

                    {/* <p>Orginationsnummer: {item.organisationNr}</p>
                    <p>vatNr: {item.vatNr}</p>
                    <p>referens: {item.reference}</p>
                    <p>paymenterm: {item.paymentTerm}</p> */}
                    <p>{item.website}</p>
                    {/* <p>email: {item.email}</p>
                    <p>phoneNumber: {item.phoneNumber}</p> */}
                    <hr></hr>
                </div>
            })}

         


        </div>
    )
}
