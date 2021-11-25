import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
const Container = styled.div`
  padding: 0 120px;
`;
const Section1 = styled.div``;
const Content = styled.div`
  background-color: #d5d9e1;
  padding: 24px;
  margin-bottom: 18px;
  height: auto;
`;

const EditProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [desc, setDesc] = useState("");
  const [publisher, setPublisher] = useState("");
  const [developer, setDeveloper] = useState("");
  const [discount, setDiscount] = useState("");
  //   const [files, setFiles] = useState();
  //   const [genres, setGenres] = useState([]);
  //   const [checkedBox, setCheckedBox] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(
    () =>
      axios
        .get(`http://localhost:3001/products/edit/${id}`)
        .then((res) => {
          const product = res.data.product;
          //   const allGenres = res.data.allGenres;
          setName(product.name);
          setPrice(product.price);
          setStock(product.stock);
          setPublisher(product.publisher);
          setDeveloper(product.developer);
          setDiscount(product.discount);
          setDesc(product.desc);
          //   setCheckedBox(product.genres);
          //   setGenres(allGenres);
        })
        .catch((err) => console.log(err)),
    [id]
  );
  //   function handlerChecked(e, position) {
  //     console.log(e.target.checked);

  //     const updated = genres.map((item, index) => {
  //       if (position === index) {
  //         item.checked = e.target.checked;
  //         return item;
  //       } else {
  //         return item;
  //       }
  //     });
  //     setGenres(updated);
  //     console.log(genres);
  //   }
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
      //   case "image":
      //     setFiles(e.target.files);
      //     break;
      default:
    }
  }
  function submitHandler(e) {
    e.preventDefault();
    // const data = new FormData();
    // for (let file of files) {
    //   data.append("image", file);
    // }
    // data.append("name", name);
    // data.append("price", price);
    // data.append("stock", stock);
    // data.append("developer", developer);
    // data.append("publisher", publisher);
    // data.append("discount", discount);
    // data.append("desc", desc);
    // genres.forEach((genre) => {
    //   if (genre.checked && genre.checked === true) {
    //     data.append("genresId", genre.id);
    //   }
    // });
    // console.log(data.getAll("genresId"));
    // console.log(data.get("name"));
    const data = { name, price, stock, desc, developer, publisher, discount };
    axios
      .put(`http://localhost:3001/products/edit/${id}`, data)
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
      <Section1>
        <h2 className="text-2xl font-bold mb-2">Edit Product</h2>
        <Content className="rounded px-4 py-8">
          <form className="flex">
            <div className="mr-4">
              <label htmlFor="name" className="block my-2">
                Product Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                className="py-2 px-2 rounded w-80"
                onChange={(e) => handlerChange(e, "name")}
              />
              <label htmlFor="price" className="block my-2">
                Price
              </label>
              <input
                type="number"
                id="price"
                value={price}
                className="py-2 px-2 rounded w-80"
                onChange={(e) => handlerChange(e, "price")}
              />
              <label htmlFor="stock" className="block my-2">
                Stock
              </label>
              <input
                type="number"
                id="stock"
                value={stock}
                className="py-2 px-2 rounded w-80"
                onChange={(e) => handlerChange(e, "stock")}
              />
              <label htmlFor="publisher" className="block my-2">
                Publisher
              </label>
              <input
                type="text"
                id="publisher"
                value={publisher}
                className="py-2 px-2 rounded w-80"
                onChange={(e) => handlerChange(e, "publisher")}
              />
              <label htmlFor="developer" className="block my-2">
                Developer
              </label>
              <input
                type="text"
                id="developer"
                value={developer}
                className="py-2 px-2 rounded w-80"
                onChange={(e) => handlerChange(e, "developer")}
              />
              <label htmlFor="discount" className="block my-2">
                Discount
              </label>
              <input
                type="text"
                id="discount"
                value={discount}
                className="py-2 px-2 rounded w-80"
                onChange={(e) => handlerChange(e, "discount")}
              />
              <label htmlFor="desc" className="block my-2">
                Description
              </label>
              <textarea
                type="text"
                name="description"
                className=" py-2 px-2 rounded block w-96 h-32"
                value={desc}
                onChange={(e) => handlerChange(e, "desc")}
              />
              <input
                type="submit"
                className="p-2 bg-blue-400 cursor-pointer rounded mt-2"
                onClick={submitHandler}
              />
            </div>
            {/* <div className="my-2">
              <span className="block mt-2 ">Genre</span>
              {genres.map((genre, i) => {
                let isCheck;
                checkedBox.forEach((item) => {
                  if (genre.name === item) isCheck = true;
                });
                return (
                  <label htmlFor={genre.name} className="block" key={i}>
                    <input
                      type="checkbox"
                      className="mr-1"
                      id={genre.name}
                      name={genre.name}
                      value={genre.id}
                      checked={isCheck}
                      onChange={(e) => handlerChecked(e, i)}
                    />
                    {genre.name}
                  </label>
                );
              })}
            </div> */}
          </form>
        </Content>
      </Section1>
    </Container>
  );
};

export default EditProduct;
