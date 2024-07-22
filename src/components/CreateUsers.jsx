import React, { useState } from 'react';
import axios from 'axios';

function CreateUsers() {
    const [formData, setFormData] = useState({
        std_name: '',
        std_stander: '',
        std_address: '',
        std_sid: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost/react/api/index.php', formData)
            .then(response => {
                alert(response.data.message); // assuming the response has a `message` field
            })
            .catch(error => {
                console.error('Error sending data:', error);
            });
    };

    return (
        <div className="container">
            <h1>Create Users</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="std_name">Student Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="std_name"
                        id="std_name"
                        placeholder="Enter Student Name."
                        value={formData.std_name}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="std_stander">Select Standard</label>
                    <select
                        className="form-control"
                        name="std_stander"
                        id="std_stander"
                        value={formData.std_stander}
                        onChange={handleChange}
                    >
                        {[...Array(12)].map((_, i) => (
                            <option key={i + 1} value={i + 1}>{i + 1}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Enter Address</label>
                    <textarea
                        className="form-control"
                        name='std_address'
                        id="address"
                        rows="3"
                        value={formData.std_address}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="std_sid">Student Sid No</label>
                    <input
                        type="text"
                        className="form-control"
                        name="std_sid"
                        id="std_sid"
                        placeholder="Enter Student Sid No."
                        value={formData.std_sid}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className='btn btn-primary'>Save</button>
                </div>
            </form>
        </div>
    );
}

export default CreateUsers;
