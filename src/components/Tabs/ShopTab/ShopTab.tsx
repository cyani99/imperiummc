
import ShopContent from './ShopContent';
import ShopIcon from './ShopIcon';

function ShopTab(){

    return(
    <div className="flex flex-row bg-purple-2 rounded px-4 lg:w-1/3">
        <ShopContent/>
        <ShopIcon/>
        
    </div>
    )
}

export default ShopTab