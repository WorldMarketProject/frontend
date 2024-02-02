import NoSsr from "@/components/NoSsr";
import useIsMobile from "@/hooks/useIsMobile";
import Image from "next/image";
import React from "react";

const Banner = ({ path }: { path: string }) => {
    const isMobile = useIsMobile();

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
                imgUrl: '/realty.png'
            }
        }
        if (path === '/jobs') {
            return {
                title: <><div>우리 동네에서 찾는</div><div>아르바이트</div></>,
                subTitle: <><div>걸어서 10분 거리의</div><div>동네 알바들 여기 다 있어요.</div></>,
                background: '#ffe2d2',
                imgUrl: '/jobs.png'
            }
        }
    }

    return (
        <>
            <div style={{ background: getInfo()?.background, height: isMobile ? 230 : 350, overflow: 'hidden' }}>
                <NoSsr>
                    <div className="container banner" style={{ display: 'flex', padding: '10px 16px' }}>
                        <div style={{ flex: 1, marginTop: isMobile ? 30 : 65 }}>
                            <div style={{ lineHeight: 1.4 }}>
                                <h1>
                                    {getInfo()?.title}
                                </h1>
                            </div>
                            <div style={{ lineHeight: 1.4 }}>
                                {getInfo()?.subTitle}
                            </div>
                        </div>
                        <div>
                            <Image src={getInfo()?.imgUrl || ''}
                                alt={getInfo()?.imgUrl || ''}
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                    </div>
                </NoSsr>
            </div>
        </>
    )
}

export default Banner;