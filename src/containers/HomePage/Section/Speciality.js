import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";

class Speciality extends Component {
  render() {
    return (
      <div className="section-speciality section-share">
        <div className="section-container">
          <div className="section-header">
            <span className="title-section">Chuyên khoa phổ biến</span>
            <button className="btn-section">Xem thêm</button>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              <div className="section-custom">
                <div className="bg-img section-speciality" />
                <div>Cơ xương khớp 1</div>
              </div>
              <div className="section-custom">
                <div className="bg-img section-speciality" />
                <div>Cơ xương khớp 2</div>
              </div>
              <div className="section-custom">
                <div className="bg-img section-speciality" />
                <div>Cơ xương khớp 3</div>
              </div>
              <div className="section-custom">
                <div className="bg-img section-speciality" />
                <div>Cơ xương khớp 4</div>
              </div>
              <div className="section-custom">
                <div className="bg-img section-speciality" />
                <div>Cơ xương khớp 5</div>
              </div>
            </Slider>
          </div>
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
