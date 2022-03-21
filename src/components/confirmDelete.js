import React from "react";
import { useHistory } from "react-router-dom";

function ConfirmDelete(props) {
  let history = useHistory();
  console.log(props);
  return <div>{history.push("/")}</div>;
}

export default ConfirmDelete;
