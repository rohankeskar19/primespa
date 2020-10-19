import React, { Component } from "react";
import Footer from "../components/Footer";
import DarkNav from "../components/DarkNav";
import ServicesItem from "../components/ServicesItem";

export class PrimeSpa extends Component {
  componentDidMount() {
    window.executeHome();

    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div id="gallery">
        <DarkNav />
        <section className="photo-gallery-title">
          <div className="container">
            <div className="row section-title">
              <h2>PRIME SPA</h2>
              <p className="sub-para">
                We all desire clear, radiant skin. With numerous treatment
                options and a multitude of products available in the market, you
                are maybe left asking “What’s best for me?”   To help ease the
                confusion, we offer complimentary consultations to educate you
                about what’s going on with your skin and how we can best work to
                achieve your desired results.  Services include injectables,
                skin resurfacing, micro-needling, laser hair removal, acne
                treatments, and much more.
              </p>
            </div>
          </div>
        </section>

        <section className="services">
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
              subtitle={
                "The award-winning HydraFacial® advances skin health by merging invigorating spa therapies with advanced medical technology. This facial takes non-invasive skin rejuvenation to a whole new level. In clinical studies performed by leading U.S. doctors, the HydraFacial® was shown to provide better results than many other skin rejuvenation devices, and is the only hydradermabrasion treatment that uses the patented 4-in-1 Vortex Technology™. The HydraFacial MD® proprietary skin solutions are clinically formulated using advanced ingredients to target specific skin concerns including uneven tone and texture, fine lines and wrinkles, blemishes, and dehydrated skin."
              }
              align1={"left"}
              align2={"right"}
              image_class={"hydrafacial"}
            />
            <ServicesItem
              heading_hidden={"Dermaplane"}
              heading={"Dermaplane"}
              subtitle={
                "Dermaplaning is a simple and safe procedure for exfoliating the epidermis and ridding the skin of fine vellus hair or peach fuzz. There is no downtime and gives you immediate results. $35 per facial."
              }
              align1={"right"}
              align2={"left"}
              image_class={"acne"}
            />
            <ServicesItem
              heading_hidden={"Waxing"}
              heading={"Waxing"}
              subtitle={
                "Waxing provides smooth, silky, hair-free skin for a longer period of time than shaving. Waxing also does not cause stubble associated with shaving.  This system is self-preserving anti-bacterial/anti-microbial so it’s safe, clean and germ free.   The next time you need a brow or lip wax, give this a try.  Brow wax – $15 Lip wax – $12"
              }
              align1={"left"}
              align2={"right"}
              image_class={"botox"}
            />
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default PrimeSpa;
