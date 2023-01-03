import React from 'react';
import me from '../img/me.jpg'

export default function About() {
    return(
        <div className="text-white" style={{background: "var(--background2)"}}>
            <div className="container">
                <div className="text-center row justify-content-center">
                    <div className="row col-sm-6">
                        <img src={me} alt="Wiktor Brzoza"  />
                    </div>
                    <div className="row col-sm-6">
                        <p>loremloremloremloremloremloremloremloremlorem</p>
                    </div>
                </div>
            </div>
        </div>
    )
}