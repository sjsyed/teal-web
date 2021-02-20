var clientData = ['client-1.png', 'client-2.png', 'client-3.png', 'client-4.png', 'client-5.png', 'client-6.png'];

function Clients() {
    return (
        <section id="clients" className="clients section-bg">
            <div className="container">

                <div className="row no-gutters clients-wrap clearfix wow fadeInUp">
                    {
                        clientData.map((image, index) => {
                            return (
                                <div className="col-lg-2 col-md-4 col-6">
                                    <div className="client-logo">
                                        <img src={`assets/img/clients/` + image} className="img-fluid aos-init" alt="" data-aos="flip-right" />
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>

            </div>
        </section>
    );
}

export default Clients;