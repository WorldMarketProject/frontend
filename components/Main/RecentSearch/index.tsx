import { CloseCircleOutlined, DeleteOutlined, SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { useRouter } from 'next/navigation';
import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';
import styled from 'styled-components';

const RecentSearch = ({ type }: { type: string }) => {
  const router = useRouter();
  const storageName = type + 'search';
  const [nowSearchData, setNowSearchData] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');

  const typeName = () => {
    if (type === 'used') {
      return '물품';
    }
    if (type === 'realty') {
      return '매물';
    }
    if (type === 'jobs') {
      return '알바 할 곳';
    }
    return '물품';
  };

  const recentSearchUpdateGoList = (e: KeyboardEvent<HTMLInputElement>) => {
    let arr = [...nowSearchData];
    const newData = e.currentTarget.value;
    if (nowSearchData?.find((ele: string) => ele === newData)) {
      arr = nowSearchData?.filter((ele: string) => ele !== newData);
    }
    const newSearchData = [...arr, newData];
    localStorage.setItem(storageName, newSearchData?.join('&&'));
    setNowSearchData(newSearchData);
    setSearchValue('');

    const path = type === 'used' ? '' : '/' + type;

    // 페이지 이동
    router.push(`${path}/list?keyword=${newData}`);
  };

  const deleteSearchValue = (deleteString: string | null) => {
    if (deleteString) {
      const newSearchData = nowSearchData?.filter((e: string) => e !== deleteString);
      setNowSearchData(newSearchData);
      localStorage.setItem(storageName, newSearchData?.join('&&'));
    }
  };

  const resetSearchData = () => {
    setNowSearchData([]);
    localStorage.setItem(storageName, '');
  };

  useEffect(() => {
    const localStorageData = localStorage.getItem(storageName);
    const data = localStorageData?.length ? localStorageData?.split('&&') : [];
    setNowSearchData(data);
  }, []);

  return (
    <div>
      <Input
        prefix={<SearchOutlined />}
        placeholder={`${typeName()}을 검색해보세요`}
        size="large"
        value={searchValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
        onKeyUp={(e: KeyboardEvent<HTMLInputElement>) =>
          e.key === 'Enter' && e.currentTarget.value && recentSearchUpdateGoList(e)
        }
        style={{ marginBottom: 20 }}
        allowClear
      />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ fontWeight: 700, marginBottom: 10 }}>최근 검색어</div>
        {nowSearchData?.length ? (
          <div aria-hidden="true" onClick={resetSearchData} style={{ cursor: 'pointer' }}>
            전체 지우기
          </div>
        ) : null}
      </div>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        {nowSearchData?.map((e: string | null, i: number) => (
          <SearchDiv key={i} aria-hidden="true" onClick={() => e && setSearchValue(e)}>
            {e}{' '}
            <CloseCircleOutlined
              onClick={(event) => {
                event.stopPropagation();
                deleteSearchValue(e);
              }}
              style={{ color: '#b5a999' }}
            />
          </SearchDiv>
        ))}
        {!nowSearchData?.length && (
          <div style={{ color: 'grey' }}>최근 검색어가 존재하지 않습니다.</div>
        )}
      </div>
    </div>
  );
};

export default RecentSearch;

const SearchDiv = styled.div`
  border: 1px solid #d7d7d7;
  border-radius: 8px;
  padding: 5px 15px;
  &:hover {
    background: #f2f3f6;
    cursor: pointer;
  }
  transition: 0.3s;
`;
