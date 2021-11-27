import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
const Container = styled.div``;
const SideBar = styled.div`
  margin-top: 20px;
  width: 200px;
  display: flex;
  flex-direction: column;
  background-color: #f1f1f1;
  border-right: 1px solid rgba(0, 0, 0, 0.3);
  height: 500px;
  padding: 8px 12px;
`;
const Admin = ({ user }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!user || user?.role !== "admin") {
      navigate("/");
    }
  }, [navigate, user]);
  return (
    <Container>
      <SideBar>
        <Link to="/Products">Products</Link>
        <Link to="/Users">Users</Link>
      </SideBar>
    </Container>
  );
};

export default Admin;
