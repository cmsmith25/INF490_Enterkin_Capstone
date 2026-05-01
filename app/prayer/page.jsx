"use client";
import { useEffect, useState } from "react";
import { client } from "../../sanity/lib/client";


export default function Prayer() {
    //store input values
    const [formData, setFormData] = useState({
        name:"",
        email: "",
        request: "",
        showPublic: false,
    });

    //store prayer requests
    const [publicRequests, setPublicRequests] = useState([]);
    //stores success message
    const [successMessage, setSuccessMessage] = useState("");


    //Handles input changes
    const handleChange = (e) => {
        const {name, value, type, checked } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked: value,
        }));
    };

    //gets public prayers from Sanity
    const fetchRequests = async () => {
        try {
            //pull only requests that are public
            const data = await client.fetch(`
                *[_type == "prayerRequest" && isPublic == true] | order(_createdAt desc)`
                
                );

                console.log("Data FROM SANITY:", data);

                console.log(
                    "Is public values:",
                    data.map(item => ({
                        name: item.name,
                        isPublic: item.isPublic
                    }))
                );

                //update screen with results
                setPublicRequests(data);
        } catch (error) {
            console.error("Fetch error:", error);
        }
    };
            
    //initial loading
    useEffect(() => {
        fetchRequests();

        //refresh every 5 seconds
        const interval = setInterval(() => {
            fetchRequests();
        }, 5000);

        return () => clearInterval(interval);
        
    }, []);
        

    //Submits form
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);

        try {
            //sends form data to API
            const res = await fetch("/api/prayer-request", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    request: formData.request,
                    isPublic: formData.showPublic,
                }),
            });

            //reads data
            const data = await res.json();
            console.log("API RESPONSE:", data);

            //handles a failure
            if (!data.success) {
                throw new Error(data.error || "Submission failed");
            }

            //resets form
            setFormData({
                name: "",
                email: "",
                request: "",
                showPublic: false,
            });

            //shows confirmation message
            setSuccessMessage("Your prayer request has been submitted successfully");

            //Message closes after a few seconds
            setTimeout(() => {
                setSuccessMessage("");
         }, 3000);

         //refreshes prayer list
         await fetchRequests();

            
    } catch (error) {
        console.error("Submit error:", error);
    }
    
};
    

    return (
        <div className="page-wrapper">
            <div className="container">
                <h1 className="prayer-form-h1">Prayer Request</h1>

                {/*Confirmation message*/}
                {successMessage && (
                    <div className="success-message">
                        {successMessage}
                    </div>
                )}

                {/*prayer form*/}
                <form onSubmit={handleSubmit} className="prayer-form">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name (optional)"
                        value={formData.name}
                        onChange={handleChange} />
                    
                    <input
                        type="email"
                        name="email"
                        placeholder="Email (optional)"
                        value={formData.email}
                        onChange={handleChange} />

                    <textarea
                        name="request"
                        placeholder="Please enter your prayer request..."
                        required
                        value={formData.request}
                        onChange={handleChange} />
                    
                    <label>
                        <input
                            type="checkbox"
                            name="showPublic"
                            checked={formData.showPublic}
                            onChange={handleChange}
                            
                        />
                        Display my name and prayer request publicly
                    </label>

                    <button type="submit">Submit Request</button>
                    
                    <p>Pastor Taylor will receive your request, and you have the option to have it displayed here:</p>
                </form>


                    {/*public  prayer requests */}
                    {publicRequests.length> 0 && (
                        <div className="public-prayer-section">
                            <h2>Community Prayer Requests</h2>
                            {publicRequests.map((item) => (
                                <div key={item._id} className="public-prayer-card">
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