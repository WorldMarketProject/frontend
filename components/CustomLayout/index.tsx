import { Layout } from "antd";
import SessionProvider from "../../lib/SessionProvider";
import RecoilRootProvider from "@/lib/RecoilRootProvider";
import StyledComponentsRegistryAnt from "@/lib/AntdRegistry";
import StyledComponentsRegistry from "@/lib/Registry";
import { ConfigProvider } from "antd";
import theme from "../../theme/themeConfig";
import DefaultLayout from "./DefaultLayout";

const CustomLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <RecoilRootProvider>
        <StyledComponentsRegistry>
          <StyledComponentsRegistryAnt>
            <ConfigProvider theme={theme}>
              <DefaultLayout>{children}</DefaultLayout>
            </ConfigProvider>
          </StyledComponentsRegistryAnt>
        </StyledComponentsRegistry>
      </RecoilRootProvider>
    </SessionProvider>
  );
};

export default CustomLayout;
