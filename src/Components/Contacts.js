function Contacts() {
    return (
        <section id="contact" className="contact section-bg">
            <div className="container">
                <div className="section-title">
                    <h2 data-aos="fade-in" className="aos-init">Contact</h2>
                    <p data-aos="fade-in" className="aos-init">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum
                    quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias
          ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div className="row">

                    <div className="col-lg-6">

                        <div className="row">
                            <div className="col-md-12">
                                <div className="info-box aos-init" data-aos="fade-up">
                                    <i className="bx bx-map"></i>
                                    <h3>Our Address</h3>
                                    <p>A108 Adam Street, New York, NY 535022</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="info-box mt-4 aos-init" data-aos="fade-up" data-aos-delay="100">
                                    <i className="bx bx-envelope"></i>
                                    <h3>Email Us</h3>
                                    <p>info@example.com<br />contact@example.com</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="info-box mt-4 aos-init" data-aos="fade-up" data-aos-delay="100">
                                    <i className="bx bx-phone-call"></i>
                                    <h3>Call Us</h3>
                                    <p>+1 5589 55488 55<br />+1 6678 254445 41</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-6 mt-4 mt-lg-0">
                        <form action="forms/contact.php" method="post" role="form" className="php-email-form w-100 aos-init" data-aos="fade-up">
                            <div className="form-row">
                                <div className="col-md-6 form-group">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                    <div className="validate"></div>
                                </div>
                                <div className="col-md-6 form-group">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                    <div className="validate"></div>
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                <div className="validate"></div>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                <div className="validate"></div>
                            </div>
                            <div className="mb-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div className="text-center"><button type="submit">Send Message</button></div>
                        </form>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Contacts;