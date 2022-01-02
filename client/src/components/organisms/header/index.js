import { Layout, Typography, Divider, Menu } from "antd";
import "./style.less";

const { Header } = Layout;
const { Text } = Typography;

const MyHeader = () => {
  return (
    <>
      <Divider type="vertical" />
      <div className="container" style={{ display: "flex" }}>
        <div className="logo">로고</div>

        <Text strong type="secondary">
          candle shop
        </Text>
      </div>
    </>
  );
};

export default MyHeader;
