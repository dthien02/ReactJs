import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  toggle = () => {
    this.props.toggleFromParent();
  };

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => this.toggle()}
        className="modal-user-container"
        size="lg"
      >
        <ModalHeader toggle={() => this.toggle()}>Add new user</ModalHeader>
        <ModalBody>
          <div className="modal-user-body">
            <div className="input-container">
              <label>Email</label>
              <input type="text" />
            </div>
            <div className="input-container">
              <label>Password</label>
              <input type="password" />
            </div>
          </div>
          <div className="modal-user-body">
            <div className="input-container">
              <label>First name</label>
              <input type="text" />
            </div>
            <div className="input-container">
              <label>Last name</label>
              <input type="text" />
            </div>
          </div>
          <div className="modal-user-body">
            <div className="input-container max-width-input">
              <label>Address</label>
              <input type="text" />
            </div>
          </div>
          <div className="modal-user-body">
            <div className="input-container">
              <label>Phonenumber</label>
              <input type="text" />
            </div>
            <div className="select-container">
              <div className="min-width-input">
                <label>Gender</label>
                <select>
                  <option value="1">Male</option>
                  <option value="0">Female</option>
                </select>
              </div>
              <div className="min-width-input">
                <label>Role</label>
                <select>
                  <option value="1">Admin</option>
                  <option value="2">Doctor</option>
                  <option value="3">Patient</option>
                </select>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            className="px-3"
            onClick={() => this.toggle()}
          >
            Save
          </Button>{" "}
          <Button
            color="secondary"
            className="px-3"
            onClick={() => this.toggle()}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
