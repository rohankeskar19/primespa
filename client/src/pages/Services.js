import React, { Component } from "react";
import DarkNav from "../components/DarkNav";
import GridItem from "../components/GridItem";
import Footer from "../components/Footer";
import { apiCall } from "../helpers/api-call";
import chunk from "../helpers/generatechunk";

export class Services extends Component {
  state = {
    mainSectionArr: [],
    otherSectionArr: [],
  };

  componentDidMount() {
    window.executeHome();

    window.scrollTo(0, 0);
    this.fetchContent();
  }

  fetchContent = async () => {
    try {
      let apiCallReq = {
        method: "get",
        url: "static-content?name=services",
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
    const { mainSectionArr, otherSectionArr } = this.state;
    const newArr = chunk(otherSectionArr,3);
    return (
      <div id="shop">
        <DarkNav />

        <section className="shop-title ">
          <div className="container">
            <div className="row section-title">
              <h2>
                {Boolean(mainSectionArr.length) && mainSectionArr[0]?.title}
              </h2>
              <p className="sub-para">
                {Boolean(mainSectionArr.length) &&
                  mainSectionArr[0]?.description}
              </p>
            </div>
          </div>
        </section>
        <section className="shop primemedcontainer">
          <h2 className="hidden">Shop</h2>
          <div className="container">
            {
              

              newArr.map((row) => {
                return (
                  <div className="content row">
                    {
                      row.map((col,idx) => (
                        <GridItem
                          title={col.title}
                          subinfo={col.description}
                          price={false}
                          key={idx}
                        />
                      ))
                  }
                  </div>
                )
              })
            }
            
          </div>
          {/* <div className="content row">
              <GridItem
                title={"Sciton ProFractional Therapy"}
                subinfo={
                  "Profractional Therapy treats a fraction of the skin, stimulating new collagen growth and improving your skins tone, texture, fine lines, and acne scars. This treatment gives great results with minimal downtime."
                }
                price={false}
              />
              <GridItem
                title={"Sciton Forever Young BBL – Photofacial"}
                subinfo={
                  "Finally a treatment that can actually slow down the signs of aging and keep you forever young.   Forever Young BBL patients see improvement in full-face rejuvenation, skin texture and skin discolorations. Scientific evidence demonstrates regular maintenance treatments using Forever Young BBL rejuvenates skin and delays skin aging by restoring the gene expression pattern of aged human skin to resemble young skin."
                }
                price={false}
              />
              <GridItem
                title={"Prime Acne Treatments"}
                subinfo={
                  "Acne problems can really affect your appearance and self-confidence.  Prime is directed by a board certified immunologist and allergist with a fellowship in dermatology who combines the latest in lasers, peels, and medical grade products to clear up acne and erase any scarring left behind. Your treatment provider will customize a treatment plan that will deliver the results you are looking for"
                }
                price={false}
              />
            </div> */}
        </section>
        <Footer />
      </div>
    );
  }
}

export default Services;
