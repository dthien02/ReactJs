import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";

class Handbook extends Component {
  render() {
    return (
      <div className="section-handbook section-share">
        <div className="section-container">
          <div className="section-header">
            <span className="title-section">Cẩm nang</span>
            <button className="btn-section">Xem thêm</button>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              <div className="section-custom">
                <div className="bg-img section-handbook" />
                <div>Cơ xương khớp 1</div>
              </div>
              <div className="section-custom">
                <div className="bg-img section-handbook" />
                <div>Cơ xương khớp 1</div>
              </div>
              <div className="section-custom">
                <div className="bg-img section-handbook" />
                <div>Cơ xương khớp 1</div>
              </div>
              <div className="section-custom">
                <div className="bg-img section-handbook" />
                <div>Cơ xương khớp 1</div>
              </div>
              <div className="section-custom">
                <div className="bg-img section-handbook" />
                <div>Cơ xương khớp 1</div>
              </div>
              <div className="section-custom">
                <div className="bg-img section-handbook" />
                <div>Cơ xương khớp 1</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Handbook);
