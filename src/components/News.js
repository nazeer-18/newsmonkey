import React,{useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner.js'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'
export default function News(props) {
    const [articles,setArticles] = useState([])
    const [loading,setLoading] = useState(true)
    const [page,setPage] =useState(1)
    const [totalResults,setTotalResults] = useState(0)
    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const updateNews = async ()=> {
        setLoading(true);
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pagesize=${props.pageSize}`;
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(50);
        setArticles(parsedData.articles);
        setLoading(false);
        setTotalResults(parsedData.totalResults);
        props.setProgress(100)
    }
    useEffect (()=>{
        document.title= `${capitalize(props.category)} NewsMonkey`;
        updateNews()
    },[])
    const fetchMoreData = async () => {
        setPage(page+1);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page + 1}&pagesize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
    }
        return (
            <>
                    <h1 className="text-center" style={{marginTop:"70px"}}>NewsMonkey - Top {`${capitalize(props.category)}`} Headlines</h1>
                    {loading && <Spinner />}
                    <InfiniteScroll dataLength={articles.length} hasMore={articles.length !== totalResults} next={fetchMoreData} loader={<Spinner />} endMessage="Please check other categories for more news and latest updates ">
                    <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div key={element.url} className="col-md-4 ">
                                <NewsItem title={element.title} imageUrl={element.urlToImage} description={element.description} url={element.url} time={element.publishedAt} author={element.author} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div>
                    </InfiniteScroll>
                    {/* <div className="container d-flex justify-content-between my-3">
                        <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePrev}>&laquo; Previous</button>
                        <button disabled={page + 1 > Math.ceil((totalResults) / props.pageSize)} type="button" className="btn btn-dark" onClick={handleNext}>Next &raquo;</button>
                    </div> */}
            </>
        )
    }
News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number
}
News.defaultProps = {
    country: 'in',
    category: 'sports',
    pageSize: 6,
}