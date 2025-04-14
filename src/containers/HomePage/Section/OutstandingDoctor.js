import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";

class OutstandingDoctor extends Component {
  render() {
    return (
      <div className="section-outstanding-doctor section-share">
        <div className="section-container">
          <div className="section-header">
            <span className="title-section">Bác sĩ nổi bật</span>
            <button className="btn-section">Xem thêm</button>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              <div className="section-custom">
                <div className="outer-border">
                  <div className="bg-img section-outstanding-doctor" />
                  <div className="position">
                    <div>GS. TS. Pusheen</div>
                    <div>Cơ rô chuồn bích</div>
                  </div>
                </div>
              </div>
              <div className="section-custom">
                <div className="outer-border">
                  <div className="bg-img section-outstanding-doctor" />
                  <div className="position">
                    <div>GS. TS. Pusheen</div>
                    <div>Cơ rô chuồn bích</div>
                  </div>
                </div>
              </div>
              <div className="section-custom">
                <div className="outer-border">
                  <div className="bg-img section-outstanding-doctor" />
                  <div className="position">
                    <div>GS. TS. Pusheen</div>
                    <div>Cơ rô chuồn bích</div>
                  </div>
                </div>
              </div>
              <div className="section-custom">
                <div className="outer-border">
                  <div className="bg-img section-outstanding-doctor" />
                  <div className="position">
                    <div>GS. TS. Pusheen</div>
                    <div>Cơ rô chuồn bích</div>
                  </div>
                </div>
              </div>
              <div className="section-custom">
                <div className="outer-border">
                  <div className="bg-img section-outstanding-doctor" />
                  <div className="position">
                    <div>GS. TS. Pusheen</div>
                    <div>Cơ rô chuồn bích</div>
                  </div>
                </div>
              </div>
              <div className="section-custom">
                <div className="outer-border">
                  <div className="bg-img section-outstanding-doctor" />
                  <div className="position">
                    <div>GS. TS. Pusheen</div>
                    <div>Cơ rô chuồn bích</div>
                  </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(OutstandingDoctor);
