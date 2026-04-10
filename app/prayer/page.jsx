"use client";
import { useState } from "react";


export default function Prayer() {
    const [formData, setFormData] = useState({
        name:"",
        email: "",
        request: "",
        showPublic: false,
    });
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const [publicRequests, setPublicRequests] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        //IF display box is checked
        if (formData.showPublic) {
            setPublicRequests((prev) => [...prev, { name: formData.name, request: formData.request}]);
        }

        //reset form
        setFormData({ name: "", email: "", request: "", showPublic: false});
    };

    return (
        <div className="page-wrapper">
            <div className="container">
                <h1 className="prayer-form-h1">Prayer Request</h1>

                <form onSubmit={handleSubmit} className="prayer-form">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name (optional)"
                        onChange={handleChange} />
                    
                    <input
                        type="email"
                        name="email"
                        placeholder="Email (optional)"
                        onChange={handleChange} />

                    <textarea
                        name="request"
                        placeholder="Please enter your prayer request..."
                        required
                        onChange={handleChange} />
                    
                    <label>
                        <input
                            type="checkbox"
                            name="showPublic"
                            checked={formData.showPublic}
                            onChange={(e) =>
                                setFormData({ ...formData, showPublic: e.target.checked})
                            }
                        />
                        Display my name and prayer request publicly
                    </label>

                    <button type="submit">Submit Request</button>
                    
                    <p>Pastor Taylor will receive your request, and you have the option to have it displayed here:</p>
                </form>

                    {publicRequests.length> 0 && (
                        <div className="public-prayer-section">
                            <h2>Public Prayer Requests</h2>
                            {publicRequests.map((item,index) => (
                                <div key={index} className="public-prayer-card">
                                    <strong>{item.name || "Anonymous"}</strong>
                                    <p>{item.request}</p>
                                </div>
                            ))}
                        </div>
                    )}
            </div>
        </div>
    );
}