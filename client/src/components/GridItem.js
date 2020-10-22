import React from "react";

function GridItem({ title, subinfo, price }) {
  return (
    <div className="col col-xs-6 col-sm-4 grid-item">
      <div className="thumbnail">
        <div>
          <div className="title">
            <h3 style={{ color: "#273b91" }}>{title}</h3>
            <span className="sub-text playfair nofont description_container">{subinfo}</span>
          </div>

          {price && <span className="price">{price}</span>}
        </div>
      </div>
    </div>
  );
}

export default GridItem;
