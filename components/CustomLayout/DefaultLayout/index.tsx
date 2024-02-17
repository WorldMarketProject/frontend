'use client';

import React, { useEffect } from 'react';
import { Layout } from 'antd';
import { useSetRecoilState } from 'recoil';
import { usePathname } from 'next/navigation';
import Header from '../Header';
import Footer from '../Footer';
import useIsMobile from '@/hooks/useIsMobile';
import { collapseState } from '@/recoil/states';
import MobileNav from '@/components/MobileNav';
import Banner from '@/components/Main/Banner';
import ChatDrawer from '@/components/ChatDrawer';

const { Content } = Layout;

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useIsMobile();
  const pathname = usePathname();
  const setCollapsed = useSetRecoilState<boolean>(collapseState);
  const bannerViewPages = ['/', '/realty', '/jobs'];

  useEffect(() => {
    setCollapsed(false);
  }, [isMobile]);

  return (
    <>
      <Header />
      <Content>
        {bannerViewPages?.includes(pathname) && <Banner path={pathname} />}
        {children}
      </Content>
      <Footer />
      {isMobile && <MobileNav />}
      <ChatDrawer />
    </>
  );
};

export default DefaultLayout;
