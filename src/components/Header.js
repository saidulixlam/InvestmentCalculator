const Header = (props) => {
    return (
        <div>
            <header className="header">
                <img src={props.logo} alt="logo" />
                <h1>Investment Calculator</h1>
            </header>
        </div>
    );
}

export default Header;