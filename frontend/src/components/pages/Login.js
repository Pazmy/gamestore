import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Loader from "../Loader/Loader";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 24px;
`;
const Wrapper = styled.div`
  margin: 0 auto;
  flex: 1;
  max-width: 500px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 48px 80px;
`;
const Text = styled.span`
  font-size: 2rem;
  font-weight: 500;
`;
const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  input[type="email"],
  input[type="password"] {
    background-color: #e6e6e6;
  }
`;

const Button = styled.button``;
const BottomText = styled.div`
  text-align: center;
  width: 100%;
`;
const ErrMsg = styled.span`
  color: red;
  font-weight: 300;
  display: inline-block;
  margin-bottom: 5px;
`;
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  async function handleClick(e) {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:3001/users/login", {
        email,
        password,
      });
      console.log(response);
      // if (response.data.status === "error") setErr(response.data.message);
      setLoading(false);
    } catch (error) {
      if (error.response.data.message) {
        setErr(error.response.data.message);
      }
      setLoading(false);
    }
  }
  return (
    <Container>
      <Wrapper className="shadow">
        <Text>Login</Text>
        <FormWrapper>
          <label htmlFor="email" className="block my-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            className="py-2 px-2 rounded w-80"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password" className="block my-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            className="py-2 px-2 rounded w-80"
            onChange={(e) => setPassword(e.target.value)}
          />

          {err ? <ErrMsg>{err}</ErrMsg> : ""}
          <Button
            onClick={handleClick}
            className="bg-black text-white w-full rounded p-2 mt-4"
          >
            {loading ? <Loader></Loader> : "Login"}
          </Button>
        </FormWrapper>

        <BottomText>
          <span style={{ display: "inline" }}>Don't have an account? </span>
          <Link to={"/register"} className="underline font-bold black">
            Create one
          </Link>
        </BottomText>
      </Wrapper>
    </Container>
  );
};

export default Login;
