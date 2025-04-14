import React, { Component } from "react";
import { connect } from "react-redux";

class HomeFooter extends Component {
  render() {
    return (
      <div className="home-footer">
        <p>
          &copy;de Coco{" "}
          <a
            href="https://i.pinimg.com/originals/e2/03/9c/e2039c9c49130816247c460cd7b4f3d7.jpg"
            target="_blank"
          >
            Visit Linda Cẩm Lan <i>sục</i>
          </a>
        </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
