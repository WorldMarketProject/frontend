import Image from "next/image";
import React from "react";

const Banner = ({ path }: { path: string }) => {
    const getInfo = () => {
        if (path === '/') {
            return {
                title: <><div>믿을만한</div><div>이웃 간 중고거래</div></>,
                subTitle: <><div>동네 주민들과 가깝고 따뜻한 거래를</div><div>지금 경험해보세요.</div></>,
                background: '#f7f1eb',
                imgUrl: '/trade1.png'
            }
        }
        if (path === '/realty') {
            return {
                title: <><div>복비없이 투명한</div><div>부동산 직거래</div></>,
                subTitle: <><div>이웃이 살던 집, 자유시장에서</div><div>편하게 직거래해보세요.</div></>,
                background: '#d2edfa',
                imgUrl: '/trade1.png'
            }
        }
    }

    return (
        <>
            <div style={{ background: getInfo()?.background, height: 280, overflow: 'hidden' }}>
                <div className="container" style={{ display: 'flex' }}>
                    <div style={{ flex: 1 }}>
                        <div style={{ lineHeight: 1.4 }}>
                            <h1>
                                {getInfo()?.title}
                            </h1>
                        </div>
                        <div style={{ fontSize: 18, lineHeight: 1.4 }}>
                            {getInfo()?.subTitle}
                        </div>
                    </div>
                    <div style={{ width: 350 }}>
                        <Image src={getInfo()?.imgUrl || ''}
                            alt={getInfo()?.imgUrl || ''}
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner;