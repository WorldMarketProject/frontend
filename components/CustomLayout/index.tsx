import koKr from 'antd/locale/ko_KR';
import { ConfigProvider } from 'antd';
import SessionProvider from '../../lib/SessionProvider';
import RecoilRootProvider from '@/lib/RecoilRootProvider';
import StyledComponentsRegistryAnt from '@/lib/AntdRegistry';
import StyledComponentsRegistry from '@/lib/Registry';
import theme from '../../theme/themeConfig';
import DefaultLayout from './DefaultLayout';

const CustomLayout = ({ children }: { children: React.ReactNode }) => (
  <SessionProvider>
    <RecoilRootProvider>
      <StyledComponentsRegistry>
        <StyledComponentsRegistryAnt>
          <ConfigProvider theme={theme} locale={koKr}>
            <DefaultLayout>{children}</DefaultLayout>
          </ConfigProvider>
        </StyledComponentsRegistryAnt>
      </StyledComponentsRegistry>
    </RecoilRootProvider>
  </SessionProvider>
);

export default CustomLayout;
