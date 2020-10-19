import React, { Component } from "react";
import DarkNav from "../components/DarkNav";
import Footer from "../components/Footer";
import { apiCall } from "../helpers/api-call";

export class Products extends Component {
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
        url: 'static-content?name=products',
        auth: 0
      }
      const { data: response } = await apiCall(apiCallReq);
      if (response.data.length) {
        let mainSection = response.data.filter(obj => obj.main_section == 'true');
        let otherSection = response.data.filter(obj => obj.main_section == 'false');
        this.setState({
          mainSectionArr: mainSection.map(obj => {
            return { title: obj.title, description: obj.description, images: obj.images };
          }),
          otherSectionArr: otherSection.map(obj => {
            return { title: obj.title, description: obj.description, images: obj.images };
          })
        });
      }
    } catch (err) {
      console.log('err in fetchContent => ', err);
    }
  }

  render() {
    const { mainSectionArr, otherSectionArr } = this.state;
    return (
      <div id="about">
        <DarkNav />

        <div className="banar" style={{ background: `url(${mainSectionArr[0]?.images[0]}) no-repeat 50% 50%` }}>
          <div className="container">
            <div className="row">
              <div className="col col-sm-6" />
              <div className="col col-sm-6">
                <span
                  className="playfair"
                  style={{ opacity: 0, cursor: "default" }}
                >
                  Spa &amp; Wellness
                </span>{" "}
                <h2>{Boolean(mainSectionArr.length) && mainSectionArr[0]?.title}</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="page-breadcrumb simple-page-breadcrumb">
            <div className="container">
              <div className="row">
                <div className="col">
                  <ol className="playfair breadcrumb">
                    <li>
                      <a href="#">Prime Spa</a>
                    </li>
                    <li className="active">Products</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>


          {otherSectionArr.map((content, idx) => (
            <section className="about-victoria product-bg" style={{margin: '2rem 0',backgroundImage: `url(${content.images[0]})`}} key={idx}>
              <div className="container">
                <div className="row section-title">
                  <div className="col col-md-10 col-md-offset-1">
                    <p>{content.description}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          ))}

        </div>

        <Footer />
      </div>
    );
  }
}

export default Products;
