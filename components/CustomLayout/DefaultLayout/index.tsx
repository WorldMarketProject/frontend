"use client";

import React, { useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Layout } from "antd";
import useIsMobile from "@/hooks/useIsMobile";
import { useSetRecoilState } from "recoil";
import { collapseState } from "@/recoil/states";
import MobileNav from "@/components/MobileNav";
import Banner from "@/components/Main/Banner";
import { usePathname } from "next/navigation";
import ChatDrawer from "@/components/ChatDrawer";

const { Content } = Layout;

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useIsMobile();
  const pathname = usePathname();
  const setCollapsed = useSetRecoilState<boolean>(collapseState);
  const bannerViewPages = ["/", "/realty", "/jobs"];

  useEffect(() => {
    setCollapsed(false);
  }, [isMobile]);

  return (
    <>
      <Header />
      {bannerViewPages?.includes(pathname) && <Banner path={pathname} />}
      <Content>{children}</Content>
      <Footer />
      {isMobile && <MobileNav />}
      <ChatDrawer />
    </>
  );
};

export default DefaultLayout;
