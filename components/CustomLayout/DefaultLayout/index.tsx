"use client";

import React, { useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Layout } from "antd";
import useIsMobile from "@/hooks/useIsMobile";
import { useRecoilState, useSetRecoilState } from "recoil";
import { collapseState, isMobileState, menuState } from "@/recoil/states";
import MobileNav from "@/components/MobileNav";

const { Content } = Layout;

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  const mobile = useIsMobile();
  const [isMobile, setIsMobile] = useRecoilState(isMobileState);
  const setCollapsed = useSetRecoilState<boolean>(collapseState);
  const setMenuList = useSetRecoilState(menuState);

  useEffect(() => {
    setCollapsed(false);

    if (mobile) setIsMobile(true);
    else setIsMobile(false);
  }, [mobile]);

  useEffect(() => {
    setMenuList([
      {
        key: '/',
        label: '메인',
        url: '/'
      },
      {
        key: '/item/list',
        label: '거래 목록',
        url: '/item/list'
      },
      {
        key: '/item/reg',
        label: '거래 등록/수정',
        url: '/item/reg'
      },
      {
        key: '/guide',
        label: '사용 가이드',
        url: '/guide'
      },
    ])
  }, [])

  return (
    <>
      <Header />
      <Content style={{ background: "#F5F5F7" }}>{children}</Content>
      <Footer />
      {isMobile && <MobileNav />}
    </>
  );
};

export default DefaultLayout;