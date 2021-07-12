import './App.css';

function App() {
  const openMenu = () =>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () =>{
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <div className="grid-container">
            <header className="header">
                <div className="brand">
                    <button onClick={openMenu}>&#9776;</button>
                    <a href="index.html">Supreme Musical</a>
                </div>
                <div className="header-links">
                    <a href="cart.html">Cart</a>
                    <a href="signin.html">Sign In</a>
                </div>
            </header>
            <aside className="sidebar">
                <button onClick={closeMenu}>x</button>
                <ul>
                    <li>Guitar</li>
                    <li>Guitar</li>
                </ul>
            </aside>
            <main className="main">
                <div className="content">
                    <ul className="products">
                        <li>
                            <div className="product">
                                <img src="/images/a.jpg" alt="guitar"></img>
                                <div className="product-name">
                                    <a href="product.html">Guitar</a>
                                </div>
                                <div className="product-category">Strings</div>
                                <div className="product-brand">XYZ</div>
                                <div className="price">2500</div>
                            </div>
                        </li>
                        <li>
                            <div className="product">
                                <img src="/images/a.jpg" alt="guitar"></img>
                                <div className="product-name">
                                    <a href="product.html">Guitar</a>
                                </div>
                                <div className="product-category">Strings</div>
                                <div className="product-brand">XYZ</div>
                                <div className="price">2500</div>
                            </div>
                        </li>
                        <li>
                            <div className="product">
                                <img src="/images/a.jpg" alt="guitar"></img>
                                <div className="product-name">
                                    <a href="product.html">Guitar</a>
                                </div>
                                <div className="product-category">Strings</div>
                                <div className="product-brand">XYZ</div>
                                <div className="price">2500</div>
                            </div>
                        </li>
                        <li>
                            <div className="product">
                                <img src="/images/a.jpg" alt="guitar"></img>
                                <div className="product-name">
                                    <a href="product.html">Guitar</a>
                                </div>
                                <div className="product-category">Strings</div>
                                <div className="product-brand">XYZ</div>
                                <div className="price">2500</div>
                            </div>
                        </li>
                        <li>
                            <div className="product">
                                <img src="/images/a.jpg" alt="guitar"></img>
                                <div className="product-name">
                                    <a href="product.html">Guitar</a>
                                </div>
                                <div className="product-category">Strings</div>
                                <div className="product-brand">XYZ</div>
                                <div className="price">2500</div>
                            </div>
                        </li>
                        <li>
                            <div className="product">
                                <img src="/images/a.jpg" alt="guitar"></img>
                                <div className="product-name">
                                    <a href="product.html">Guitar</a>
                                </div>
                                <div className="product-category">Strings</div>
                                <div className="product-brand">XYZ</div>
                                <div className="price">2500</div>
                            </div>
                        </li>
                        <li>
                            <div className="product">
                                <img src="/images/a.jpg" alt="guitar"></img>
                                <div className="product-name">
                                    <a href="product.html">Guitar</a>
                                </div>
                                <div className="product-category">Strings</div>
                                <div className="product-brand">XYZ</div>
                                <div className="price">2500</div>
                            </div>
                        </li>
                        <li>
                            <div className="product">
                                <img src="/images/a.jpg" alt="guitar"></img>
                                <div className="product-name">
                                    <a href="product.html">Guitar</a>
                                </div>
                                <div className="product-category">Strings</div>
                                <div className="product-brand">XYZ</div>
                                <div className="price">2500</div>
                            </div>
                        </li>
                        <li>
                            <div className="product">
                                <img src="/images/a.jpg" alt="guitar"></img>
                                <div className="product-name">
                                    <a href="product.html">Guitar</a>
                                </div>
                                <div className="product-category">Strings</div>
                                <div className="product-brand">XYZ</div>
                                <div className="price">2500</div>
                            </div>
                        </li>
                        <li>
                            <div className="product">
                                <img src="/images/a.jpg" alt="guitar"></img>
                                <div className="product-name">
                                    <a href="product.html">Guitar</a>
                                </div>
                                <div className="product-category">Strings</div>
                                <div className="product-brand">XYZ</div>
                                <div className="price">2500</div>
                            </div>
                        </li>
                        <li>
                            <div className="product">
                                <img src="/images/a.jpg"alt="guitar"></img>
                                <div className="product-name">
                                    <a href="product.html">Guitar</a>
                                </div>
                                <div className="product-category">Strings</div>
                                <div className="product-brand">XYZ</div>
                                <div className="price">2500</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </main>
            <footer className="footer">
                Contact
            </footer>
        </div>
  );
}

export default App;
