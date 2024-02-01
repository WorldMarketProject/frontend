import { SearchOutlined } from "@ant-design/icons"
import { Input } from "antd"
import styled from "styled-components"

const RecentSearch = () => {
    const tempArray = [
        { title: '프라다 가방' },
        { title: '전기자전거' },
        { title: '나이키 신발' },
    ]

    return (
        <div>
            <Input prefix={<SearchOutlined />} placeholder="물품을 검색해보세요." size="large" style={{ marginBottom: 20, background: '#f2f3f6' }} allowClear />
            <div style={{ fontWeight: 600, marginBottom: 10 }}>최근 검색어</div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {tempArray?.map((e: { title: string }, i: number) => {
                    return (
                        <SearchDiv key={i}>
                            {e?.title}
                        </SearchDiv>
                    )
                })}
            </div>
        </div>
    )
}

const SearchDiv = ({ children }: { children: string }) => <StyledDiv>{children}</StyledDiv>

export default RecentSearch;

const StyledDiv = styled.div`
    border: 1px solid #D7D7D7;
    border-radius: 8px;
    padding: 5px 15px;
    &:hover {
        background: #f2f3f6;
        cursor: pointer;
    }
    transition: 0.3s;
`