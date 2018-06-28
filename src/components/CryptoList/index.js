import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const CryptoListItem = ({ series }) => (
  <li>
    <Link to={`/series/${series.show.id}`}>
      {series.show.name}
    </Link>
  </li>
);

const CryptoList = (props) => {
  return (
    <div>
      <ul className="crypto-list">
        {props.list.map(series => (
          <CryptoListItem series={series} key={series.show.id}/>
        ))}
      </ul>
    </div>
  )
}

export default SeriesList;
