import React, { Component } from "react";
import DarkNav from "../components/DarkNav";
import Footer from "../components/Footer";
import EventsPromoItem from "../components/EventsPromoItem";
import { apiCall } from "../helpers/api-call";

export class EventsPromotion extends Component {
  
  state = {
    mainSectionArr: [],
    otherSectionArr: []
  }

  componentDidMount() {
    window.executeHome();
    window.scrollTo(0, 0);
    this.fetchContent();
  }
  
  fetchContent = async () => {
    try {
      let apiCallReq = {
        method: 'get',
        url: 'static-content?name=events',
        auth: 0
      }
      const {data: response} = await apiCall(apiCallReq);
      if(response.data.length) {
        let mainSection = response.data.filter(obj => obj.main_section == 'true');
        let otherSection = response.data.filter(obj => obj.main_section == 'false');
        this.setState({
          mainSectionArr: mainSection.map(obj => {
            return {title: obj.title, description: obj.description, images: obj.images};
          }),
          otherSectionArr: otherSection.map(obj => {
            return {title: obj.title, description: obj.description, images: obj.images};
          })
        });
      }
    } catch(err) {
      console.log('err in fetchContent => ', err);
    }
  }

  render() {
    const { otherSectionArr } = this.state;
    return (
      <div id="home-1" className="eventspromo">
        <DarkNav />
        <div className="services">
          <div className="container">
            <div className="facial">

              {otherSectionArr.map((content, idx) => (
                <div className="events-promo-card" key={idx}>
                  <div className="events-promo-card-header">
                    <h4>
                      <span>{content.title}</span>
                    </h4>
                    <div    >
                      <p className="description_container">
                        {content.description}
                      </p>
                    </div>
                  </div>
                </div>
              )) }
              {/* <EventsPromoItem name={"Marissa – New lash tech/esthetician"} /> */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default EventsPromotion;
