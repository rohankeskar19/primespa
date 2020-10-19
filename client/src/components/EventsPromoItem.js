import React from "react";

function EventsPromoItem({ name, info, moto, contact, link }) {
  return (
    <div className="events-promo-card">
      <div className="events-promo-card-header">
        <h4>
          <span>{name}</span>
          {moto && <h5>{moto}</h5>}
        </h4>
        <p>{info}</p>

        {contact && (
          <div className="events-promo-card-contact">
            <p>{contact}</p>
            {link && (
              <div className="promoitemlink">
                <a href={"https://" + link} target="_blank">
                  {link}
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default EventsPromoItem;
