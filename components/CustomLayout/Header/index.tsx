"use client";

import { Layout, Menu, Button, Popover, Col, Row, Card, Avatar, Badge, Drawer, Empty } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined, BellOutlined, UserOutlined, CloseOutlined } from "@ant-design/icons";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { use, useState, useEffect, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { useSession, signOut } from "next-auth/react";
import localFont from 'next/font/local';
import Logo from '@/public/freeMarketLogo.png';
import { useRecoilState, useRecoilValue } from "recoil";
import { collapseState, menuState } from "@/recoil/states";
import { MenuTypes } from "@/types/Common/Common.interface";

const kartriderKr = localFont({
  variable: '--kart-rider-kr',
  src: [
    {
      path: '../../../public/fonts/KartriderMedium.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/KartriderBold.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/KartriderExtraBold.woff2',
      weight: '800',
      style: 'normal'
    }
  ]
})

const { Header } = Layout;

const HeaderPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const [selectedKeys, setSelectedKeys] = useState([pathname]);
  const [collapsed, setCollapsed] = useRecoilState(collapseState);
  const [profileOpen, setProfileOpen] = useState(false);
  const menuList: MenuTypes[] = useRecoilValue(menuState);

  const onClickLogo = () => {
    router.push("/");
  };

  useEffect(() => {
    setSelectedKeys([pathname]);
  }, [pathname]);

  const HeaderStyle: React.CSSProperties = {
    position: "sticky",
    top: 0,
    zIndex: 1,
    width: "100%",
    display: "flex",
    alignItems: "center",
    background: "#348485",
    boxShadow: "0 1px 5px rgba(57, 63, 72, 0.2)",
    padding: 16,
    height: 52,
  }

  return (
    <StyledHeader
      style={HeaderStyle}
    >
      <div className="pc-menu-btn">
        <StyledLogo src={Logo} onClick={onClickLogo} alt="로고" />
        <>
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={selectedKeys}
            items={menuList}
            style={{ width: "100%", fontWeight: 600, fontSize: 17, background: '#348485', fontFamily: `${kartriderKr.style.fontFamily}`, height: 52, alignItems: 'center' }}
            onSelect={(e: any) => { setSelectedKeys([e?.key]); router.push(e?.item?.props?.url); }}
          />
          {status != "loading" && (
            <>
              {session && (
                <>
                  <div style={{ alignItems: "center", display: "flex" }}>
                    <Avatar
                      size={34}
                      icon={<UserOutlined />}
                      onClick={() => setProfileOpen(!profileOpen)}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </>
              )}
              {!session && (
                <>
                  <div style={{ textAlign: "center", display: 'flex', alignItems: 'center' }}>
                    <StyledButton onClick={() => router.push("/auth/login")} style={{ width: 90, fontFamily: `${kartriderKr.style.fontFamily}`, fontWeight: 600 }}>
                      로그인
                    </StyledButton>
                  </div>
                  <div
                    style={{ textAlign: "center", marginLeft: 10, display: 'flex', alignItems: 'center' }}
                  >
                    <StyledButton
                      type="primary"
                      onClick={() => router.push("/auth/join")}
                      style={{ background: '#003B3C', fontFamily: `${kartriderKr.style.fontFamily}`, fontWeight: 600 }}
                    >
                      회원가입
                    </StyledButton>
                  </div>
                </>
              )}
            </>
          )}
        </>
      </div>
      <div className="mobile-btn">
        <StyledLogo src={Logo} onClick={onClickLogo} alt="로고" />
        <div style={{ marginLeft: "auto", display: 'flex', alignItems: 'center' }}>
          {status != "loading" && (
            <>
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "22px",
                  width: 42,
                  height: 48,
                  color: '#fff'
                }}
              />
            </>
          )}
        </div>
      </div>
    </StyledHeader>
  );
};

export default HeaderPage;

const StyledLogo = styled(Image)`
  && {
    align-self: center;
    font-weight: bold;
    margin-right: 20px;
    font-size: 20px;
    cursor: pointer;
  }
`;

const StyledHeader = styled(Header)`
  && {
    li {
      display: flex;
      align-items: center;
      height: 52px;
    }
  }
`


const StyledButton = styled(Button)`
  && {
    font-size: 15px;
    width: 100px;
    border-radius: 16px;
    letter-spacing: -0.3px;
    transition: all 0.1s linear;
  }
`;

const StyledEmpty = styled(Empty)`
  && {
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 360px;
    justify-content: center;
    align-items: center;

    > .ant-empty-description {
      color: grey;
      font-size: 14px;
    }
  }
`;
