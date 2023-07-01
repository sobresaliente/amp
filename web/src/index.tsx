
import { render } from "react-dom";
import classes from './index.module.scss';
import App from "./App";

render(
  <div className={classes.btn}>Help me<App /></div>, document.getElementById("root")
)
