import { React, useState, useEffect } from 'react';
import axios from 'axios';

const Logs = () => {

    const [logs, setLogs] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:3001/api/gets/logs");  
                setLogs(res.data);  
            } 
            catch(err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    return (
        <div className='App-layout'>
            <h1>LOGS</h1>
            {logs.map((log, index) => {
            return (
                <p key={index}>
                    Log Date: {log.date} <br/>
                    User ID: {log.userId} <br/>
                    User Name: {log.userName} <br/>
                    User Email: {log.userEmail} <br/>
                    User Phone Number: {log.userPhoneNumber} <br/>
                    Category: {log.category} <br/>
                    Channel: {log.channel} <br/>
                    Message: {log.message} <br/>
                    Message Status: {log.messageStatus} <br/>
                </p>
            );
        })}
        </div>
    )
};

export default Logs;