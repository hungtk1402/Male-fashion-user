const FooterLinks = ({ title, links }) => {
    return (
        <>
            <div className="col-md-3">
                <h5>{title}</h5>
                <ul className="list-unstyled">
                    {links.map((link, index) => (
                        <li key={index}>
                            <a href={link.href} className="text-white">{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default FooterLinks