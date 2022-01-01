import { Layout, Typography, Divider, Menu } from "antd";
import "./style.less";

const { Header } = Layout;
const { Text } = Typography;

const MyHeader = () => {
  return (
    <>
      <Divider type="vertical" />
      <Text strong type="secondary">
        candle shop
      </Text>
    </>
  );
};

export default MyHeader;
