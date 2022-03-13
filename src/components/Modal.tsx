interface IModal {
    handleCloseModal: () => void, 
    modalTitle: string, 
    children: JSX.Element
}

const Modal = ({ handleCloseModal, modalTitle, children }: IModal )=> {

    return (
        <div className="modal">
            <div className="modal-content">
                <button onClick={handleCloseModal} className="btn__close-fullpage-modal" type="button">
                    &times;
                </button>

                <h1 className="modal-header">{modalTitle}</h1>
                <div className="modal-body">

                    <div className="users">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Modal;