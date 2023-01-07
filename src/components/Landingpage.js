export default function Landingpage() {
    return(
        <div className="landingpage-wrapper">
            <div className="landingpage-div text-white">
                <div className="landingpage-card gradient ">
                    <div className="card-dots-wrapper">
                        <div className="card-dot-one"></div>
                        <div className="card-dot-two"></div>
                        <div className="card-dot-three"></div>
                    </div>
                    <h4 style={{fontSize: "clamp(1.1rem, 3vw, 2rem)"}} className="pt-5 pt-sm-3">Hello and welcome!</h4>
                    <p style={{fontSize: "clamp(1.8rem, 5vw, 5rem)"}} className="py-4 py-sm-4">My name is <span className="neon-blue">Wiktor</span></p>
                    <p style={{fontSize: "clamp(1.4rem, 4vw, 3rem)"}} className="pb-5 pb-sm-0">I am a Web Developer</p>
                </div>
                <div className="pt-4 landingpage-button-wrapper text-center text-sm-start">
                    <a href="https://www.google.pl/" className="landingpage-button text-white p-2">View Projects</a>
                </div>
            </div>
        </div>
    )
}