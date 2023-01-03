export default function About() {
    return(
        <div className="text-white pt-5" style={{background: "var(--background2)"}}>
            <div className="container pb-5">
                <div className="text-center row gap-5">
                    <div className="row col-lg">
                        <div className='text-center px-2 px-lg-5'>
                            <img 
                                src={require('../img/me.png')} 
                                className='img-fluid about-image'
                                alt="Wiktor Brzoza"
                            />
                        </div>
                    </div>
                    <div className="row col-lg">
                        <h1>Who am I?</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}