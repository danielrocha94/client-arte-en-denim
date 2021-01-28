import React, {useState, useEffect} from 'react';
import {DataTable, DataTbody, DataThead, Header, Row, Datum, ColoredDatum, DataTableFooter} from '../../../components/Table';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import Moment from 'react-moment';
import 'moment-timezone';

const PaymentRows = (props) => {
  let [page, setPage] = useState({per: 10, current: 1, range: {min: 0, max: 10} });

  useEffect(() => {
    setPage(
      {...page,
        current: 1,
        range: {
          min: 0,
          max: 10
        }
      });
  }, [props.payments])

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
      range: {
        min: ((value-1) * page.per), 
        max: (value * 10)
      }
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
          <Header>Importe</Header>
          <Header>Descripcion</Header>
          <Header>Tipo</Header>
          <Header>Fecha de Documento</Header>
          <Header>Cuenta</Header>
          <Header>Estado</Header>
        </DataThead>
        <DataTbody>
          {props.payments.count > 0 && props.payments.rows.slice(page.range.min, page.range.max).map(payment => {
            return (
              <Row>
                <Datum>{payment.Nombre}</Datum>
                <Datum bold>{FormatMoney(payment.CuryOrigDocAmt)}</Datum>
                <Datum>{payment.RefNbr}</Datum>
                <Datum>{getDocTypeName(payment.DocType)}</Datum>
                <Datum>
                  <Moment
                    date={payment.DocDate.split("T")[0]}
                    format={"lll"} 
                    locale="es-mx" 
                    tz="America/Mexico_City"
                  />
                </Datum>
                <Datum>{payment.Cuenta}</Datum>
                <Datum><ColoredDatum variant="success" icon={faCheck}>Exitoso</ColoredDatum></Datum>
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