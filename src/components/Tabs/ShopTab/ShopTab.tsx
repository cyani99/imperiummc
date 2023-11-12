
import ShopContent from './ShopContent';
import ShopIcon from './ShopIcon';

function ShopTab(){

    return(
    <div className="flex flex-row bg-purple-2 rounded px-4">
        <ShopContent/>
        <ShopIcon/>
    </div>
    )
}

export default ShopTab