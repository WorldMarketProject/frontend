import { DeleteOutlined, SearchOutlined } from "@ant-design/icons"
import { Input } from "antd"
import styled from "styled-components"

const RecentSearch = ({ type }: { type: string }) => {
    const typeName = () => {
        if (type === 'used') {
            return '물품'
        }
        if (type === 'realty') {
            return '매물'
        }
        if (type === 'jobs') {
            return '알바 할 곳'
        }
        return '물품';
    }
    
    let tempArray = [
        { title: '프라다 가방' },
        { title: '전기자전거' },
        { title: '나이키 신발' },
        { title: 'PlayStation 5' },
        { title: 'Galaxy S24 Ultra' },
        { title: 'iPhone 15 Pro Max' },
    ]

    return (
        <div>
            <Input prefix={<SearchOutlined />} placeholder={`${typeName()}을 검색해보세요`} size="large" style={{ marginBottom: 20, /* background: '#f2f3f6' */ }} allowClear />
            <div style={{ fontWeight: 700, marginBottom: 10 }}>최근 검색어</div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {tempArray?.map((e: { title: string }, i: number) => {
                    return (
                        <SearchDiv key={i} onClick={() => tempArray = []}>
                            {e?.title} <DeleteOutlined style={{ color: '#b5a999' }} />
                        </SearchDiv>
                    )
                })}
            </div>
        </div>
    )
}

export default RecentSearch;

const SearchDiv = styled.div`
    border: 1px solid #D7D7D7;
    border-radius: 8px;
    padding: 5px 15px;
    &:hover {
        background: #f2f3f6;
        cursor: pointer;
    }
    transition: 0.3s;
`