"use client";

import React, { useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Layout } from "antd";
import useIsMobile from "@/hooks/useIsMobile";
import { useRecoilState, useSetRecoilState } from "recoil";
import { collapseState, isMobileState, menuState } from "@/recoil/states";
import MobileNav from "@/components/MobileNav";
import Banner from "@/components/Main/Banner";
import { usePathname } from "next/navigation";

const { Content } = Layout;

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  const mobile = useIsMobile();
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useRecoilState(isMobileState);
  const setCollapsed = useSetRecoilState<boolean>(collapseState);
  const setMenuList = useSetRecoilState(menuState);
  const bannerViewPages = ['/', '/realty', '/jobs'];

  useEffect(() => {
    setCollapsed(false);

    if (mobile) setIsMobile(true);
    else setIsMobile(false);
  }, [mobile]);

  useEffect(() => {
    setMenuList([
      {
        key: '/',
        label: '중고거래',
        url: '/'
      },
      {
        key: '/realty',
        label: '부동산',
        url: '/realty'
      },
      {
        key: '/jobs',
        label: '아르바이트',
        url: '/jobs'
      },
    ])
  }, [])

  return (
    <>
      <Header />
      {bannerViewPages?.includes(pathname) && <Banner path={pathname} />}
      <Content>{children}</Content>
      <Footer />
      {isMobile && <MobileNav />}
    </>
  );
};

export default DefaultLayout;