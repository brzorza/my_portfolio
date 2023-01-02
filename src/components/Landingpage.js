export default function Landingpage() {
    return(
        <div className="landingpage-wrapper">
            <div className="landingpage-div text-white">
                <div className="landingpage-card gradient">
                    <div className="landingpage-card-dots"></div>
                    <h4 className="bold">Hello,</h4>
                    <p>My name is <span className="bold">Wiktor</span></p>
                    <p>I am a Web Developer</p>
                </div>
                <div className="pt-4 landingpage-button-wrapper">
                    <a href="https://www.google.pl/" className="landingpage-button text-white p-2">View Projects</a>
                </div>
            </div>
        </div>
    )
}