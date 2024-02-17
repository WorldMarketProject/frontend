'use client';

import { Layout, Menu, Button, Popover, Col, Row, Card, Avatar, Badge, Drawer, Empty } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BellOutlined,
  UserOutlined,
  MessageOutlined,
} from '@ant-design/icons';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { use, useState, useEffect, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { useSession, signOut } from 'next-auth/react';
import localFont from 'next/font/local';
import { useRecoilState, useRecoilValue } from 'recoil';
import Logo from '@/public/freeMarketLogo.png';
import { chatDrawerState, collapseState, menuState } from '@/recoil/states';
import { MenuTypes } from '@/types/Common/Common.interface';
import ProfilePopOverContent from './Profile';
import Notification from './Notification';

const { Header } = Layout;

const HeaderPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const [selectedKeys, setSelectedKeys] = useState<any>([pathname]);
  const [collapsed, setCollapsed] = useRecoilState(collapseState);
  const [isChatOpend, setIsChatOpend] = useRecoilState(chatDrawerState);
  const [profileOpen, setProfileOpen] = useState(false);
  const menuList: MenuTypes[] = useRecoilValue(menuState);

  const onClickLogo = () => {
    router.push('/');
  };

  useEffect(() => {
    setSelectedKeys([
      menuList?.flatMap((e) => e.children)?.find((ele) => ele?.url === pathname)?.key,
    ]);
  }, [pathname]);

  const HeaderStyle: React.CSSProperties = {
    position: 'sticky',
    top: 0,
    zIndex: 1,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    background: '#348485',
    boxShadow: '0 1px 5px rgba(57, 63, 72, 0.2)',
    padding: 16,
    height: 52,
  };

  return (
    <StyledHeader style={HeaderStyle}>
      <div className="pc-menu-btn">
        <StyledLogo src={Logo} onClick={onClickLogo} alt="로고" />
        <>
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={selectedKeys}
            items={menuList}
            style={{
              width: '100%',
              fontWeight: 700,
              fontSize: 15,
              background: '#348485',
              height: 52,
              alignItems: 'center',
            }}
            onSelect={(e: any) => {
              setSelectedKeys([e?.key]);
              router.push(e?.item?.props?.url);
            }}
          />
          {status !== 'loading' && (
            <>
              {session && (
                <>
                  <div
                    style={{
                      marginRight: 20,
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Badge dot>
                      <MessageOutlined
                        onClick={() => setIsChatOpend(true)}
                        style={{
                          fontSize: 18,
                          cursor: 'pointer',
                          color: '#fff',
                        }}
                      />
                    </Badge>
                  </div>
                  <Popover trigger="click" title="알림" content={Notification} placement="bottom">
                    <div
                      style={{
                        marginRight: 20,
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <Badge dot>
                        <BellOutlined
                          style={{
                            fontSize: 20,
                            cursor: 'pointer',
                            color: '#fff',
                          }}
                        />
                      </Badge>
                    </div>
                  </Popover>
                  <Popover
                    trigger="click"
                    open={profileOpen}
                    title="내 정보"
                    content={() => ProfilePopOverContent(setProfileOpen)}
                    onOpenChange={() => setProfileOpen(!profileOpen)}
                    placement="bottom"
                  >
                    <div style={{ alignItems: 'center', display: 'flex' }}>
                      <Avatar
                        size={34}
                        icon={<UserOutlined />}
                        onClick={() => setProfileOpen(!profileOpen)}
                        style={{ cursor: 'pointer' }}
                      />
                    </div>
                  </Popover>
                </>
              )}
              {!session && (
                <>
                  <div
                    style={{
                      textAlign: 'center',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <StyledButton
                      onClick={() => router.push('/auth/login')}
                      style={{ width: 90, fontSize: 13, fontWeight: 700 }}
                    >
                      로그인
                    </StyledButton>
                  </div>
                  <div
                    style={{
                      textAlign: 'center',
                      marginLeft: 10,
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <StyledButton
                      type="primary"
                      onClick={() => router.push('/auth/join')}
                      style={{
                        background: '#003B3C',
                        fontSize: 13,
                        fontWeight: 700,
                      }}
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
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          {status !== 'loading' && (
            <>
              {session && (
                <>
                  <div
                    style={{
                      marginRight: 20,
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Badge dot>
                      <MessageOutlined
                        onClick={() => setIsChatOpend(true)}
                        style={{
                          fontSize: 18,
                          cursor: 'pointer',
                          color: '#fff',
                        }}
                      />
                    </Badge>
                  </div>
                  <Popover trigger="click" title="알림" content={Notification} placement="bottom">
                    <div
                      style={{
                        marginRight: 10,
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <Badge dot>
                        <BellOutlined
                          style={{
                            fontSize: 20,
                            cursor: 'pointer',
                            color: '#fff',
                          }}
                        />
                      </Badge>
                    </div>
                  </Popover>
                </>
              )}
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: '10px',
                  width: 42,
                  height: 48,
                  color: '#fff',
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
    li,
    .ant-menu-title-content {
      display: flex;
      align-items: center;
      height: 52px;
    }
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
