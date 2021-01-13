import React from 'react';
import {DataTable, DataTbody, DataThead, Header, Row, Datum, ColoredDatum} from '../../../components/Table';
import {faCheck, faExclamationTriangle, faTimes} from '@fortawesome/free-solid-svg-icons';
import Moment from 'react-moment';

const PaymentRows = (props) => {
  const getDocTypeName = (type) => {
    let DocTypeObj = {
      PA: "Pago",
      PP: "Prepago",
    }
    return DocTypeObj[type];
  }
  return (
    <>
      <DataTable>
        <DataThead>
          <Header>Importe</Header>
          <Header>Estado</Header>
          <Header>Descripcion</Header>
          <Header>Tipo</Header>
          <Header>Fecha de Documento</Header>
          <Header>Cuenta</Header>
        </DataThead>
        <DataTbody>
          {props.payments.count > 0 && props.payments.rows.map(payment => {
            return (
              <Row>
                <Datum>${payment.CuryOrigDocAmt} MXN</Datum>
                <Datum><ColoredDatum variant="success" icon={faCheck}>Exitoso</ColoredDatum></Datum>
                <Datum>{payment.RefNbr}</Datum>
                <Datum>{getDocTypeName(payment.DocType)}</Datum>
                <Datum><Moment date={payment.DocDate} format={"lll"} locale="es-mx"/></Datum>
                <Datum>{payment.Cuenta}</Datum>
              </Row>
            )
          })}
        </DataTbody>
      </DataTable>
      <b>{props.payments.count || 0}</b> resultados
    </>
  )
}

export default PaymentRows;