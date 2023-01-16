import React from 'react';

export default function Contact() {

    const [formData, setFormData] = React.useState(
        {
            firstName: "", 
            lastName: "",
            subject: "", 
            message: "",
            email: ""
        }
    )
    
    function handleChange(event) {
        console.log(event)
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    return(
        <div className="text-white py-5" style={{background: "var(--background2)"}}>
            
        </div>
    )
}