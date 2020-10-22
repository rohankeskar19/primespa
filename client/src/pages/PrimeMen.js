import React, { Component } from "react";

import DarkNav from "../components/DarkNav";
import Footer from "../components/Footer";
import { apiCall } from "../helpers/api-call";

export class PrimeMen extends Component {
  state = {
    mainSectionArr : [],
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
        method: "get",
        url: "static-content?name=primemen",
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
      }
    } catch (err) {
      console.log("err in fetchContent => ", err);
    }
  };

  render() {
    const {mainSectionArr, otherSectionArr} = this.state;
    console.log(this.state);
    return (
      <div id="blog">
        <DarkNav />
        <section className="blog-title">
          <div className="container">
            <div className="row">
              {/* <h2>{mainSectionArr && mainSectionArr[0].title}</h2> */}
              {/* <p>Testosterone clinic</p> */}
              <p>{mainSectionArr.length > 0 && mainSectionArr[0].title}</p>
              <p>PRP injections</p>
            </div>
          </div>
        </section>
        <section className="blog-content">
          <h2 className="hidden">Prime Men</h2>

          <div className="row">
            <div className="container">
              <section className="news container">
                <h2 className="hidden">News</h2>
                <div>
                  {
                    otherSectionArr.map((item,index) => (
                      <div>
                        <div className="clearfix" />
                    <h3>{item.title}</h3>
                    <p dangerouslySetInnerHTML={{__html : item.description}}></p>
                      </div>
                    ))

                  }
                  {/* <div className="big-img">
                    <img
                      src="images/menspa.jpg"
                      alt=""
                      className="img img-responsive primemen-image"
                    />
                  </div> */}

                </div>
                
                
                
              
              </section>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default PrimeMen;
