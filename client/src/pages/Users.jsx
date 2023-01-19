import { React, useState, useEffect } from 'react';
import axios from 'axios';

const Users = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:3001/api/gets/users");  
                setUsers(res.data);  
            } 
            catch(err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

const displaySubscribed = (data) => {
    let response = "";
    data.forEach(element => {
        response += "Category: " + element.category + "\nChannels:\n";
        element.channels.forEach(subElement => {
            response += subElement + "\n"
        });       
    });
    return response;
};
    
    return (
        <div className='App-layout'>
            <h1>USERS</h1>
            {users.map((user, index) => {
                return (
                    <p key={index}>
                        Email: {user.email} <br/>
                        Phone Number: {user.phoneNumber} <br/>
                        Subscribed <br/>
                        {displaySubscribed(user.subscribed)}
                    </p>
                );
            })}
        </div>
    )
};

export default Users;