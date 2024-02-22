import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
const News = (props) => {
  const [articles, setArtricles] = useState([]);
  const [loading, setLoading] = useState([true]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResult] = useState(0);
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArtricles(parsedData.articles);
    setTotalResult(parsedData.totalResults);
    setLoading(false);
  };
  useEffect(() => {
    document.title = `${capitalize(props.category)} - NewsMoneky`;
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArtricles(articles.concat(parsedData.articles));
    setTotalResult(parsedData.totalResults);
  };

  return (
    <>
      <h1 className="text-center" style={{ margin: "30px", marginTop: "90px" }}>
        News - Top {capitalize(props.category)} Headlins
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 30) : ""}
                    author={element.author}
                    date={element.publishedAt}
                    description={
                      !element.description
                        ? "Due to some technical issue can't load description if you want to learn click on read more "
                        : element.description || element.description
                        ? element.description.slice(0, 60)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newUrl={element.url}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
};
News.propsTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
