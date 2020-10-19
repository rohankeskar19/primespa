import React from "react";

function BreadCrumbTitle({ title, subtitle1, subtitle2 }) {
  return (
    <div className="page-breadcrumb">
      <div className="container">
        <div className="row">
          <div className="col col-xs-3 col-sm-3 col-md-2">
            <p>{title}</p>
          </div>
          <div className="col col-xs-6 col-sm-6 col-md-8">
            <ol className="playfair breadcrumb">
              <li>
                <a href="#">{subtitle1}</a>
              </li>
              <li className="active">{subtitle2}</li>
            </ol>
          </div>
          <div className="filt-btn col col-xs-3 col-sm-3 col-md-2">
            <button className="active btn btn-default">
              <i className="flaticon-app" />
            </button>
            <button className="btn btn-default">
              <i className="flaticon-squares-1" />
            </button>
            <button className="btn btn-default">
              <i className="flaticon-three-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BreadCrumbTitle;
