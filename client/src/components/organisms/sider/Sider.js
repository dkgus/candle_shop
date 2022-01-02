import { Layout, Menu } from "antd";
import { HeartOutlined, GiftOutlined, SmileOutlined } from "@ant-design/icons";

import "./style.less";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

function MySider() {
  return (
    <Menu
      mode="inline"
      //defaultSelectedKeys={["1"]}
      //defaultOpenKeys={["sub1"]}
      style={{ height: "100%", listStyle: "none", padding: 0 }}
    >
      <SubMenu key="sub1" icon={<HeartOutlined />} title="Scent">
        {/* <Menu.Item key="1">option1</Menu.Item>
        <Menu.Item key="2">option2</Menu.Item>
        <Menu.Item key="3">option3</Menu.Item>
        <Menu.Item key="4">option4</Menu.Item> */}
      </SubMenu>
      <SubMenu key="sub2" icon={<GiftOutlined />} title="Brand">
        {/* <Menu.Item key="5">option5</Menu.Item>
        <Menu.Item key="6">option6</Menu.Item>
        <Menu.Item key="7">option7</Menu.Item>
        <Menu.Item key="8">option8</Menu.Item> */}
      </SubMenu>
      <SubMenu key="sub3" icon={<SmileOutlined />} title="Shape">
        {/* <Menu.Item key="9">option9</Menu.Item>
        <Menu.Item key="10">option10</Menu.Item>
        <Menu.Item key="11">option11</Menu.Item>
        <Menu.Item key="12">option12</Menu.Item> */}
      </SubMenu>
    </Menu>
  );
}
export default MySider;
