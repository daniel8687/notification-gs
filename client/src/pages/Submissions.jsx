import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Submissions = () => {

    const [message, setMessage] = useState("");
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState({id: -1, category: ""});
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:3001/api/gets/categories");  
                setCategories(res.data);  
            } 
            catch(err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    const handleCategoryChange = (e) => {
        setCategory({id: -1, category: ""});
        if(e.target.value != "-1") {
            let index = e.target.selectedIndex;
            setCategory({id: e.target.value, category: e.target[index].text});
        }
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        if(category.id == -1) {
            setError("Select a valid category");
        }
        else if(message.length == 0) {
            setError("Insert a valid message");
        }
        else{
            try {
                await axios.post(" http://localhost:3001/api/posts/submission", {id: category.id, category: category.category, message: message});
                navigate("/logs");  
            } 
            catch(err) {
                console.log(err);
                setError(err.response.data);
            }
        }
    };

    return (
        <div className='App-layout form'>
            <h1>SUBMISSIONS</h1>
            <form>
            <select onChange={handleCategoryChange}> 
                <option value="-1"> -- Select a category -- </option>
                {categories.map((category) => <option key={category.id} value={category.id}>{category.category}</option>)}
            </select>
            <input type="text" maxLength="50" placeholder="Message" onChange={handleMessageChange} />
            {error && <p className="error">{error}</p>}
            <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
};

export default Submissions;