import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    table: {
      minWidth: '100%',
    },
    tableWrapper: {
      maxWidth: "1200px",
      margin: "100px auto"
    },
    tableBody: {
      '& td, & th': {
        border: '1px solid #ccc'
      }
    },
    tableRow: {
      border: '1px solid #ccc'
    }
  });
  

  export default useStyles;