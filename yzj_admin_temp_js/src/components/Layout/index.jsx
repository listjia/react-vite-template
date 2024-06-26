// src/components/Layout/index.tsx
import { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Button, Layout, Menu } from "antd";

const { Header, Sider, Content } = Layout;

const items = [
  {
    label: "Antd组件",
    path: "/manage/antdComponents",
  },
  {
    label: "定制组件",
    path: "/manage/customComponents",
  },
].map((nav) => ({
  key: nav.path,
  icon: null,
  label: nav.label,
}));

const BasicLayout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [collapsed, setCollapsed] = useState(false);

  const handleMenuClick = ({ key }) => {
    navigate(key);
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(0, 0, 0, 0.2)",
            zIndex: 200,
          }}
        />
        <Menu
          mode="inline"
          defaultSelectedKeys={[pathname]}
          items={items}
          onClick={handleMenuClick}
        />
      </Sider>
      <Layout style={{ display: "flex", flexDirection: "column" }}>
        <Header style={{ background: "#fff", padding: 0 }}>
          <Button type="text" onClick={() => setCollapsed(!collapsed)}>
            collapsed
          </Button>
        </Header>
        <Content style={{ padding: "16px", flex: 1, overflowY: "auto" }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
