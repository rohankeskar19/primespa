import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import DarkNav from "../components/DarkNav";
import { apiCall } from "../helpers/api-call";

export class About extends Component {
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
        url: 'static-content?name=about',
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
    const { mainSectionArr, otherSectionArr } = this.state;
    return (
      <div id="about">
        <DarkNav />

        <div className="banar" style={{background: `url(${mainSectionArr[0]?.images[0]}) no-repeat 50% 50%`}}>
          <div className="container">
            <div className="row">
              <div className="col col-sm-6" />
              <div className="col col-sm-6">
                <span
                  className="playfair"
                  style={{ opacity: 0, cursor: "default" }}
                >
                  Spa &amp; Wellness
                </span>
                <h2>{Boolean(mainSectionArr.length) && mainSectionArr[0]?.title}</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="page-breadcrumb simple-page-breadcrumb">
          <div className="container">
            <div className="row">
              <div className="col">
                <ol className="playfair breadcrumb">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li className="active">About us</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <section className="about-victoria">
          <div className="container">
            {otherSectionArr.map((content, idx) => (
              <div className="row section-title" key={idx}>
                <div className="col col-md-10 col-md-offset-1">
                  <h2>{content?.title}</h2>
                  <p>
                    {content?.description}
                  </p>
                </div>
              </div>
            ))}            
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}

export default About;
