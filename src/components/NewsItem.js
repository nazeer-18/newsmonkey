import React from 'react'
import news from '../news.png'
export default function NewsItem (props) {
        let {title,description,imageUrl,url,source,author,time} = props;
        let date = new Date(time);
        return (
            <div className='my-3'>  
            <span className="badge bg-danger">{source}</span>
                <div className="card">
                    <img src={imageUrl?imageUrl:news} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title?title.slice(0,122):""}.....</h5>
                            <p className="card-text">{description?description.slice(0,57):""}....</p>
                            <p className="card-text"><small className="text-muted"> By {author?author:"unknown"}  on  {date.toGMTString()}</small></p>
                            <a href={url} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read more</a>
                        </div>
                </div>
            </div>
        )
}   