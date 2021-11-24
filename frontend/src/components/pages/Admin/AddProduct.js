import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
const Container = styled.div`
  margin: 20px;
`;
const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [stock, setStock] = useState();
  const [desc, setDesc] = useState("");
  const [publisher, setPublisher] = useState("");
  const [developer, setDeveloper] = useState("");
  const [discount, setDiscount] = useState("");
  const [files, setFiles] = useState();
  function handlerChange(e, fieldName) {
    switch (fieldName) {
      case "name":
        setName(e.target.value);
        break;
      case "price":
        setPrice(e.target.value);
        break;
      case "stock":
        setStock(e.target.value);
        break;
      case "desc":
        setDesc(e.target.value);
        break;
      case "publisher":
        setPublisher(e.target.value);
        break;
      case "developer":
        setDeveloper(e.target.value);
        break;
      case "discount":
        setDiscount(e.target.value);
        break;
      case "image":
        setFiles(e.target.files);
        break;
      default:
    }
  }
  function submitHandler(e) {
    e.preventDefault();
    const data = new FormData();
    for (let file of files) {
      data.append("image", file);
    }
    data.append("name", name);
    data.append("price", price);
    data.append("stock", stock);
    data.append("developer", developer);
    data.append("publisher", publisher);
    data.append("discount", discount);
    data.append("desc", desc);
    axios
      .post("http://localhost:3001/products/add", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
    // console.log(data.getAll("image"));
  }
  return (
    <Container>
      <form
        className=""
        action="http://localhost:3001/products/add"
        method="post"
        encType="multipart/form-data"
      >
        <label htmlFor="name" className="block">
          Name
        </label>
        <input
          type="text"
          name="name"
          className="bg-gray-200 mb-2"
          value={name}
          onChange={(e) => handlerChange(e, "name")}
        />
        <label htmlFor="" className="block">
          Price
        </label>
        <input
          type="number"
          name="price"
          className="bg-gray-200 mb-2"
          value={price}
          onChange={(e) => handlerChange(e, "price")}
        />
        <label htmlFor="" className="block">
          Stock
        </label>
        <input
          type="number"
          name="stock"
          className="bg-gray-200 mb-2"
          value={stock}
          onChange={(e) => handlerChange(e, "stock")}
        />
        <label htmlFor="" className="block">
          Publisher
        </label>
        <input
          type="text"
          name="publisher"
          className="bg-gray-200 mb-2"
          value={publisher}
          onChange={(e) => handlerChange(e, "publisher")}
        />
        <label htmlFor="" className="block">
          Developer
        </label>
        <input
          type="text"
          name="developer"
          className="bg-gray-200 mb-2"
          value={developer}
          onChange={(e) => handlerChange(e, "developer")}
        />
        <label htmlFor="" className="block">
          Discount
        </label>
        <input
          type="text"
          name="discount"
          className="bg-gray-200 mb-2"
          value={discount}
          onChange={(e) => handlerChange(e, "discount")}
        />
        <label htmlFor="" className="block">
          Description
        </label>
        <textarea
          type="text"
          name="description"
          className="bg-gray-200 mb-2 block w-96 h-32"
          value={desc}
          onChange={(e) => handlerChange(e, "desc")}
        />
        <input
          type="file"
          multiple
          name="image"
          onChange={(e) => handlerChange(e, "image")}
        />
        <input
          type="submit"
          className="p-2 bg-blue-400"
          onClick={submitHandler}
        />
      </form>
    </Container>
  );
};

export default AddProduct;
