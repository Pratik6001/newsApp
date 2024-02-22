import React, {} from 'react'

const NewsItem  = (props) => {
    
    let {title,description,imageUrl,newUrl,author,date,source} = props;
    return (
      <>
     
      <div className='container my-3'>
        <div className="card" >
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" >{source}</span>
            <img src={!imageUrl?"https://emeritus.org/in/wp-content/uploads/2023/04/what-does-a-business-analyst-do.png":imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text" >{description}...</p>
                <p className="card-text"><small className="text-body-secondary">By {!author?"Unknow":author} on {new Date(date).toGMTString()}</small></p>
                <a href={newUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
            
        </div>
       
      </div>
      
      </>
    )
}

export default NewsItem
