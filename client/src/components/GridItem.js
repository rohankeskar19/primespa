import React from "react";

function GridItem({ title, subinfo, price }) {
  return (
    <div className="col col-xs-6 col-sm-4 grid-item">
      <div className="thumbnail">
        <div>
          <div className="title">
            <h3 style={{ color: "#00c4bb" }}>{title}</h3>
            <span className="playfair nofont">{subinfo}</span>
          </div>

          {price && <span className="price">{price}</span>}
        </div>
      </div>
    </div>
  );
}

export default GridItem;
