'use client';

import { CameraOutlined } from '@ant-design/icons';
import { Button, Col, Input, Row, Select } from 'antd';
import { useRouter, useSearchParams } from 'next/navigation';
import Title from '@/components/Title';
import RecentList from '@/components/Main/RecentList';

const List = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const keyword = searchParams?.get('keyword');

  return (
    <>
      <Title content="상품 목록" />
      <div style={{ marginBottom: 20, fontSize: 16 }}>
        {!keyword && <div>상품 목록입니다.</div>}
        {keyword && (
          <div>
            <b>{keyword}</b>의 검색결과
          </div>
        )}
      </div>
      <RecentList />
    </>
  );
};

export default List;
