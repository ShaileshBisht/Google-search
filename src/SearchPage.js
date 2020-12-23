import React from "react";
import "./SearchPage.css";
import { useStateValue } from "./StateProvider";
import useGoogleSearch from "./useGoogleSearch";
import Response from "./response";
import { Link } from "react-router-dom";
import Search from "./Search";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  //const { data } = useGoogleSearch(term);
  const data = Response;
  console.log(data);

  return (
    <div className="searchPage">
      <div className="searchPage_header">
        <Link to="/">
          <img
            className="searchPage_logo"
            alt=""
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
          />
        </Link>
        <div className="searchPage_headerBody">
          <Search hideButtons />
        </div>
      </div>
      <div className="searchPage_results"></div>
    </div>
  );
}

export default SearchPage;
