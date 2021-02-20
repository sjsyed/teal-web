function Products() {
    return (
        <section id="product" className="product section-bg">
            <div className="container">

                <div className="section-title">
                    <h2 data-aos="fade-in" className="aos-init">Products</h2>
                    <p data-aos="fade-in" className="aos-init">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum
                    quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias
          ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <ul id="product-flters">
                            <li data-filter="*" className="filter-active">All</li>
                            <li data-filter=".filter-app">App</li>
                            <li data-filter=".filter-card">Card</li>
                            <li data-filter=".filter-web">Web</li>
                        </ul>
                    </div>
                </div>

                <div className="row product-container aos-init" data-aos="fade-up" style={{ position: 'relative', height: '2497.5px' }}>

                    <div className="col-lg-4 col-md-6 product-item filter-app" style={{ position: 'absolute', left: '0px', top: '0px' }}>
                        <div className="product-wrap">
                            <img src="assets/img/product/product-1.jpg" className="img-fluid" alt="" />
                            <div className="product-links">
                                <a href="assets/img/product/product-1.jpg" data-gall="productGallery" className="venobox vbox-item" title="App 1"><i className="icofont-plus-circle"></i></a>
                                <a href="product-details.html" title="More Details"><i className="icofont-link"></i></a>
                            </div>
                            <div className="product-info">
                                <h4>App 1</h4>
                                <p>App</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 product-item filter-web" style={{ position: 'absolute', left: '0px', top: '277.5px' }}>
                        <div className="product-wrap">
                            <img src="assets/img/product/product-2.jpg" className="img-fluid" alt="" />
                            <div className="product-links">
                                <a href="assets/img/product/product-2.jpg" data-gall="productGallery" className="venobox vbox-item" title="Web 3"><i className="icofont-plus-circle"></i></a>
                                <a href="product-details.html" title="More Details"><i className="icofont-link"></i></a>
                            </div>
                            <div className="product-info">
                                <h4>Web 3</h4>
                                <p>Web</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 product-item filter-app" style={{ position: 'absolute', left: '0px', top: '555px' }}>
                        <div className="product-wrap">
                            <img src="assets/img/product/product-3.jpg" className="img-fluid" alt="" />
                            <div className="product-links">
                                <a href="assets/img/product/product-3.jpg" data-gall="productGallery" className="venobox vbox-item" title="App 2"><i className="icofont-plus-circle"></i></a>
                                <a href="product-details.html" title="More Details"><i className="icofont-link"></i></a>
                            </div>
                            <div className="product-info">
                                <h4>App 2</h4>
                                <p>App</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 product-item filter-card" style={{ position: 'absolute', left: '0px', top: '832.5px' }}>
                        <div className="product-wrap">
                            <img src="assets/img/product/product-4.jpg" className="img-fluid" alt="" />
                            <div className="product-links">
                                <a href="assets/img/product/product-4.jpg" data-gall="productGallery" className="venobox vbox-item" title="Card 2"><i className="icofont-plus-circle"></i></a>
                                <a href="product-details.html" title="More Details"><i className="icofont-link"></i></a>
                            </div>
                            <div className="product-info">
                                <h4>Card 2</h4>
                                <p>Card</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 product-item filter-web" style={{ position: 'absolute', left: '0px', top: '1110px' }}>
                        <div className="product-wrap">
                            <img src="assets/img/product/product-5.jpg" className="img-fluid" alt="" />
                            <div className="product-links">
                                <a href="assets/img/product/product-5.jpg" data-gall="productGallery" className="venobox vbox-item" title="Web 2"><i className="icofont-plus-circle"></i></a>
                                <a href="product-details.html" title="More Details"><i className="icofont-link"></i></a>
                            </div>
                            <div className="product-info">
                                <h4>Web 2</h4>
                                <p>Web</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 product-item filter-app" style={{ position: 'absolute', left: '0px', top: '1387.5px' }}>
                        <div className="product-wrap">
                            <img src="assets/img/product/product-6.jpg" className="img-fluid" alt="" />
                            <div className="product-links">
                                <a href="assets/img/product/product-6.jpg" data-gall="productGallery" className="venobox vbox-item" title="App 3"><i className="icofont-plus-circle"></i></a>
                                <a href="product-details.html" title="More Details"><i className="icofont-link"></i></a>
                            </div>
                            <div className="product-info">
                                <h4>App 3</h4>
                                <p>App</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 product-item filter-card" style={{ position: 'absolute', left: '0px', top: '1665px' }}>
                        <div className="product-wrap">
                            <img src="assets/img/product/product-7.jpg" className="img-fluid" alt="" />
                            <div className="product-links">
                                <a href="assets/img/product/product-7.jpg" data-gall="productGallery" className="venobox vbox-item" title="Card 1"><i className="icofont-plus-circle"></i></a>
                                <a href="product-details.html" title="More Details"><i className="icofont-link"></i></a>
                            </div>
                            <div className="product-info">
                                <h4>Card 1</h4>
                                <p>Card</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 product-item filter-card" style={{ position: 'absolute', left: '0px', top: '1942.5px' }}>
                        <div className="product-wrap">
                            <img src="assets/img/product/product-8.jpg" className="img-fluid" alt="" />
                            <div className="product-links">
                                <a href="assets/img/product/product-8.jpg" data-gall="productGallery" className="venobox vbox-item" title="Card 3"><i className="icofont-plus-circle"></i></a>
                                <a href="product-details.html" title="More Details"><i className="icofont-link"></i></a>
                            </div>
                            <div className="product-info">
                                <h4>Card 3</h4>
                                <p>Card</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 product-item filter-web" style={{ position: 'absolute', left: '0px', top: '2220px' }}>
                        <div className="product-wrap">
                            <img src="assets/img/product/product-9.jpg" className="img-fluid" alt="" />
                            <div className="product-links">
                                <a href="assets/img/product/product-9.jpg" data-gall="productGallery" className="venobox vbox-item" title="Web 3"><i className="icofont-plus-circle"></i></a>
                                <a href="product-details.html" title="More Details"><i className="icofont-link"></i></a>
                            </div>
                            <div className="product-info">
                                <h4>Web 3</h4>
                                <p>Web</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Products;