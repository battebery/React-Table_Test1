import React from "react";
import namor from "namor";
import "./index.css";

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  const statusChance = Math.random();
  return {
    firstName: namor.generate({ words: 1, numbers: 0 }),
    lastName: namor.generate({ words: 1, numbers: 0 }),
    age: Math.floor(Math.random() * 30),
    visits: Math.floor(Math.random() * 100),
    progress: Math.floor(Math.random() * 100),
    status:
      statusChance > 0.66
        ? "relationship"
        : statusChance > 0.33 ? "complicated" : "single"
  };
};

export function makeData(len = 5553) {
  return range(len).map(d => {
    return {
      ...newPerson(),
      children: range(10).map(newPerson)
    };
  });
}

export const Logo = () =>
  <div style={{ margin: '1rem auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
    For more examples, visit {''}
  <br />
    <a href="https://github.com/react-tools/react-table" target="_blank">
      <img
        src="https://github.com/react-tools/media/raw/master/logo-react-table.png"
        style={{ width: `150px`, margin: ".5em auto .3em" }}
      />
    </a>
  </div>;

export const Tips = () =>
  <div style={{ textAlign: "center" }}>
    <em>Tip: Hold shift when sorting to multi-sort!</em>
  </div>;

export const bidItemRows = [
  {
    id: "1000",
    name: "TestA1",
    qty: 1,
    price: 12.00,
    per: 1,
    total: 12.00,
    raw: [
      {
        id: 0,
        nameRaw: "raw0",
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
      },
      {
        id: 2,
        nameRaw: "raw2",
        qtyRaw: 1,
        priceRaw: 4.00,
        totalRaw: 4.00
      }
    ]
  },
  {
    id: "1001",
    name: "TestA2",
    qty: 2,
    price: 8.00,
    per: 1,
    total: 16.00,
    raw: [
      {
        id: 0,
        nameRaw: "raw0",
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
