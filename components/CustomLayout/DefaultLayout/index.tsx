"use client";

import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Layout } from "antd";

const { Content } = Layout;

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Content style={{ background: "white" }}>{children}</Content>
      <Footer />
    </>
  );
};

export default DefaultLayout;