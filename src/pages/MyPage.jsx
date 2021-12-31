import React, {useEffect, useState} from 'react'

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
            <>
            <h2> {myInfo.firstName} {myInfo.lastName}</h2>
            <p> {myInfo.email}</p>
            </>
            }
            
        </div>
    )
}
