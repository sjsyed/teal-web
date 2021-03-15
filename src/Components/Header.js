function Header() {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light p-0 " style={{ background: '#213b52' }}>
                {/* <a className="navbar-brand" href="#">Navbar</a> */}
                <div className="logo mr-auto">
                    {/* <h1 className="text-light"><a href="index.html">Bocor<span>.</span></a></h1> */}
                    {/* <!-- Uncomment below if you prefer to use an image logo --> */}
                    <a href="index.html"><img src="assets/img/disnep.png" alt="" width='75px' height='60px' /></a>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-start pl-5 ml-5 align-items-center" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link  h5" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  h5" href="#features">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  h5" href="#product">Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  h5" href="#contact">Contacts</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle  h5" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown link
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <button className="btn btn-info btn-sm ml-5 h-50 mt-2">Login</button>
                        <button className="btn btn-success btn-sm ml-5 h-50 mt-2"><i className="icofont-shopping-cart"></i> Cart</button>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;