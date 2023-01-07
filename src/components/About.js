export default function About() {
    return(
        <div className="text-white py-5" style={{background: "var(--background2)"}}>
            <div className="container pb-5">
                <div className="text-center row gap-5">
                    <div className="row col-lg">
                        <div className='text-center mx-2 px-2 px-lg-5 pt-1 pt-sm-4'>
                            <img 
                                src={require('../img/me.png')} 
                                className='img-fluid about-image'
                                alt="Wiktor Brzoza"
                            />
                        </div>
                    </div>
                    <div className="row col-lg">
                        <h1 className='about-color neon-orange pb-2'>Who am I?</h1>
                        <div className='about-card'>
                            <div className="card-dots-wrapper pb-3">
                                <div className="card-dot-one"></div>
                                <div className="card-dot-two"></div>
                                <div className="card-dot-three"></div>
                            </div>
                            <p className='about-text text-start mx-3 pb-3'>
                                My name is Wiktor Brzoza.<br/>
                                I'm 22 years old guy who loves making web applications.<br/><br/>
                                My passion for computers started back in my childhood when my uncle showed me his favourite game.<br/>
                                Later in high school I learned that there is much more fascinating things to do than playing games, thats when I wrote my first webites and programms.<br/>
                                From this point i can't see my life without coding.
                            </p>
                            <div>
                                <a href='www.google.com' className='about-button text-center pb-1'>Contact me!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}