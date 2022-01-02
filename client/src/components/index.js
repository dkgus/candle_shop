import { Layout, Menu } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

import MyHeader from "../components/organisms/header/index";
import MySider from "../components/organisms/sider/Sider";
import MyFooter from "../components/organisms/footer/Footer";
import Main from "../components/organisms/main/Main";

import "./style2.css";
import "./style.less";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

function app() {
  return (
    <Layout>
      <Header>
        <MyHeader />
      </Header>
      <Content style={{ display: "flex" }}>
        <Sider className="site-layout-background" width={"20%"}>
          <MySider />
        </Sider>
        <Content
          className="site-layout-background"
          style={{
            //padding: 24,
            margin: 0,
            minHeight: 280,
            width: "80%",
          }}
        >
          <Main />
        </Content>
      </Content>
      <MyFooter />
    </Layout>
  );
}
export default app;
