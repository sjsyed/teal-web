function Footer() {
    return (
        <footer id="footer">

            <div className="mx-5 px-5 footer-top">
                <div className="row">
                    <div className="col mb-5">
                        <div className="row container">
                            <a href="index.html"><img src="/logo192.png" alt="" width='45px' height='45px' /></a>
                            <h4 className="mt-2">Bocor</h4>
                        </div>
                        <p className="text-left">Bocor is working at the intersection of residential water and technology to make sustainable water use effortless and personally rewarding.

Rachio’s ecosystem of natural and sustainable yard care products create beautiful, thriving yards that are safe for kids, pets, and the environment.</p>
                    </div>
                    <div className="col mb-5">
                        <h4>Apps</h4>
                        <p>Android</p>
                        <p>iOS</p>
                        <p>Web Login</p>
                    </div>
                    <div className="col mb-5">
                        <h4>Company</h4>
                        <p>Our Mission</p>
                        <p>Careers</p>
                        <p>Become Bocor Pro</p></div>
                    <div className="col">
                        <h4>Support</h4>
                        <p>FAQs</p>
                        <p>Help Center</p>
                        <p>Community</p>
                        <p>Pro Finder</p>
                        <p>Rebates</p>
                        <p>Service Status</p>
                    </div>
                    <div className="col">
                        <h4>Products</h4>
                        <p>Sprinkler Controller</p>
                    </div>
                </div>
            </div>

            <div className="container footer-bottom clearfix">
                <div className="copyright">
                    © Copyright <strong><span>Bocor</span></strong>. All Rights Reserved
    </div>
                <div className="credits">

                    Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;