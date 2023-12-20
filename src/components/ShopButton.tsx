import "../sass/ShopButton.scss";

interface IShopButtonProps {
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}

function ShopButton(props: IShopButtonProps) {
    const { setShow } = props;
    return (
        <div className="shop-div bg-success">
            <i className="shop-icon bi bi-bag-fill"></i>
            <button className="shop-button" onClick={ () => { setShow(true) } } ></button>
        </div>
    );
}

export default ShopButton;