import React from 'react';
import {DataTable, DataTbody, DataThead, Header, Row, Datum, ColoredDatum} from '../../../components/Table';
import {faCheck, faExclamationTriangle, faTimes} from '@fortawesome/free-solid-svg-icons';
import Moment from 'react-moment';

const BalanceRows = (props) => {
  const getDocTypeName = (type) => {
    let DocTypeObj = {
      IN: "Factura",
      RC: "Factura Recurrente",
      PA: "Pago",
      DM: "Debito Memo",
      CM: "Credito Memo",
      FI: "Cargo financiero",
      DA: "Descuento permitido", //(for AutoApply Customers only)
      CS: "Venta en efectivo",
      PP: "Prepago",
      NS: "NSF Check Reversal",
      RP: "Pago reclasificado",
      NC: "NSF Check charge",
      RF: "Reembolso",// - currently not used
      SB: "Cancelación de saldos pequeños", // - created by release process
    }
    return DocTypeObj[type];
  }
  return (
    <>
      <DataTable>
        <DataThead>
          <Header>Total</Header>
          <Header>Estado</Header>
          <Header>Balance debido</Header>
          <Header>Tipo</Header>
          <Header>Descripcion</Header>
          <Header>Fecha</Header>
        </DataThead>
        <DataTbody>
          {props.balances.count > 0 && props.balances.rows.map(balance => {
            return (
              <Row>
                <Datum>${balance.CuryOrigDocAmt} MXN</Datum>
                <Datum><ColoredDatum variant={balance.balance > 0 ? "warning":"success"} icon={faCheck}>{balance.balance > 0 ? "Pendiente" : "Exitoso" } </ColoredDatum></Datum>
                <Datum>{balance.balance}</Datum>
                <Datum>{getDocTypeName(balance.DocType)}</Datum>
                <Datum>{balance.RefNbr}</Datum>
                <Datum><Moment date={balance.DocDate} fromNow locale="es-mx"/></Datum>
              </Row>
            )
          })}
        </DataTbody>
      </DataTable>
      <b>{props.balances.count || 0}</b> resultados
    </>
  )
}

export default BalanceRows;