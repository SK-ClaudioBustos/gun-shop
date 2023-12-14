interface IModalProps {
    titulo: string
}

const Modal = (props: IModalProps) => {
    const { titulo } = props;
    return (
        <>
            {
                titulo === "login"
                    ? <div>Modal login</div>
                    : <div>Modal register</div>
            }
        </>
    )
}

export default Modal