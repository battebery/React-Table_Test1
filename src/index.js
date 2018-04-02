import React from "react";
import { render } from "react-dom";
import { makeData, Logo, Tips } from "./Utils";
import _ from 'lodash'

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

const bidItemRows = [
    {id: "1000",
    name: "TestA1",
    qty: 1,
    price: 8.00,
    per: 1,
    total: 8.00,
    raw: [
      {
      id:0,
      nameRaw: "raw1",
      qtyRaw: 2,
      priceRaw: 1.00,
      totalRaw: 2.00
      },
      {
        id: 1,
        nameRaw: "raw1",
        qtyRaw: 3,
        priceRaw: 2.00,
        totalRaw: 6.00
      }
    ]
    },
    {
      id: "1001",
      name: "TestA2",
      qty: 1,
      price: 8.00,
      per: 1,
      total: 8.00,
      raw: [
        {
          id: 0,
          nameRaw: "raw1",
          qtyRaw: 2,
          priceRaw: 1.00,
          totalRaw: 2.00
        },
        {
          id: 1,
          nameRaw: "raw1",
          qtyRaw: 3,
          priceRaw: 2.00,
          totalRaw: 6.00
        }
      ]
    }
  ];


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
