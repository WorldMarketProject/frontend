import { useState, useEffect, ChangeEvent } from 'react';
import axios from 'axios';
import { Input, Space, Button } from 'antd';
import styled from 'styled-components';
// import { loadSearchList } from '@/api/Api';

const { Search } = Input;

const SearchBar = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    // getSearchData(input);
  }, [input]);

  const getSearchData = async (input?: string) => {
    if (!input) {
      setData([]);
      return false;
    }
    const formData = {
      keyword: input,
    };
    // const result = await loadSearchList(formData);
    // if (result?.success) {
    //   // console.log(result)
    //   setData(result?.list);
    // }
  };

  const handleChanges = (e: ChangeEvent<HTMLInputElement>) => {
    const searchInput = e.target.value;
    setInput(searchInput);
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <Search
          placeholder="검색할 키워드를 입력해주세요."
          value={input}
          onChange={(e) => handleChanges(e)}
          enterButton
          size="large"
        />
      </div>
      {data.length !== 0 && (
        <StyledSearchBoxDiv>
          {data?.map((e: any, i) => (
            <div key={i} style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
              <div style={{ width: 42, height: 42, textAlign: 'center' }}>
                <img
                  src={`https://static.inven.co.kr/image_2011/site_image/maple/dataninfo/itemicon/${e?.code}.gif`}
                  referrerPolicy="no-referrer"
                  alt=""
                />
              </div>
              <div>{e?.name}</div>
            </div>
          ))}
        </StyledSearchBoxDiv>
      )}
    </div>
  );
};
export default SearchBar;

const StyledSearchBoxDiv = styled.div`
  margin-top: 5px;
  width: 300px;
  min-height: 50px;
  max-height: 200px;
  padding: 10px;
  background-color: white;
  box-shadow: 0 2px 12px 0 rgba(129, 137, 143, 0.38);
  overflow: hidden;
  overflow-y: auto;
  position: absolute;
  z-index: 1;
`;
