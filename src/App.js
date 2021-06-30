import React from 'react';
import {Form, Col, Button, Row} from "react-bootstrap"
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

function FormExample() {

  //const dispatch = useDispatch();

  const { handleSubmit } = useForm("");

  const handleSubmitAfipActivityForm = (formData) => {

    console.log(formData)
    //dispatch(TryPutReferenceDomicile(selectedTransact.id, formData));
    console.log("hace algo")
  };

  return (
  <Form onSubmit={handleSubmit(handleSubmitAfipActivityForm)}>
    <Row>
      <Col>
        <Form.Group>
          <Form.Label>Nro de Finca*:</Form.Label>
          <Form.Control
            name="nroFinca"
            type="number"
            placeholder="Nro de Finca"
            defaultValue="la finca"
          />
        </Form.Group>
      </Col>
    </Row>

    <Row className="form-header">
      <Col className="col-sm-11 d-inline">
        <h7>
          <b>Referencias de Domicilio</b>
        </h7>
      </Col>
    </Row>
    <Row>
      <Col sm={6}>
        <Form.Group>
          <Form.Label>Calle Norte (1)*:</Form.Label>
          <Form.Control
            name="referenciaCalleNorte"
            type="text"
            defaultValue="la calle"
            placeholder="Calle Norte"
            disabled={false}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Calle Oeste (2)*:</Form.Label>
          <Form.Control
            name="referenciaCalleOeste"
            type="text"
            placeholder="Calle Oeste"
            defaultValue="la calle oeste"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Calle Este (3)*:</Form.Label>
          <Form.Control
            name="referenciaCalleEste"
            type="text"
            placeholder="Calle Este"
            defaultValue="la calle este"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Calle Sur (4)*:</Form.Label>
          <Form.Control
            name="referenciaCalleSur"
            type="text"
            placeholder="Calle Sur"
            defaultValue="la callse sur"
          />
        </Form.Group>
      </Col>
    </Row>
    <Row className="mt-4 mb-4">
      <Col>
        <Button variant="danger">
          Volver
        </Button>
        <Button
          variant="primary"
          type="submit"
          className="mt-3 float-right"
        >
          Guardar
        </Button>
      </Col>
    </Row>
  </Form>
  );
}


export default FormExample;
