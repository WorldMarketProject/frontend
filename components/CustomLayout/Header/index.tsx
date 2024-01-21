"use client";

import { Layout, Menu, Button, Popover, Col, Row, Card, Avatar, Badge, Drawer, Empty } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined, BellOutlined, UserOutlined, CloseOutlined } from "@ant-design/icons";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { use, useState, useEffect, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { useSession, signOut } from "next-auth/react";
import localFont from 'next/font/local'

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

const menuList = [
  {
    key: 1,
    label: '메인',
    url: '/'
  },
  {
    key: 2,
    label: '거래 목록',
    url: '/'
  },
  {
    key: 3,
    label: '거래 등록/수정',
    url: '/'
  },
  {
    key: 4,
    label: '사용 가이드',
    url: '/'
  },
]

const HeaderPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const [selectedKeys, setSelectedKeys] = useState([pathname]);
  const [collapsed, setCollapsed] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

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
    background: "#171E66",
    boxShadow: "0 1px 5px rgba(57, 63, 72, 0.2)",
    padding: 16,
  }

  return (
    <Header
      style={HeaderStyle}
    >
      <div className="pc-menu-btn">
        <StyledLogo src={'/worldMarketLogo.png'} onClick={onClickLogo} width={185} height={25.45} alt="로고" />
        <>
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={selectedKeys}
            items={menuList}
            style={{ width: "100%", fontWeight: 600, fontSize: 17, background: '#171E66', fontFamily: `${kartriderKr.style.fontFamily}` }}
            onSelect={(e) => setSelectedKeys([e?.key])}
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
                  <div style={{ textAlign: "center" }}>
                    <StyledButton onClick={() => router.push("/auth/login")} style={{ width: 90, fontFamily: `${kartriderKr.style.fontFamily}`, fontWeight: 600 }}>
                      로그인
                    </StyledButton>
                  </div>
                  <div
                    style={{ textAlign: "center", marginLeft: 10 }}
                  >
                    <StyledButton
                      type="primary"
                      onClick={() => router.push("/auth/join")}
                      style={{ background: '#6069C4', fontFamily: `${kartriderKr.style.fontFamily}`, fontWeight: 600 }}
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
        <StyledLogo src={'/worldMarketLogo.png'} onClick={onClickLogo} width={185} height={25.45} alt="로고" />
        <div style={{ marginLeft: "auto" }}>
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
                  marginTop: 5,
                  color: '#fff'
                }}
              />
            </>
          )}
        </div>
      </div>
    </Header>
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
