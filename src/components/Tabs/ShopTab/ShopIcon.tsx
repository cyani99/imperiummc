import shop_icon from '../../../static/img/shop_icon.svg';

function ShopIcon(){


    return(
    <div className="flex basis-1/3">
            <img alt="Shop" className="p-6" src={shop_icon}></img>
    </div>
    )
}

export default ShopIcon;