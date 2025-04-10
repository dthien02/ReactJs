import React, { Component } from "react";
import { connect } from "react-redux";
import "./Speciality.scss";
import { FormattedMessage } from "react-intl";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import specialityImg from "../../../assets/speciality/1.jpg";

class Speciality extends Component {
  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };

    return (
      <div className="section-speciality">
        <div className="speciality-container">
          <div className="speciality-header">
            <span className="title-section">Chuyên khoa phổ biến</span>
            <button className="btn-section">Xem thêm</button>
          </div>
          <div className="speciality-body">
            <Slider {...settings}>
              <div className="speciality-custom">
                <div className="bg-img" />
                <div className="test">Cơ xương khớp 1</div>
              </div>
              <div className="speciality-custom">
                <div className="bg-img" />
                <div className="test">Cơ xương khớp 2</div>
              </div>
              <div className="speciality-custom">
                <div className="bg-img" />
                <div className="test">Cơ xương khớp 3</div>
              </div>
              <div className="speciality-custom">
                <div className="bg-img" />
                <div className="test">Cơ xương khớp 4</div>
              </div>
              <div className="speciality-custom">
                <div className="bg-img" />
                <div className="test">Cơ xương khớp 5</div>
              </div>
            </Slider>
          </div>
          <div style={{ height: "300px" }}></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    lang: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Speciality);
