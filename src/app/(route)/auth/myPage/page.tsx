'use client'

import React, { useState } from 'react';
import { Button, Divider, Tabs } from "antd";
import type { TabsProps } from 'antd';
import styled, { css } from "styled-components";
import { useRouter } from "next/navigation";
import Subscribe from '@/components/MyPage/Subscribe';

const MyPage = () => {
  const router = useRouter();
  const [selectedKey, setSelectedKey] = useState('1');
  
  const list: TabsProps['items']  = [
    {
      key: '1',
      label: '계정 관리',
      children: null,
    },
    {
      key: '2',
      label: '내 활동',
      children: null,
    },
    {
      key: '3',
      label: '구독 관리',
      children: null,
    },
    {
      key: '4',
      label: '포인트',
      children: null,
    },
    {
      key: '5',
      label: '친구 관리',
      children: null,
    },
  ]

  const onChange = (key: string) => {
    setSelectedKey(key);
  };

  return (
    <div>
      <Title>마이페이지</Title>
      <StyledTabs activeKey={selectedKey} items={list} onChange={onChange} />
      <div style={{ display: 'flex', gap: 40 }}>
        <StyledResponsiveDiv style={{ width: 300, height: 580, position: 'sticky', top: 90 }}>
          <StyledBoxDiv style={{ height: '100%' }}>
            {
              list?.map(e =>
                <StyledMenuDiv key={e?.key} $menukey={e?.key} $selectedkey={selectedKey} onClick={() => setSelectedKey(e?.key)}>
                  {e?.label}
                </StyledMenuDiv>)
            }
          </StyledBoxDiv>
        </StyledResponsiveDiv>
        <div style={{ flex: 1 }}>
          <Title style={{ marginBottom: 20 }}>{list?.find(e => e.key === selectedKey)?.label}</Title>
          {
            selectedKey === '1' && <Subscribe />
          }
          {
            selectedKey === '2' && <Subscribe />
          }
          {
            selectedKey === '3' && <Subscribe />
          }
          {
            selectedKey === '4' && <Subscribe />
          }
          {
            selectedKey === '5' && <Subscribe />
          }
        </div>
      </div>
    </div>
  );
};

export default MyPage;

const Title = styled.div`
  font-size: 26px;
  font-weight: 600;
  margin: 15px 0;
`

const Explain = styled.div`
  font-size: 14px;
  color: #606060;
  margin: 15px 0;
`

const StyledBoxDiv = styled.div`
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #BBCEDD;
  border-radius: 10px;
`

const StyledResponsiveDiv = styled.div`
  display: none;
  @media (min-width: 991px) {
    display: block;
  }
`

const StyledTabs = styled(Tabs)`
  && {
    font-weight: 600;
    @media (min-width: 991px) {
      display: none;
    }
}X
`

const StyledMenuDiv = styled.div<{ $selectedkey: string, $menukey: string }>`
  && {
    border-radius: 10px;
    padding: 15px 10px;
    margin-bottom: 5px;
    font-weight: 500;
    ${props => (props.$selectedkey == props.$menukey) ? css`
      background: #eee;
      font-weight: 800;
      color: #348485;
    ` : css`
      &:hover {
        background: #eee;
        cursor: pointer;
      }
    `}
  }
`