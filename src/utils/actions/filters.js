export const sortRows = (rows, column) => {
  let sortedRows = rows.rows.sort((a, b) => {
    if (a["CuryOrigDocAmt"] < b["CuryOrigDocAmt"]) {
      return 1;
    }
    if (a["CuryOrigDocAmt"] > b["CuryOrigDocAmt"]) {
      return -1;
    }
    return 0;
  });
  
  return {
    ...rows,
    rows: sortedRows
  }
}

export const filterOptions = {
  'number': {
    'less_than': {
      'method': (col, val) => col < val,
      'name': "Es menos que",
    },
    'more_than': {
      'method': (col, val) => col > val,
      'name': "Es más que",
    },
    'between': {
      'method': (col, val) => col > val[0] && col < val[1],
      'name': "Está entre",
    },
    'equals': {
      'method': (col, val) => parseFloat(col) === parseFloat(val),
      'name': "Es igual a",
    },
  },
  'date': {
    'in_the_last':  {
      'method': (col, val) => new Date(new Date().setDate(new Date().getDate() - (parseInt(val)+1))) <= new Date(col),
      'name': "En los ultimos",
    },
    'equals':  {
      'method': (col, val) => new Date(val).getTime() === new Date(col).getTime(),
      'name': "El dia",
    },
    'between':  {
      'method': (col, val) => new Date(val[0]) <= new Date(col) && new Date(val[1]) >= new Date(col),
      'name': "Entre las fechas",
    },
    'after':  {
      'method': (col, val) => new Date(val) < new Date(col),
      'name': "Después de",
    },
    'before':  {
      'method': (col, val) => new Date(val) > new Date(col),
      'name': "Antes de",
    },
  },
  'text': {
    'starts_with':  {
      'method': (col, val) => col.indexOf(val) === 0,
      'name': "Que empieze con",
    },
    'contains':  {
      'method': (col, val) => col.indexOf(val) >= 0,
      'name': "Que contenga",
    },
    'not_contains':  {
      'method': (col, val) => col.indexOf(val) < 0,
      'name': "Que no contenga",
    },
    'ends_with':  {
      'method': (col, val) => col.trim().length - val.length === col.indexOf(val),
      'name': "Que termine con",
    },
  },
  'status': {
    'successful': () => {},
    'pending': () => {},
    'canceled': () => {},
  }
}

const formatValue = (value) => {
  let onlyNumbers = /^\d*(\.\d+)?$/;

  if(typeof value === "string") {
    value = value.trim().toLowerCase();
  }

  if(typeof value === "number" || value.match(onlyNumbers)) {
    value = parseInt(value);
  }
  return value;
}

const compareRow = (row, filter) => {
  //between val = [min, max];
  let col = row[filter.col];
  let val = filter.value;

  //NOTE: validate col and val types;
  col = formatValue(col);
  val = formatValue(val);
  // make all strings to lower case; trim cols;
  let accessMethod = filterOptions[filter.data][filter.type].method;
  return accessMethod(col, val)
}

export const filterRows = (rows, filters) => {
  // for each filter, run the filter, then update the remaining rows,
  // and then run the next filter
  let remainingRows = rows.rows;

  filters.forEach(filter => {
    remainingRows = remainingRows.filter(row => {
      return compareRow(row, filter);
    })
  })

  return {
    ...rows,
    rows: remainingRows
  }
}