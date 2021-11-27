import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { formatter } from "../../helper/formatter";
const Container = styled.div`
  padding: 0 40px;
`;
const Table = styled.table`
  &,
  th,
  td {
    border: 1px solid black;
    border-collapse: collapse;
  }
  th {
    text-align: left;
    padding: 8px 8px;
  }
  td {
    padding: 8px 8px;
  }
`;
const Order = ({ user }) => {
  let email = user.email;
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios.post("http://localhost:3001/orders/user", { email }).then((res) => {
      console.log(res.data);
      setOrders(res.data.results);
    });
  }, [email]);
  return (
    <Container>
      <h1 className="bold text-4xl mb-2">List Products</h1>
      <Table className="table-auto">
        <thead>
          <tr>
            <th>No</th>
            <th className="w-1/2">Products</th>
            <th className="w-1/2">Date</th>
            <th className="w-1/2">Total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, i) => {
            return (
              <tr key={i}>
                <td>{(i += 1)}</td>
                <td>
                  <ul>
                    {order.products.map((product) => (
                      <li>- {product.name}</li>
                    ))}
                  </ul>
                </td>
                <td>
                  {new Date(order.orderDetail.createdAt)
                    .toString()
                    .slice(0, 15)}
                </td>

                <td>{formatter.format(order.orderDetail.total)}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default Order;
