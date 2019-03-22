import "./style";
import { Component, render } from "preact";
import Web3 from "web3";

export default class App extends Component {
  render(props, { results = [] }) {
    console.log(Web3);

    return <div>test</div>;
  }
}

if (typeof window !== "undefined") {
  render(<App />, document.getElementById("root"));
}
