function Navbar() {
    const links = [
        {
            title: 'Guide',
            href: '#'
        },
        {
            title: 'Pricing',
            href: '#'
        },
        {
            title: 'Login',
            href: '#'
        }
    ]

    return ( 
    <div className="navbar-root">
        <div className="logo">Fanta</div>
        <div className="links">
            {links.map((link, idx) => {
                return (<a className = "link-items" key = {link.title} href = {link.href}>{link.title}</a>)
            })}
        </div>
        <button className="btn">Start Free Trial</button>
    </div>
    );
}

export default Navbar;