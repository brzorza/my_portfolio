import React from 'react';

export default function Contact() {

    const [formData, setFormData] = React.useState(
        {
            name: "",
            email: "",
            subject: "", 
            message: "",
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
            <div className='container text-center text-sm-start pb-5 w-50'>
                <h1 className='text-secondary'>Contact me</h1>
                <p className='about-text'>If you have any questions, feel free to ask me.&nbsp;&nbsp;&nbsp;I will be more than happy to answer!</p>
            </div>
            <div className='container text-white w-50'>
                <form >
                    <div className='row gap-4'>
                        <div className='row col-sm'>
                            <input
                                className=' in-bg-dark border border-3 rounded border-secondary text-white px-4 py-3'
                                type="text"
                                placeholder="Name"
                                onChange={handleChange}
                                name="name"
                                value={formData.name}
                            />
                        </div>
                        <div className='row col-sm'>
                            <input
                                className=' in-bg-dark border border-3 rounded border-secondary text-white px-4 py-3'
                                type="text"
                                placeholder="Email"
                                onChange={handleChange}
                                name="email"
                                value={formData.email}
                            />
                        </div>
                    </div>
                    <div className='row py-4'>
                        <input
                            className='in-bg-dark border border-3 rounded border-secondary text-white px-4 py-3'
                            type="text"
                            placeholder="Subject"
                            onChange={handleChange}
                            name="subject"
                            value={formData.subject}
                        />
                    </div>
                    <div className='row'>
                        <textarea
                            className='in-bg-dark border border-3 rounded border-secondary text-white px-4 py-3'
                            type="text"
                            placeholder="Your message"
                            onChange={handleChange}
                            name="message"
                            value={formData.message}
                        />
                    </div>
                    <div className="text-center text-sm-end pt-3">
                    <a href="https://www.google.pl/" className="contact-button text-white p-2">Send message!</a>
                </div>
                </form>
            </div>
            
        </div>
    )
}