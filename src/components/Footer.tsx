import '../css/footer.css'

const Footer = () => {
    return (
        <footer className="page-footer">
            <span>© {new Date().getFullYear()} Команда Лії</span>
            {/*<a className="btn-small footer-link" href="https://lyceum1.cv.ua" target="blank"><i className="tiny material-icons">code</i></a>*/}
        </footer>
    );
}

export default Footer;