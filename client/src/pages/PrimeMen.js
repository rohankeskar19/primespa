import React, { Component } from "react";

import DarkNav from "../components/DarkNav";
import Footer from "../components/Footer";

export class PrimeMen extends Component {
  componentDidMount() {
    window.executeHome();

    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div id="blog">
        <DarkNav />
        <section className="blog-title">
          <div className="container">
            <div className="row">
              <h2>Coming Soon</h2>
              {/* <p>Testosterone clinic</p> */}
              {/* <p>PRP injections</p> */}
            </div>
          </div>
        </section>
        <section className="blog-content">
          <h2 className="hidden">Prime Men</h2>

          {/* <div className="row">
            <div className="container">
              <section className="news container">
                <h2 className="hidden">News</h2>
                <div>
                  <div className="big-img">
                    <img
                      src="images/menspa.jpg"
                      alt=""
                      className="img img-responsive primemen-image"
                    />
                  </div>

                  <div className="clearfix" />
                  <h3>So, what IS The P-Shot?</h3>
                  <p>
                    <a
                      href="https://www.beverlyhillsrn.com/procedures/p-shot-for-men/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      The P-Shot, or Priapus Shot
                    </a>
                    , is a treatment for improved sexual performance in men, and
                    also for men who have{" "}
                    <a
                      href="https://www.mayoclinic.org/diseases-conditions/peyronies-disease/symptoms-causes/syc-20353468"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Peyronie’s disease
                    </a>
                    . It is especially beneficial to those who have lost
                    function due to an enlarged prostate, prostate cancer,
                    diabetes, drug side effects or other issues. The P-Shot is a
                    modern medical procedure that is relatively pain-free and
                    provides long-lasting results such as improved erection,
                    performance and even increasing penis size.
                  </p>
                </div>
                <div>
                  <div className="clearfix" />
                  <h3>Is The P-Shot Safe?</h3>
                  <p>
                    Because the shot uses the patient’s own platelets, there is
                    little chance of rejection or irritation. The P-shot is a
                    very safe procedure and has had few problems reported.
                    Safety is of paramount importance, so it is vital that
                    providers go through the{" "}
                    <a
                      href="https://www.beverlyhillsrn.com/training/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Peyronie’s disease proper training and certification
                      program
                    </a>
                    in order to complete the process safely and effectively.
                  </p>
                </div>
                <div>
                  <div className="clearfix" />
                  <h3>How Does The P-Shot Work?</h3>
                  <p>
                    The patient’s own blood is drawn like it would be for any
                    other procedure and the plasma-enriched growth factors are
                    harvested and turned into a shot that can be given for
                    improved sexual performance.
                  </p>
                </div>
                <div>
                  <div className="clearfix" />
                  <h3>Is The P-Shot Covered By Insurance?</h3>
                  <p>
                    The P-shot is not covered by insurance. However, we do offer
                    Care Credit payment plan to make payment easier.
                  </p>
                </div>
                <div>
                  <div className="clearfix" />
                  <h3>It’s time to get back in THE GAME!</h3>
                  <p>Erectile disfunction</p>
                  <p>Some common types of erectile dysfunction include:</p>
                  <ol className="types-list">
                    <li>
                      Inability to develop an erection despite sexual desire and
                      stimulation
                    </li>
                    <li>Inability to develop a rigid or hard erection</li>
                    <li>Inability to maintain an erection</li>
                  </ol>
                  <p>
                    OR maybe you’ve been diagnosed with Peyronie's disease or
                    are having symptoms of this disease. Peyronie's
                    (pay-roe-NEEZ) disease is the development of fibrous scar
                    tissue inside the penis that causes curved, painful
                    erections. Penises vary in shape and size, and having a
                    curved erection isn't necessarily a cause for concern. But
                    Peyronie's disease causes a significant bend or pain in some
                    men.
                  </p>
                  <p>
                    This can prevent you from having sex or might make it
                    difficult to get or maintain an erection (erectile
                    dysfunction). For many men, Peyronie's disease also causes
                    stress and anxiety.
                  </p>
                  <p>
                    Peyronie's disease sometimes goes away on its own. But in
                    most cases, it will remain stable or worsen. Treatment might
                    be needed if the curvature is severe enough that it prevents
                    successful sexual intercourse.
                  </p>
                  <p>
                    If you are experiencing any of the above, and it’s
                    negatively affecting the quality of your life or your
                    relationship, it may be time to see a medical professional.
                    At Prime Medical Spa we understand that one treatment
                    protocol is not perfect for everyone. We offer at least
                    three treatment options, depending on your symptoms, health
                    and goals. Our options include:
                  </p>
                  <ol className="types-list">
                    <li>Oral medicines (Dispensed in our office)</li>
                    <li>Penile injections</li>
                    <li>Testosterone therapy</li>
                  </ol>
                </div>
              </section>
            </div>
          </div> */}
        </section>
        <Footer />
      </div>
    );
  }
}

export default PrimeMen;
