import { InfoCircleOutlined } from '@ant-design/icons'
import { useRouter } from 'next/navigation';

const RequiredLoginMsg = () => {
    const router = useRouter();
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center' }}>
            <div style={{ fontSize: 36 }}>
                <InfoCircleOutlined />
            </div>
            <div style={{ textAlign: 'center' }}>
                <div>사이트를 이용하시려면</div>
                <div>
                    <span onClick={() => router.push('/auth/login')} style={{ fontWeight: 800, cursor: 'pointer' }}>로그인</span>이 필요합니다.
                </div>
            </div>
        </div>
    )
}

export default RequiredLoginMsg;