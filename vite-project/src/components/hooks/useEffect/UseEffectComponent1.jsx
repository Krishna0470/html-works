import React, { useState, useEffect } from "react";
import './useEffectComponent.css'

function UserEffectComponent1() {
    console.log("Component rendering...");

    let [data, setData] = useState(null);

    useEffect(() => {

        let getData = () => {
            fetch('https://jsonplaceholder.typicode.com/users/')
                .then((user) => user.json())
                .then((user) => setData(user))
                .catch((error) => console.log("Eroor fetching data :", error.message ? error.message : error));
        }
        getData();
    }, []);

    return (
        <>

            {data ? (
                data.map ((user) => {

                    return (
                        <div className="box" key={user.id}>
                            <h1>Id :{user.id}</h1>
                            <h1>Name :{user.name}</h1>
                            <h1>Email :{user.email}</h1>
                            <h1>Website :{user.website}</h1>
                        </div>
                    )
                })

            ) : (<h1>Loading........</h1>)}

        </>
    )
}

export default UserEffectComponent1;