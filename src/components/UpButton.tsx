import "../sass/UpButton.scss";

function UpButton() {
    return (
        <div id="up-div" className="up-div d-flex align-items-center justify-content-center">
            <i className="up-icon bi bi-arrow-up"></i>
            <a className="up-a" href="#navbar-id"> </a>
        </div>
    );
}

export default UpButton;