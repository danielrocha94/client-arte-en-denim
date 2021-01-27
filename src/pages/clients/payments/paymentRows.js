import React, {useState} from 'react';
import {DataTable, DataTbody, DataThead, Header, Row, Datum, ColoredDatum, DataTableFooter} from '../../../components/Table';
import {faCheck, faExclamationTriangle, faTimes} from '@fortawesome/free-solid-svg-icons';
import Moment from 'react-moment';

const PaymentRows = (props) => {
  let [page, setPage] = useState({per: 10, current: 1, range: {min: 0, max: 10} });

  const getDocTypeName = (type) => {
    let DocTypeObj = {
      PA: "Pago",
      PP: "Prepago",
    }
    return DocTypeObj[type];
  }

  const handlePageChange = (e, value) => {
    setPage({
      ...page,
      current: value,
      range: {min: ((value-1) * page.per), max: (value * 10)}
    });
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
          {props.payments.count > 0 && props.payments.rows.slice(page.range.min, page.range.max).map(payment => {
            return (
              <Row>
                <Datum bold>${payment.CuryOrigDocAmt} MXN</Datum>
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
      <DataTableFooter
        data={props.payments}
        onChange={handlePageChange}
        page={page} />
    </>
  )
}

export default PaymentRows;