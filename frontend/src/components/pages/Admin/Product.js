import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { formatter } from "../../../helper/formatter";
const Container = styled.div`
  padding: 20px 35px;
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
const Product = ({ user }) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (!user || user?.role !== "admin") {
      navigate("/");
    }
    axios
      .get("http://localhost:3001/products/")
      .then((res) => {
        setProducts(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [navigate, user]);
  function handlerDelete(id) {
    axios
      .delete(`http://localhost:3001/products/delete/${id}`)
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <Container>
      <h1 className="bold text-4xl">List Products</h1>
      <Link
        to="/admin/products/add"
        className="bg-blue-500 px-2 py-1 inline-block my-2 text-white rounded"
      >
        Add Product
      </Link>
      <Table className="table-auto">
        <thead>
          <tr>
            <th>No</th>
            <th className="w-1/2">Product Name</th>
            <th className="w-1/4">Image</th>
            <th className="w-1/2">Price</th>
            <th className="w-1/2">Stock</th>
            <th className="w-1/2">Developer</th>
            <th className="w-1/2">Publisher</th>
            <th className="w-1/2">Discount</th>
            <th className="w-1/2">Genres</th>
            <th className="w-1/2">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, i) => {
            const imgPrimary = product.images.find((img) => {
              return img.primary ? img : false;
            });

            return (
              <tr key={product.id}>
                <td>{(i += 1)}</td>
                <td>{product.name}</td>
                <td>
                  <img
                    className="inline-block"
                    src={"http://localhost:3001/" + imgPrimary?.path}
                    alt={imgPrimary?.filename}
                    width="150"
                    height="auto"
                  />
                </td>
                <td>{formatter.format(product.price)}</td>
                <td>{product.stock}</td>
                <td>{product.developer}</td>
                <td>{product.publisher}</td>
                <td>{product.discount}</td>
                <td>{product.genres.join(",")}</td>
                <td>
                  <div className="flex justify-center items-center">
                    <Link
                      to={`/admin/products/edit/${product.id}`}
                      className="bg-blue-700 text-white mx-2 px-4 py-2 rounded"
                    >
                      Edit
                    </Link>
                    <button
                      className="bg-red-700 text-white mx-2 px-4 py-2 rounded"
                      onClick={() => handlerDelete(product.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default Product;
