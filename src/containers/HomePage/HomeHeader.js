import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";

class HomeHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="home-header-container">
          <div className="home-header-content">
            <div className="left-content">
              <i className="fas fa-bars"></i>
              <div className="header-logo"></div>
            </div>
            <div className="center-content">
              <div className="child-content">
                <div>
                  <b>Chuyên khoa</b>
                </div>
                <div className="subtitle">Tìm bác sĩ theo chuyên khoa</div>
              </div>
              <div className="child-content">
                <div>
                  <b>Cơ sở y tế</b>
                </div>
                <div className="subtitle">Chọn bệnh viện phòng khám</div>
              </div>
              <div className="child-content">
                <div>
                  <b>Bác sĩ</b>
                </div>
                <div className="subtitle">Chọn bác sĩ giỏi</div>
              </div>
              <div className="child-content">
                <div>
                  <b>Gói khám</b>
                </div>
                <div className="subtitle">Khám sức khỏe tổng quát</div>
              </div>
            </div>
            <div className="right-content">
              <div className="support">
                <i className="fas fa-question-circle"></i>Hỗ trợ
              </div>
              <div className="flag">VN</div>
            </div>
          </div>
        </div>
        <div className="home-header-banner">
          <div className="title1">nền tảng y tế</div>
          <div className="title2">chăm sóc sức khỏe toàn diện</div>
          <div className="search">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Tìm kiếm" />
          </div>
          <div className="options">
            <div className="option-child">
              <div className="icon">
                <i className="far fa-hospital"></i>
              </div>
              <div className="text">Khám chuyên khoa</div>
            </div>
            <div className="option-child">
              <div className="icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <div className="text">Khám từ xa</div>
            </div>
            <div className="option-child">
              <div className="icon">
                <i className="fas fa-procedures"></i>
              </div>
              <div className="text">Khám tổng quát</div>
            </div>
            <div className="option-child">
              <div className="icon">
                <i className="fas fa-vial"></i>
              </div>
              <div className="text">Xét nghiệm y học</div>
            </div>
            <div className="option-child">
              <div className="icon">
                <i className="fas fa-user-md"></i>
              </div>
              <div className="text">Sức khỏe tinh thần</div>
            </div>
            <div className="option-child">
              <div className="icon">
                <i className="fas fa-vials"></i>
              </div>
              <div className="text">Khám nha khoa</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
