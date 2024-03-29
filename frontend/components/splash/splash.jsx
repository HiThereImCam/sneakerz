import React, { Component, Suspense } from "react";
import { Link } from "react-router-dom";
import FrontPageCarousel from "./front_page_carousel";

class Splash extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
    };

    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    this.props.getAdidasFrontPageCollection();
    this.props.getJordanFrontPageCollection();
    this.props.getSbsFrontPageCollection();
    this.props.getYeezyFrontPageCollection();
    window.scrollTo(0, 0);
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY > 10) {
      document.querySelector(".nav-container").className =
        "nav-container scroll";
    } else {
      document.querySelector(".nav-container").className = "nav-container";
    }
  }

  render() {
    let {
      adidasFrontPageCollection,
      jordanFrontPageCollection,
      sbsFrontPageCollection,
      yeezyFrontPageCollection,
      getAdidasCollection,
      getYeezyCollection,
      getSbsCollection,
      getJordanCollection,
    } = this.props;
    return (
      <div className="splash-main-container">
        <Suspense fallback={<div>Loading...</div>}>
          <div className="front-page-img-container">
            <Link to="/sneaker/CT8012011" className="splash-img-link">
              <img
                loading="eager"
                src={window.images.jubilee11s}
                alt="Jubilee 11s"
                style={this.state.loaded ? {} : { display: "none" }}
                onLoad={() => this.setState({ loaded: true })}
              ></img>
            </Link>
          </div>
          <div className="sneaker-front-page-container">
            <div className="sneaker-header-container">
              <h3>Air Jordans</h3>
              <div className="see-all-button-container">
                <Link to="/sneakers/collections">
                  <button
                    onClick={() => getJordanCollection()}
                    className="see-all-button"
                  >
                    See All
                  </button>
                </Link>
              </div>
            </div>
            <div className="front_page_collection">
              <FrontPageCarousel sneakers={jordanFrontPageCollection} />
            </div>
          </div>

          <div className="front-page-img-container">
            <img
              src={window.images.sbs}
              alt="Sbs_Skateboard"
              loading="eager"
              style={this.state.loaded ? {} : { display: "none" }}
              onLoad={() => this.setState({ loaded: true })}
            ></img>
          </div>
          <div className="sneaker-front-page-container">
            <div className="sneaker-header-container">
              <h3>Nostalgic Nike Sb Collection</h3>
              <div className="see-all-button-container">
                <Link to="/sneakers/collections">
                  <button
                    onClick={() => getSbsCollection()}
                    className="see-all-button"
                  >
                    See All
                  </button>
                </Link>
              </div>
            </div>
            <div className="front_page_collection">
              <FrontPageCarousel sneakers={sbsFrontPageCollection} />
            </div>
          </div>

          <div className="front-page-img-container">
            <Link to="/sneaker/BY2911" className="splash-img-link">
              <img
                loading="eager"
                src={window.images.sns}
                alt="SNS Ultraboosts"
                style={this.state.loaded ? {} : { display: "none" }}
                onLoad={() => this.setState({ loaded: true })}
              ></img>
            </Link>
          </div>
          <div className="sneaker-front-page-container">
            <div className="sneaker-header-container">
              <h3>Adidas Collection</h3>
              <div className="see-all-button-container">
                <Link to="/sneakers/collections">
                  <button
                    onClick={() => getAdidasCollection()}
                    className="see-all-button"
                  >
                    See All
                  </button>
                </Link>
              </div>
            </div>
            <div className="front_page_collection">
              <FrontPageCarousel sneakers={adidasFrontPageCollection} />
            </div>
          </div>

          <div className="front-page-img-container">
            <Link to="/sneaker/GY0260" className="splash-img-link">
              <img
                src={window.images.kyanite}
                alt="Yeezy Kyanite"
                loading="eager"
                style={this.state.loaded ? {} : { display: "none" }}
                onLoad={() => this.setState({ loaded: true })}
              ></img>
            </Link>
          </div>
          <div className="sneaker-front-page-container">
            <div className="sneaker-header-container">
              <h3>Yeezy Collection</h3>
              <div className="see-all-button-container">
                <Link to="/sneakers/collections">
                  <button
                    onClick={() => getYeezyCollection()}
                    className="see-all-button"
                  >
                    See All
                  </button>
                </Link>
              </div>
            </div>
            <div className="front_page_collection">
              <FrontPageCarousel sneakers={yeezyFrontPageCollection} />
            </div>
          </div>
        </Suspense>
      </div>
    );
  }
}

export default Splash;
