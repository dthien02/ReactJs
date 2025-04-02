import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { emitter } from "../../utils/emitter";

class ModalUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
      phonenumber: "",
      gender: 1,
      roleId: 1,
    };

    this.listenToEmitter();
  }

  listenToEmitter() {
    emitter.on("EVENT_CLEAR_MODAL_DATA", () => {
      this.setState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        address: "",
        phonenumber: "",
        gender: 1,
        roleId: 1,
      });
    });
  }

  componentDidMount() {}

  handleOnChangeInput = (event, id) => {
    let copyState = { ...this.state };
    copyState[id] = event.target.value;

    this.setState({ ...copyState });
  };

  checkValidInput = () => {
    const inputArr = [
      "email",
      "password",
      "firstName",
      "lastName",
      "address",
      "phonenumber",
      "gender",
      "roleId",
    ];
    for (let i = 0; i < inputArr.length; i++) {
      if (!this.state[inputArr[i]]) {
        alert("Missing: " + inputArr[i]);
        return false;
      }
    }
    return true;
  };

  handleAddNewUser = () => {
    let isValid = this.checkValidInput();

    if (isValid) {
      this.props.createNewUser(this.state);
    }
  };

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
              <input
                type="email"
                onChange={(event) => this.handleOnChangeInput(event, "email")}
                value={this.state.email}
              />
            </div>
            <div className="input-container">
              <label>Password</label>
              <input
                type="password"
                onChange={(event) =>
                  this.handleOnChangeInput(event, "password")
                }
                value={this.state.password}
              />
            </div>
          </div>
          <div className="modal-user-body">
            <div className="input-container">
              <label>First name</label>
              <input
                type="text"
                onChange={(event) =>
                  this.handleOnChangeInput(event, "firstName")
                }
                value={this.state.firstName}
              />
            </div>
            <div className="input-container">
              <label>Last name</label>
              <input
                type="text"
                onChange={(event) =>
                  this.handleOnChangeInput(event, "lastName")
                }
                value={this.state.lastName}
              />
            </div>
          </div>
          <div className="modal-user-body">
            <div className="input-container max-width-input">
              <label>Address</label>
              <input
                type="text"
                onChange={(event) => this.handleOnChangeInput(event, "address")}
                value={this.state.address}
              />
            </div>
          </div>
          <div className="modal-user-body">
            <div className="input-container">
              <label>Phonenumber</label>
              <input
                type="number"
                onChange={(event) =>
                  this.handleOnChangeInput(event, "phonenumber")
                }
                value={this.state.phonenumber}
              />
            </div>
            <div className="select-container">
              <div className="min-width-input">
                <label>Gender</label>
                <select
                  onChange={(event) =>
                    this.handleOnChangeInput(event, "gender")
                  }
                >
                  <option value="1">Male</option>
                  <option value="0">Female</option>
                </select>
              </div>
              <div className="min-width-input">
                <label>Role</label>
                <select
                  onChange={(event) =>
                    this.handleOnChangeInput(event, "roleId")
                  }
                >
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
            onClick={() => this.handleAddNewUser()}
          >
            Add user
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
