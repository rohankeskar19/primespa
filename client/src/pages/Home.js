import React, { Component } from "react";
import ServicesItem from "../components/ServicesItem";
import Footer from "../components/Footer";
import DarkNav from "../components/DarkNav";
import Constants from "../Constants";
import { apiCall } from "../helpers/api-call";

var $ = window.$;

export class Home extends Component {
  state = {
    mainSectionArr: [],
    otherSectionArr: [],
  };

  componentDidMount() {
    // window.executeHome();
    window.scrollTo(0, 0);
    this.fetchContent();
  }

  fetchContent = async () => {
    try {
      let apiCallReq = {
        method: "get",
        url: "static-content?name=home",
        auth: 0,
      };
      const { data: response } = await apiCall(apiCallReq);
      if (response.data.length) {
        let mainSection = response.data.filter(
          (obj) => obj.main_section == "true"
        );
        let otherSection = response.data.filter(
          (obj) => obj.main_section == "false"
        );
        this.setState({
          mainSectionArr: mainSection.map((obj) => {
            return {
              title: obj.title,
              description: obj.description,
              images: obj.images,
            };
          }),
          otherSectionArr: otherSection.map((obj) => {
            return {
              title: obj.title,
              description: obj.description,
              images: obj.images,
            };
          }),
        });
        setTimeout(() => {
          console.log($(".hero-slider"));
          /*  $(".hero-slider").owlCarousel({
            slideSpeed: 500,
            paginationSpeed: 500,
            singleItem: true,
            afterInit: window.progressBar,
            afterMove: window.moved,
            startDragging: window.pauseOnDragging,
            mouseDrag: true,
          }); */
          window.executeHome();
        }, 100);
      }
    } catch (err) {
      console.log("err in fetchContent => ", err);
    }
  };

  render() {
    const { mainSectionArr, otherSectionArr } = this.state;
    return (
      <div id="home-1">
        <DarkNav />

        <div className="hero row" id="main-hero">
          <div className="title home-title">
            <div>
              <h3>
                {Boolean(mainSectionArr.length) && mainSectionArr[0]?.title}
              </h3>
              <p>
                <i className="fa fa-phone phoneicon"></i>
                {Constants.phone}
              </p>
              <p>
                {Boolean(mainSectionArr.length) &&
                  mainSectionArr[0]?.description}
              </p>
            </div>
          </div>
          <div className="hero-slider">
            {Boolean(mainSectionArr.length) &&
              mainSectionArr[0].images.map((img, idx) => (
                <div
                  className={`row item item-${idx + 1}`}
                  key={idx}
                  style={{
                    background: `url(${img}) no-repeat 50% 50%`,
                    backgroundSize: "cover",
                  }}
                >
                  <div className="overlay" />
                </div>
              ))}
            {/* <div className="row item item-1">
              <div className="overlay" />
            </div>
            <div className="row item item-2">
              <div className="overlay" />
            </div> */}
          </div>
          <div className="clearfix" />
          <a
            href="#"
            className="btn btn-default"
            style={{ opacity: 0, cursor: "default" }}
            onClick={(e) => e.preventDefault()}
          >
            Explore Victoria
          </a>
        </div>

        <div className="about-resort">
          <div className="row">
            <section className="about col col-sm-6">
              <h2 className="hidden">About</h2>
              <div className="about-slider">
                <div>
                  <div className="col col-sm-8 col-sm-offset-2 col-lg-8 col-lg-offset-2 section-title">
                    <h3>
                      {Boolean(mainSectionArr.length) &&
                        otherSectionArr[0].title}
                    </h3>
                    <p className="description_container">
                      {Boolean(mainSectionArr.length) &&
                        otherSectionArr[0].description}
                    </p>
                  </div>
                  <img
                    src={
                      Boolean(mainSectionArr.length) &&
                      otherSectionArr[0].images[0]
                    }
                    alt="Slide Picture"
                    className="img img-responsive"
                    className="about-image"
                  />
                </div>
              </div>
            </section>

            <section className="resort col col-sm-6">
              <div className="resort-slider">
                <div
                  className="item item-1"
                  style={{
                    background: `url(${
                      Boolean(mainSectionArr.length) &&
                      otherSectionArr[0].images[1]
                    }) no-repeat 50% 50%`,
                    backgroundSize: "contain",
                  }}
                >
                  <div className="overlay" />
                </div>
              </div>
              <div className="title">
                <h2>Prime Spa</h2>
              </div>
            </section>
          </div>
        </div>

        {/* <section className="services">
          <h2 className="hidden">Service</h2>
          <div className="container">
            <div className="top-button row">
              <div className="col pull-left">
                <p>Prime Spa services</p>
              </div>
              <div className="col col-sm-9" />
            </div>

            <ServicesItem
              heading_hidden={"HydraFacials"}
              heading={"HydraFacials"}
              subtitle={"Cleanse + Peel, Extract + Hydrate, Fuse + Protect."}
              align1={"left"}
              align2={"right"}
              image_class={"hydrafacial"}
            />
            <ServicesItem
              heading_hidden={"PRIME ACNE TREATMENTS"}
              heading={"PRIME ACNE TREATMENTS"}
              subtitle={
                "ACNE PROBLEMS CAN REALLY AFFECT YOUR APPEARANCE AND SELF-CONFIDENCE."
              }
              align1={"right"}
              align2={"left"}
              image_class={"acne"}
            />
            <ServicesItem
              heading_hidden={"BOTOX"}
              heading={"BOTOX"}
              subtitle={
                "TO RELAX THE SKIN AND RESTORE ITS YOUTHFUL APPEARANCE."
              }
              align1={"left"}
              align2={"right"}
              image_class={"botox"}
            />
          </div>
        </section> */}

        <Footer />
      </div>
    );
  }
}

export default Home;
