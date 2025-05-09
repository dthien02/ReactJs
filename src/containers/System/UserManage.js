import React, { Component, useImperativeHandle } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserManage.scss";
import {
  getAllUsers,
  createNewUserService,
  deleteUserService,
  editUserService,
} from "../../services/userService";
import ModalUser from "./ModalUser";
import ModalEditUser from "./ModalEditUser";
import { emitter } from "../../utils/emitter";

class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: [],
      isOpenModalUser: false,
      isOpenModalEditUser: false,
      userEdit: {},
    };
  }

  async componentDidMount() {
    await this.getAlUsersFromReact();
  }

  getAlUsersFromReact = async () => {
    let response = await getAllUsers("All");

    if (response && response.errCode === 0) {
      this.setState({
        arrUsers: response.users,
      });
    }
  };

  handleAddNewUser = () => {
    this.setState({ isOpenModalUser: true });
  };

  toggleUserModal = () => {
    this.setState({ isOpenModalUser: !this.state.isOpenModalUser });
  };

  toggleUserEditModal = () => {
    this.setState({ isOpenModalEditUser: !this.state.isOpenModalEditUser });
  };

  createNewUser = async (data) => {
    try {
      let response = await createNewUserService(data);

      if (response) {
        if (response.errCode !== 0) {
          alert(response.errMessage);
        } else {
          await this.getAlUsersFromReact();
          alert("Added new user!");
          this.setState({ isOpenModalUser: false });
          emitter.emit("EVENT_CLEAR_MODAL_DATA");
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  handleEditUser = (user) => {
    this.setState({ isOpenModalEditUser: true, userEdit: user });
  };

  doEditUser = async (user) => {
    try {
      let response = await editUserService(user);

      if (response) {
        if (response.errCode !== 0) {
          alert(response.errMessage);
        } else {
          await this.getAlUsersFromReact();
          alert("Updated.");
          this.setState({ isOpenModalEditUser: false });
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  handleDeleteUser = async (user) => {
    try {
      let response = await deleteUserService(user.id);
      if (response) {
        if (response.errCode !== 0) {
          alert(response.errMessage);
        } else {
          await this.getAlUsersFromReact();
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    let arrUsers = this.state.arrUsers;

    return (
      <div className="users-container">
        <ModalUser
          isOpen={this.state.isOpenModalUser}
          toggleFromParent={this.toggleUserModal}
          createNewUser={this.createNewUser}
        />
        {this.state.isOpenModalEditUser && (
          <ModalEditUser
            isOpen={this.state.isOpenModalEditUser}
            toggleFromParent={this.toggleUserEditModal}
            currentUser={this.state.userEdit}
            editUser={this.doEditUser}
          />
        )}
        <div className="title text-center">manage users</div>
        <div className="mx-1">
          <button
            onClick={() => this.handleAddNewUser()}
            className="btn-primary btn px-3"
          >
            <i className="fas fa-plus"></i> Add new user
          </button>
        </div>
        <div className="users-table mt-4 mx-1">
          <table id="customers">
            <tbody>
              <tr>
                <th>Email</th>
                <th>First name</th>
                <th>Last name</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
              {arrUsers &&
                arrUsers.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.email}</td>
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.address}</td>
                      <td>
                        <button
                          className="btn-edit"
                          onClick={() => this.handleEditUser(item)}
                        >
                          <i className="far fa-edit"></i>
                        </button>
                        <button
                          className="btn-delete"
                          onClick={() => this.handleDeleteUser(item)}
                        >
                          <i className="far fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
