import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./addUser.css";
import { addUser, getUsers, editUser } from "../Services/api";

const initialValue = {
  productCategory: "",
  productDescription: "",
  productFeatures: "",
  productImages: "",
  productName: "",
  productSubcategory: "",
};
const AddUser = (props) => {
  var title="Add Product"
  useEffect(() => {
    if (props.useDataForEdit.isEdit == true) {
      title="Edit Product"
      loadUserDetails(props.useDataForEdit.id);
    }
  }, []);

  const loadUserDetails = async (id) => {
    const response = await getUsers(id);
    setFormData(response.data);
  };

  const editUserDetails = async () => {
    console.log(props.useDataForEdit.id);
    console.log(formData);
    const response = await editUser(props.useDataForEdit.id, formData);
  };

  const submit = () => {
    if (props.useDataForEdit.isEdit == true) {
      editUserDetails();
    } else {
      addUserDetails();
    }
    props.dataChildToParent(false);
  };
  const cancel = () => {
    
    props.dataChildToParent(false);
  };

  const addUserDetails = async () => {
    await addUser(formData);
  };

  const [formData, setFormData] = useState(initialValue);
  const {
    productCategory,
    productDescription,
    productFeatures,
    productImages,
    productName,
    productSubcategory,
  } = formData;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const handleChildToProp = () => {
    props.dataChildToParent(false);
  };
 

  return (
    <div className="main-container">
      <div className="formContainer">
        <h2 className="title">{title}</h2>
        <form >
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Product Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                className="inputFields"
                placeholder="Product Name"
                type="text"
                id="name"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalPassword"
          >
            <Form.Label column sm={2}>
              Product Features
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                className="inputFields"
                type="text"
                placeholder="Product Features"
                id="name"
                name="productFeatures"
                value={formData.productFeatures}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalPassword"
          >
            <Form.Label column sm={2}>
              Product Description
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                className="inputFields"
                type="text"
                placeholder=" Product Description"
                id="name"
                name="productDescription"
                value={formData.productDescription}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalPassword"
          >
            <Form.Label column sm={2}>
              Product Images
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                className="inputFields"
                type="text"
                placeholder="Product Images"
                id="name"
                name="productImages"
                value={formData.productImages}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalPassword"
          >
            <Form.Label column sm={2}>
              Product Category
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                className="inputFields"
                type="text"
                placeholder="Product Category"
                id="name"
                name="productCategory"
                value={formData.productCategory}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalPassword"
          >
            <Form.Label column sm={2}>
              Product Sub-category
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                className="inputFields"
                type="text"
                placeholder=" Product Sub-category"
                id="name"
                name="productSubcategory"
                value={formData.productSubcategory}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 3 }}>
              <Button type="submit" onClick={() => submit()}>
                Submit
              </Button>{" "}
              <Button onClick={() => cancel()}>cancel</Button>
            </Col>
          </Form.Group>
        </form>
      </div>
    </div>
  );
};
export default AddUser;
