import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./table.css";
import { getUsers, deleteUser } from "../Services/api";
import AddUser from "../AddUser/addUser";
function Table() {
  const [showChild, setShowChild] = useState(false);
  const [users, setUsers] = useState([]);
  const [editUsers, seteditUsers] = useState([]);

  const editUserData = async (id) => {
    let editData = { isEdit: true, id: id };

    seteditUsers(editData);
    setShowChild(true);
  };

  const addProductData = async () => {
    let addData = { isEdit: false };

    seteditUsers(addData);
    setShowChild(true);
  };
  const handleChildToParent = async() => {
  
    getAllUsers();
      await setShowChild(false);
  }
  useEffect(() => {
    getAllUsers();
  }, []);

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };

  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
    console.log(response.data);
  };
  return (
    <div className="product-container">
      <h2>Product Table</h2>

      <table>
        <tr>
          <th>Sr. No</th>
          <th>Product Name </th>
          <th>Product Features</th>
          <th>Product Description</th>
          <th>Product Images</th>
          <th>Product Category</th>
          <th>Product Sub-category</th>
          <th>Action</th>
        </tr>

        {users.map((user, index) => (
          <tr key={user.id}>
            <td>{user._id}</td> {/* change it to user.id to use JSON Server */}
            <td>{user.productName}</td>
            <td>{user.productFeatures}</td>
            <td>{user.productDescription}</td>
            <td>{user.productImages}</td>
            <td>{user.productCategory}</td>
            <td>{user.productSubcategory}</td>
            <td>
              <Button
                color="primary"
                variant="contained"
                style={{ marginRight: 10 }}
                onClick={() => editUserData(user._id)}
              >
                Edit
              </Button>
              <Button
                color="secondary"
                variant="contained"
                onClick={() => deleteUserData(user._id)}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </table>
      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 0, offset: 0 }}>
          <Button type="submit" onClick={() => addProductData()}>
            Add{" "}
          </Button>
        </Col>
      </Form.Group>

      {showChild && (
        <AddUser
          dataChildToParent={handleChildToParent}
          openEditForm={true}
          useDataForEdit={editUsers}
        />
      )}
    </div>
  );
}
export default Table;
