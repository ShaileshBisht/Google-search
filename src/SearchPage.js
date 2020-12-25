import React from "react";
import "./SearchPage.css";
import { useStateValue } from "./StateProvider";
import useGoogleSearch from "./useGoogleSearch";
import Response from "./response";
import { Link } from "react-router-dom";
import Search from "./Search";
import Grid from "@material-ui/core/Grid";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);
  //const data = Response;
  console.log(data);

  return (
    <div className="searchPage">
      <Grid
        className="searchPage_header"
        container
        justify="center"
        alignItems="center"
        spacing={1}
      >
        <Grid item sm={false} md={4}>
          <Link to="/">
            <img
              className="searchPage_logo"
              alt=""
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
            />
          </Link>
        </Grid>
        <Grid item md={8}>
          <Search hideButtons />
        </Grid>
      </Grid>

      {term && (
        <div className="searchPage_results">
          <p className="searchPage_resultCount">
            about {data?.searchInformation.totalResults} results in (
            {data?.searchInformation.searchTime} seconds) for{" "}
            {data?.queries.nextPage[0].searchTerms}
          </p>

          {data?.items.map((item) => (
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <div className="searchPage_result">
                  <a href={item.link} target="_blank" rel="noreferrer">
                    {item.displayLink}
                  </a>
                  <a
                    className="searchPage_resultTitle"
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h2>{item.title}</h2>
                  </a>
                  <p className="searchPage_resultSnippet">{item.snippet}</p>
                </div>
              </Grid>
            </Grid>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
