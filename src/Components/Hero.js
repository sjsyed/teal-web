function Hero() {
    return (
        <section id="hero">

            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6 py-5 py-lg-0 order-2 order-lg-1 aos-init" data-aos="fade-right" >
                        <h1 data-aos="fade-right">Your new digital experience with Bocor</h1>
                        <h2 data-aos="fade-right">We are team of talented designers making websites with Bootstrap</h2>
                        <div>
                            {/* <a data-aos="fade-right" href="#about" className="btn-get-started scrollto">Get Started</a> */}
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 hero-img aos-init aos-animate" data-aos="fade-left">
                        <img data-aos="fade-left" src="assets/img/hero-img.png" className="img-fluid" alt="" />
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Hero;