import constants from './constants';

const theme = {
  bg: {
    border: "#465671",
    button: "#ffc107",
    buttonActive: "#E0A700",
    cancel: '#9fb3ca',
    danger: "#dc3545",
    default: "#e8e8e8",
    defaultClear: "#24344D",
    disabled: "#4c4f54",
    error: "rgb(179,20,18)",
    errorHover: "#c24241",
    errorImg: "linear-gradient(to left, #f6aaa9, #fad4d4)",
    header: "#222831",
    hoverMenuItem: "#1c2636",
    input: "white",
    leftSidebar: "#4e525a",
    modal: "#222e4c",
    panel: "#c6c6c6",
    pink: "#f8d7da",
    pending:"rgb(234,151,21)",
    pendingHover: "#BB7911",
    sidebar: "#131c29",
    success: "green",
    tableEven: "#e8e8e8",
    tableOdd: "white",
    tableHover: "#d8e3ec"
  },
  form: {
    color: {
      inputBorder: "1px solid #324462",
      inputBorderHover: "1px solid #465671",
      disabledBorder: "#2f4060",
    },
  },
  color: {
    lightShadow: "rgba(0,0,0,0.1)",
    modalBorder: "rgba(255, 255, 255, 0.12)",
  },
  text: {
    font: "Calibri",
    color: {
      default: "rgba(225,235,245,.7)",
      light: "#bdd1f8",
      panel: "black",
      label: "white",
      hover: "rgba(225,235,245,1)",
      dim: "rgba(225,235,245,.45)",
      danger: "#721c24",
      disabled: "white",
      error: "white",
      input: "black",
      info: "#white",
      danger: "#EC5E69",
      success: "white",
      successGreen: "green",
      disabled: "rgba(225,235,245,.9)",
      pending: "white",
      formTitle: "#007bff",
      tableHover: "#323232"
    },
    size: "14px",
  },
  cons: {
    ...constants,
  }
}

export default theme;