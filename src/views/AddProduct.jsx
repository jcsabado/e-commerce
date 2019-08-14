import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";
import { Card, Button, message, Modal } from "antd";

import { FormInputs } from "components/FormInputs/FormInputs.jsx";

//TRANSACTIONS
import { CreateData } from "../data-store/transactions";
//ACTIONS
import { CreateActions } from "../data-store/actions";
import { Ecomm } from "../data-store/schema.string";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validating: false,
      stagedAddData: {}
    };
  }

  onSave = e => {
    const { doCreate } = this.props;
    let onSaveBtn = document.getElementById("onSaveBtn"),
      formTag = onSaveBtn.closest("form"),
      userInputs = formTag.querySelectorAll("textarea, input"),
      errorCounter = 0,
      validField = 0,
      { validating, stagedAddData } = this.state;

    if (!validating) {
      this.setState({
        validating: true
      });
      // Check each field for an error
      for (var i = 0; i < userInputs.length; i += 1) {
        let fieldValue = userInputs[i].value,
          fieldName = userInputs[i].name;

        if (fieldValue === "") {
          userInputs[i].classList.add("has-error");
          userInputs[i].parentElement.classList.add("has-error");
          errorCounter = errorCounter += 1;
        } else {
          userInputs[i].classList.remove("has-error");
          userInputs[i].parentElement.classList.remove("has-error");
          errorCounter -= 1;
          validField += 1;
          if (fieldName === "") {
            stagedAddData["description"] = fieldValue.trim();
          } else {
            stagedAddData[fieldName] =
              fieldName === "price"
                ? // ? parseFloat(fieldValue).toFixed(2)
                  parseInt(fieldValue)
                : fieldValue.trim();
          }
        }
      }

      // Show error if exist or submit the collected data to our server
      if (validField < userInputs.length) {
        message.error("Error accured while saving, please check all fields.");
        this.setState({
          validating: false
        });
      } else {
        let data = {
          fields: stagedAddData
        };
        doCreate(Ecomm.addEcommItems, data);
      }
    }
  };

  //COMPONENT LIFE-CYCLES
  componentWillReceiveProps(nextProps) {
    const {
      create: {
        created,
        creating,
        response: responseCreate,
        data: createdData
      },
      resetCreate
    } = nextProps;

    if (created && !creating) {
      let onSaveBtn = document.getElementById("onSaveBtn"),
        formTag = onSaveBtn.closest("form"),
        userInputs = formTag.querySelectorAll("textarea, input");

      for (var i = 0; i < userInputs.length; i += 1) {
        userInputs[i].value = "";
      }
      this.setState(
        {
          validating: false,
          stagedAddData: {}
        },
        e => {
          Modal.success({
            title: "Process complete!",
            content: "You have successfully created/added a new product."
          });
        }
      );
    }
  }

  componentWillUnmount() {
    this.props.resetCreate();
  }

  render() {
    const { validating } = this.state;
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Card title="Add New">
              <form onSubmit={e => e.preventDefault()}>
                <FormInputs
                  ncols={["col-md-6", "col-md-6"]}
                  properties={[
                    {
                      label: "Product name",
                      type: "text",
                      bsClass: "form-control",
                      placeholder: "Product name",
                      name: "name",
                      required: true
                    },
                    {
                      label: "Product price",
                      type: "number",
                      bsClass: "form-control",
                      placeholder: "Product price",
                      name: "price",
                      required: true
                    }
                  ]}
                />
                <FormInputs
                  ncols={["col-md-12"]}
                  properties={[
                    {
                      label: "Product image (URL)",
                      type: "text",
                      bsClass: "form-control",
                      placeholder: "Image URL",
                      name: "image",
                      required: true
                    }
                  ]}
                />
                <Row>
                  <Col md={12}>
                    <FormGroup controlId="formControlsTextarea">
                      <ControlLabel>Product Description</ControlLabel>
                      <FormControl
                        required
                        rows="5"
                        rows="description"
                        componentClass="textarea"
                        bsClass="form-control"
                        placeholder="Write the product description"
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col md={3} className="text-right pull-right">
                    <Button
                      type="primary"
                      size="large"
                      block
                      id="onSaveBtn"
                      onClick={this.onSave}
                      disabled={validating}
                    >
                      Save
                    </Button>
                  </Col>
                </Row>

                <div className="clearfix" />
              </form>
            </Card>
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    create: state.CreateProp
  };
};
const mapDispatchToProps = dispatch => {
  return {
    doCreate: (schemaName, data) => {
      dispatch(CreateData(schemaName, data));
    },
    resetCreate: () => {
      dispatch(CreateActions.createReset());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProduct);
