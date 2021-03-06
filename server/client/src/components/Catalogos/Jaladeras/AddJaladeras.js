import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createJaladera } from "../../../actions/jaladerasAction";
import { agregar } from "../../JaladeraFunctions";
import Navbar from "components/Navbar";
import DarkFooter from "../../Footers/DarkFooter";
import { Button } from "antd";

import {
  Label,
  FormText,
  FormGroup,
  Col,
  Nav,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row
} from "reactstrap";

class AddJaladera extends Component {
  constructor() {
    super();
    this.state = {
      Codigo: "",
      Nombre: "",
      Costo: "",
      Factor: "",
      PrecioVenta: "",
      Activo: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newJaladera = {
      Codigo: this.state.Codigo,
      Nombre: this.state.Nombre,
      Costo: this.state.Costo,
      Factor: this.state.Factor,
      PrecioVenta: this.state.PrecioVenta,
      Activo: this.state.Activo
    };

    // console.log(newBisagra);
    this.props.createJaladera(newJaladera, this.props.history);

    // agregar(newBisagra).then(res => {
    //   this.props.history.push(`/catalogos`);
    // });
  }

  render() {
    return (

      <div>
      <Navbar />
      <div id="wrap" className="content">
        <div id="main">
          <div
            className="section section-signup"
            style={{
              backgroundPosition: "top center",
              minHeight: "700px"
            }}
          >
            <Container>
              <Card className="text-left">
                <CardHeader>
                  <Nav
                    className="nav-tabs-neutral justify-content-left"
                    data-background-color="blue"
                    role="tablist"
                    tabs
                  >
                    Agregar Jaladera
                  </Nav>
                </CardHeader>
                <CardBody>
                  <Form noValidate onSubmit={this.onSubmit}>
                    <div className="form-row">
                      <FormGroup className="col-md-6 ">
                        <label
                          htmlFor="Codigo"
                          className="justify-content-left"
                        >
                          Código:
                        </label>
                        <Input
                          type="text"
                          className="form-control"
                          name="Codigo"
                          value={this.state.Codigo}
                          onChange={this.onChange}
                        ></Input>
                      </FormGroup>
                      <FormGroup className="col-md-6">
                        <label htmlFor="Nombre">
                          Nombre:
                        </label>
                        <Input
                          type="text"
                          className="form-control"
                          name="Nombre"
                          value={this.state.Nombre}
                          onChange={this.onChange}
                        ></Input>
                      </FormGroup>
                    </div>

                    <div className="form-row">
                      <FormGroup className="col-md-6">
                        <label htmlFor="Costo">
                          Costo:
                        </label>
                        <Input
                          type="number"
                          className="form-control"
                          name="Costo"
                          value={this.state.Costo}
                          onChange={this.onChange}
                        ></Input>
                      </FormGroup>

                      <FormGroup className="col-md-6">
                        <label htmlFor="Factor">
                          Factor:
                        </label>
                        <Input
                          className="rounded-mb"
                          type="text"
                          className="form-control"
                          name="Factor"
                          value={this.state.Factor}
                          onChange={this.onChange}
                        ></Input>
                      </FormGroup>

                      <FormGroup className="col-md-6">
                        <label htmlFor="PrecioVenta">
                          Precio de Venta:
                        </label>
                        <Input
                          type="number"
                          className="form-control"
                          name="PrecioVenta"
                          value={this.state.PrecioVenta}
                          onChange={this.onChange}
                        ></Input>
                      </FormGroup>
                    </div>
                    <FormGroup></FormGroup>
                    <CardFooter className="text-left">
                      <Button color="info" type="primary" htmlType="submit">
                        Registrar
                      </Button>
                      <span>  </span>
                      <Link to="/jaladeras/index">
                        <Button color="danger" type="danger">
                          Cancelar
                        </Button>
                      </Link>
                    </CardFooter>
                  </Form>
                </CardBody>
              </Card>

  
            </Container>
          </div>
        </div>
      </div>

      <DarkFooter />
    </div>
    
    );
  }
}

AddJaladera.propTypes = {
  createJaladera: PropTypes.func.isRequired
};



export default connect(null, { createJaladera })(AddJaladera);
