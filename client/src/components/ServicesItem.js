import React from "react";

function ServicesItem({
  heading_hidden,
  heading,
  subtitle,
  align1,
  align2,
  image_class,
}) {
  return (
    <section className="facial row">
      <h3 className="hidden">facial</h3>
      <div className={align1 + " col col-md-6"}>
        <div
          className={
            image_class + " wrap-hover-content facial-left-thumbnail thumbnail"
          }
        >
          <div className="hover-content">
            <div className>
              <img src="images/home-1/services/facial/icon.png" alt="" />
              <p>{heading_hidden}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={align2 + " col col-md-6"}>
        <div className="facial-right-thumbnail thumbnail">
          <div className="victorial-facila-massage row">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesItem;
