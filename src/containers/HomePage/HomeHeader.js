import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import logo from "../../assets/logo.svg";
import { FormattedMessage, FormattedRelativeTime } from "react-intl";
import { LANGUAGES } from "../../utils/constant";

import { changeLanguageApp } from "../../store/actions";

class HomeHeader extends Component {
  changeLanguage = (language) => {
    this.props.changeLanguageAppRedux(language);
  };

  render() {
    let language = this.props.lang;

    return (
      <React.Fragment>
        <div className="home-header-container">
          <div className="home-header-content">
            <div className="left-content">
              <i className="fas fa-bars"></i>
              <div className="header-logo">
                <img src={logo} alt="logo" />
              </div>
            </div>
            <div className="center-content">
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="home-header.speciality" />
                  </b>
                </div>
                <div className="subtitle">
                  <FormattedMessage id="home-header.search-doctor" />
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="home-header.health-facility" />
                  </b>
                </div>
                <div className="subtitle">
                  <FormattedMessage id="home-header.select-room" />
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="home-header.doctor" />
                  </b>
                </div>
                <div className="subtitle">
                  <FormattedMessage id="home-header.select-doctor" />
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="home-header.fee" />
                  </b>
                </div>
                <div className="subtitle">
                  <FormattedMessage id="home-header.check-health" />
                </div>
              </div>
            </div>
            <div className="right-content">
              <div className="support">
                <i className="fas fa-question-circle"></i>
                <FormattedMessage id="home-header.support" />
              </div>
              <div
                className={language === LANGUAGES.VI ? "lang current" : "lang"}
              >
                <span onClick={() => this.changeLanguage(LANGUAGES.VI)}>
                  VI
                </span>
              </div>
              <div
                className={language === LANGUAGES.EN ? "lang current" : "lang"}
              >
                <span onClick={() => this.changeLanguage(LANGUAGES.EN)}>
                  EN
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-header-banner">
          <div className="title1">
            <FormattedMessage id="banner.title1" />
          </div>
          <div className="title2">
            <FormattedMessage id="banner.title2" />
          </div>
          <div className="search">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Tìm kiếm" />
          </div>
          <div className="options">
            <div className="option-child">
              <div className="icon">
                <i className="far fa-hospital"></i>
              </div>
              <div className="text">
                <FormattedMessage id="banner.child1" />
              </div>
            </div>
            <div className="option-child">
              <div className="icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <div className="text">
                <FormattedMessage id="banner.child2" />
              </div>
            </div>
            <div className="option-child">
              <div className="icon">
                <i className="fas fa-procedures"></i>
              </div>
              <div className="text">
                <FormattedMessage id="banner.child3" />
              </div>
            </div>
            <div className="option-child">
              <div className="icon">
                <i className="fas fa-vial"></i>
              </div>
              <div className="text">
                <FormattedMessage id="banner.child4" />
              </div>
            </div>
            <div className="option-child">
              <div className="icon">
                <i className="fas fa-user-md"></i>
              </div>
              <div className="text">
                <FormattedMessage id="banner.child5" />
              </div>
            </div>
            <div className="option-child">
              <div className="icon">
                <i className="fas fa-vials"></i>
              </div>
              <div className="text">
                <FormattedMessage id="banner.child6" />
              </div>
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
    lang: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
