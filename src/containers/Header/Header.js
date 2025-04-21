import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions";
import Navigator from "../../components/Navigator";
import { adminMenu } from "./menuApp";
import "./Header.scss";

import { LANGUAGES } from "../../utils/constant";
import { FormattedMessage } from "react-intl";

class Header extends Component {
  render() {
    const { processLogout, userInfo } = this.props;

    let handleChangeLanguage = (language) => {
      this.props.changeLanguageAppRedux(language);
    };

    return (
      <div className="header-container">
        {/* thanh navigator */}
        <div className="header-tabs-container">
          <Navigator menus={adminMenu} />
        </div>

        <div className="languages">
          <span className="welcome">
            <FormattedMessage id="home-header.welcome" />{" "}
            {userInfo && userInfo.firstName
              ? this.props.userInfo.firstName
              : ""}
          </span>
          <span
            className={
              this.props.language === LANGUAGES.VI ? "lang current" : "lang"
            }
            onClick={() => handleChangeLanguage(LANGUAGES.VI)}
          >
            VI
          </span>
          <span
            className={
              this.props.language === LANGUAGES.EN ? "lang current" : "lang"
            }
            onClick={() => handleChangeLanguage(LANGUAGES.EN)}
          >
            EN
          </span>

          {/* nút logout */}
          <div
            className="btn btn-logout"
            onClick={processLogout}
            title="Log out"
          >
            <i className="fas fa-sign-out-alt"></i>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
    userInfo: state.user.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processLogout: () => dispatch(actions.processLogout()),
    changeLanguageAppRedux: (language) =>
      dispatch(actions.changeLanguageApp(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
