export default function About() {
    return(
        <div className="text-white py-5" style={{background: "var(--background2)"}}>
            <div className="container pb-5">
                <div className="text-center row gap-5">
                    <div className="row col-lg">
                        <div className='d-flex align-items-center'>
                            <img 
                                src={require('../img/me.png')} 
                                className='img-fluid about-image'
                                alt="Wiktor Brzoza"
                            />
                        </div>
                    </div>
                    <div className="row col-lg d-flex align-items-center">
                        <h1 className='about-color pb-2'>Who am I?</h1>
                        <div className='about-card mx-2' style={{background: "var(--background)"}}>
                            <div className="card-dots-wrapper pb-3">
                                <div className="card-dot-one"></div>
                                <div className="card-dot-two"></div>
                                <div className="card-dot-three"></div>
                            </div>
                            <p className='about-text text-start mx-3 py-5'>
                                My name is Wiktor Brzoza.<br/>
                                I'm 22 years old guy who loves making web applications.<br/><br/>
                                My passion for computers started back in my childhood when my uncle showed me his favourite game.<br/>
                                Later in high school I learned that there is much more fascinating things to do than playing games, thats when I wrote my first webites and programms.<br/>
                                From this point on I can't see my life without coding.
                            </p>
                            <div className='mt-5 m-sm-1'>
                                <a href='www.google.com' className='about-button text-center p-1'>Contact me!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}