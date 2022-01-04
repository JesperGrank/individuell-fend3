import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

const MyPageContainer = styled.div`
background-color:black;
color:white;
text-align:center;

`

export default function MyPage() {

    const [myInfo, setMyInfo] = useState(null)

    useEffect(()=> {
        const url = "https://frebi.willandskill.eu/api/v1/me"
        const token = localStorage.getItem("smallbus")
        fetch(url, {
            headers: {"Content-Type": "application/json", "Authorization": `Bearer ${token}`}
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setMyInfo(data)
        })
    }, [])
    return (
        <div>
            {myInfo &&
            <MyPageContainer>
            <h3> {myInfo.firstName} {myInfo.lastName}</h3>
            <p> {myInfo.email}</p>
            </MyPageContainer>
            }
            
        </div>
    )
}
