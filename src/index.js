import React from "react";
import { render } from "react-dom";
import { makeData, Logo, Tips, bidItemRows } from "./Utils";
import _ from 'lodash'

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: bidItemRows
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "Name",
              accessor: "name"
            },
            {
              Header: "Qty",
              accessor: "qty"
            },
            {
              Header: "Price",
              accessor: "price"
            },
            {
              Header: "Total",
              accessor: "total"
            },
            {
              Header: "Name",
              accessor: "name"
            }
          ]}
          pivotBy={["name"]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />
        <Tips />
        <Logo />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
