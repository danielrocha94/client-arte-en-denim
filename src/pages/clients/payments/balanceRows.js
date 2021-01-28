import React, {useState, useEffect} from 'react';
import {DataTable, DataTbody, DataThead, Header, Row, Datum, ColoredDatum, DataTableFooter} from '../../../components/Table';
import {faCheck, faExclamationTriangle, faTimes} from '@fortawesome/free-solid-svg-icons';
import Moment from 'react-moment';

const BalanceRows = (props) => {
  let [page, setPage] = useState({per: 10, current: 1, range: {min: 0, max: 10} });

  useEffect(() => {
    setPage({
      ...page,
      current: 1,
      range: {
        min: 0,
        max: 10,
      }
    });
  }, [props.balances])

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

  const handlePageChange = (e, value) => {
    setPage({
      ...page,
      current: value,
      range: {min: ((value-1) * page.per), max: (value * 10)}
    });
  }

  const FormatMoney = (num) => {
    return "$ "+num.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+" MXN"
  }

  return (
    <>
      <DataTable>
        <DataThead>
          <Header>Nombre</Header>
          <Header>Total</Header>
          <Header>Estado</Header>
          <Header>Balance debido</Header>
          <Header>Tipo</Header>
          <Header>Descripcion</Header>
          <Header>Fecha</Header>
        </DataThead>
        <DataTbody>
          {props.balances.count > 0 && props.balances.rows.slice(page.range.min, page.range.max).map(balance => {
            return (
              <Row>
                <Datum>{balance.Nombre}</Datum>
                <Datum bold>{FormatMoney(balance.CuryOrigDocAmt)}</Datum>
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
      <DataTableFooter
        data={props.balances}
        onChange={handlePageChange}
        page={page} />
    </>
  )
}

export default BalanceRows;