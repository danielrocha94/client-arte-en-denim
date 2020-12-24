import React, {useState} from 'react';
import {Document, Page, pdfjs} from '@react-pdf/renderer';

const PDFRender = (props) => {
  const [pageNumber, setPageNumber] = useState(1);
  return (
    <Document
      file={props.url}
      onLoadSuccess={props.onPdfLoad}
    >
      <Page pageNumber={pageNumber}/>
    </Document>
  )
}

export default PDFRender;