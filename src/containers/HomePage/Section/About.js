import React, { Component } from "react";
import { connect } from "react-redux";

class About extends Component {
  render() {
    return (
      <div className="section-about section-share">
        <div className="section-container">
          <div className="section-header">
            <div className="title-section">Truyền thông nói về Linda</div>
          </div>
          <div className="section-body">
            <div className="content-left">
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/m5ICBdIio78"
                title="Linda x Bạch Tuyết - Snow White Gạch Ống"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <div className="content-right">
              <img src="https://anhdep.edu.vn/upload/2024/08/meme-linda-la-gi-kham-pha-bo-suu-tap-meme-linda-hai-huoc-0.webp"></img>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
