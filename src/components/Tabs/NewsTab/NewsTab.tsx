import news from '../../../static/img/news.png'

function NewsTab(){

    return(
    <div className="flex justify-center flex-row bg-purple-1 rounded p-4">
        <img alt="News" src={news}></img>
    </div>
    )
}

export default NewsTab