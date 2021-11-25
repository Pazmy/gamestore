import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div`
  background-color: #2a2a2a;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  margin-bottom: 30px;
`;
const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Cart = styled.div`
  display: flex;
  align-items: center;
  margin: 0 24px;
`;
const User = styled.div`
  display: flex;
  align-items: center;
`;

const Dropdown = styled.div`
  position: relative;
`;
const DropdownContent = styled.div`
  position: absolute;
  display: none;
  min-width: 120px;
  background-color: #2a2a2a;
  color: white;
  transform: translateY(15px);
  /* padding: 12px; */
  border: 1px solid rgba(0, 0, 0, 0.5);

  &.show {
    display: block;
  }
`;
const Header = () => {
  const [user, setUser] = useState(false);
  useEffect(() => {
    setUser(false);
  }, []);
  const toggleDropdown = useRef(false);
  const handleDropdown = () => {
    toggleDropdown.current.classList.toggle("show");
  };
  return (
    <Container className="px-8 py-4">
      <Left>
        <Link className="mx-2" to="/">
          Gamestore
        </Link>
        <Link className="mx-2" to="/">
          Store
        </Link>
      </Left>
      <Right>
        {user ? (
          <Dropdown>
            <User>
              <button className="" onClick={handleDropdown}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M12 2c3.032 0 5.5 2.467 5.5 5.5 0 1.458-.483 3.196-3.248 5.59 4.111 1.961 6.602 5.253 7.482 8.909h-19.486c.955-4.188 4.005-7.399 7.519-8.889-1.601-1.287-3.267-3.323-3.267-5.61 0-3.033 2.468-5.5 5.5-5.5zm0-2c-4.142 0-7.5 3.357-7.5 7.5 0 2.012.797 3.834 2.086 5.182-5.03 3.009-6.586 8.501-6.586 11.318h24c0-2.791-1.657-8.28-6.59-11.314 1.292-1.348 2.09-3.172 2.09-5.186 0-4.143-3.358-7.5-7.5-7.5z" />
                </svg>
              </button>
              <span className="ml-2">User1</span>
            </User>
            <DropdownContent ref={toggleDropdown}>
              <Link
                className="block text-center hover:bg-gray-700 p-4 text-gray-200"
                to="/users/info"
              >
                Account
              </Link>
              <Link
                className="block text-center hover:bg-gray-700 p-4 text-gray-200"
                to="/users/info"
              >
                Orders
              </Link>
              <Link
                className="block text-center hover:bg-gray-700 p-4 text-gray-200"
                to="/users/info"
              >
                Log out
              </Link>
            </DropdownContent>
          </Dropdown>
        ) : (
          <Link to="/login">Log in</Link>
        )}

        <Cart>
          <Link to="/cart" className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" />
            </svg>
          </Link>
          0
        </Cart>
      </Right>
    </Container>
  );
};

export default Header;
