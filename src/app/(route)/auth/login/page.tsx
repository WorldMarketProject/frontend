'use client'

import { useEffect } from "react";
import { Alert, Button, message } from "antd";
import styled from "styled-components";
import Discord from '@/public/svg/discord.svg';
import MoneyImg from '@/public/money.png';
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import Image from "next/image";
import CardComponent from "@/components/Card";

const Login = () => {
  return (
    <CardComponent content={<LoginComponent />} height={430} />
  );
};

const LoginComponent = () => {
  const router = useRouter();

  return (
    <div style={{ textAlign: 'center' }}>
      <Title>자유시장 로그인</Title>
      <Explain>자유시장은 거래할 수 있는 공간입니다.</Explain>
      <Image src={MoneyImg} alt='not found' style={{ marginTop: 10 }} />
      <div style={{ margin: '20px 0' }}>
        <RegisterButton type="primary" icon={<Discord style={{ width: 23, height: 22, margin: '0 10px', verticalAlign: 'text-bottom' }} />} onClick={() => router.push('/auth/login/discord')}>Discord로 로그인</RegisterButton>
      </div>
    </div>
  )
}

export default Login;

const Title = styled.div`
  font-size: 26px;
  font-weight: 600;
`

const Explain = styled.div`
  font-size: 14px;
  color: #606060;
  margin: 12px 0;
`

const RegisterButton = styled(Button)`
  && {
    width: 100%;
    height: 48px;
    text-align: center;
    padding-right: 45px;
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 10px;
    border-radius: 16px;
    background: #5865F2;
  }
`

const BtnGroup = styled.div`
  margin: 20px 0;
  font-size: 14px;
  color: #606060;
`

const StyledSpan = styled.span`
  && {
    margin: 0 5px;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`