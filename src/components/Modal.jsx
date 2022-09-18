const Modal = ({clickedImg, handelRotationRight, setClickedImg}) => {
    const handelClick = (e) => {
        if (e.target.classList.contains("dismiss")) {
            setClickedImg(null);
        }
    }
    return <>
        <div className="overlay dissmiss" onClick={handelClick} >
            <img src={clickedImg} alt="bigger" />
            <span className="dismiss" onClick={handelClick}>X</span>
            <div onClick={handelRotationRight} className="overlay-arrows-left">L</div>
        </div>
    </>
};

export default Modal;