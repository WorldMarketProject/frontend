const RecentSearch = () => {
    const tempArray = [
        {title: '민첩 주문서'}, 
        {title: '신발 회피 주문서'}, 
        {title: '리버스 마스크'}, 
    ]
    
    return (
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {tempArray?.map((e: { title: string }, i: number) => {
                return (
                    <SearchDiv key={i}>
                        {e?.title}
                    </SearchDiv>
                )
            })}
        </div>
    )
}

const SearchDiv = ({ children }: {children: string}) => <div style={{ border: '1px solid #D7D7D7', borderRadius: 8, padding: '5px 15px' }}>{children}</div>

export default RecentSearch;