import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import CreateUser from '../components/CreateUser'
import { StyledContainer } from '../styles/CustomerContainer'
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
        }) 
    }

    return (
        <div>
            
            <MyPage></MyPage>
            
            {/* <CreateUser onSuccess={fetchData}></CreateUser> */}


            {/* {customerList && customerList.map(function(item, index){
                return <StyledContainer margin key={index}>
                    <Link to={`/home/${item.id}`}><p>Kundens namn: {item.name}</p></Link> */}
                    {/* <p>{item.website}</p> */}
                    
                {/* </StyledContainer>
            })}  */}


            <div className="container">
            <div className="row">
                <div className="col-md-6">
                <CreateUser onSuccess={fetchData}></CreateUser>               
                </div>

                <div className="col-md-6">
                {customerList && customerList.map(function(item, index){
                return <StyledContainer margin key={index}>
                    <Link to={`/home/${item.id}`}>{item.name}</Link>
                    {/* <p>{item.website}</p> */}
                    
                </StyledContainer>
            })}
                </div>
            </div>
            </div>

            </div>

            
    )
}
