import Image from "next/image";

const ItemCard = () => {
    return (
        <>
            <div>
                <Image
                    src="https://img.freepik.com/free-photo/top-view-composition-of-different-traveling-elements_23-2148884943.jpg?w=1800&t=st=1706790480~exp=1706791080~hmac=f0b352f31eae53fd74c55fa5bd21f19936aed1d5d11e740b2c6e59ad3f724e62"
                    alt="sample image"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto', borderRadius: 16 }}
                />
            </div>
            <div>제목</div>
            <div>가격</div>
            <div>관심</div>
        </>
    )
}

export default ItemCard;