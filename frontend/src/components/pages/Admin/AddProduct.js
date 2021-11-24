import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router";
const Container = styled.div`
  margin: 20px;
`;
const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [desc, setDesc] = useState("");
  const [publisher, setPublisher] = useState("");
  const [developer, setDeveloper] = useState("");
  const [discount, setDiscount] = useState("");
  const [files, setFiles] = useState();
  const [genres, setGenres] = useState([]);
  // const [checkedBox, setCheckedBox] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:3001/genres/").then((res) => {
      const data = res.data.results;
      // setCheckedBox(new Array(data.length).fill(false))
      setGenres(data);
    });
  }, []);
  function handlerChecked(e, position) {
    console.log(e.target.checked);

    const updated = genres.map((item, index) => {
      if (position === index) {
        item.checked = e.target.checked;
        return item;
      } else {
        return item;
      }
    });
    setGenres(updated);
    console.log(genres);
  }
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
    genres.forEach((genre) => {
      if (genre.checked && genre.checked === true) {
        data.append("genresId", genre.id);
      }
    });
    console.log(data.getAll("genresId"));
    console.log(data.get("name"));
    axios
      .post("http://localhost:3001/products/add", data)
      .then((res) => {
        console.log(res.data);
        navigate("/admin/products/");
      })
      .catch((err) => {
        console.log(err.response);
      });
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
        <div>
          {genres.map((genre, i) => {
            return (
              <label htmlFor={genre.name} className="block" key={i}>
                <input
                  type="checkbox"
                  className="mr-1"
                  id={genre.name}
                  name={genre.name}
                  value={genre.id}
                  onChange={(e) => handlerChecked(e, i)}
                />
                {genre.name}
              </label>
            );
          })}
        </div>
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
