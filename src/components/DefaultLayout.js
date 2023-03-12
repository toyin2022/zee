import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { BiHomeHeart } from "react-icons/bi";
import { VscPreview } from "react-icons/vsc";
import { GoSignOut } from "react-icons/go";
import { RiInboxArchiveLine, RiServiceLine } from "react-icons/ri";
import { SiShopify } from "react-icons/si";
import { BsCartCheckFill } from "react-icons/bs";
import { Layout, Menu, theme, ConfigProvider, Button, Switch } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const { Header, Sider, Content, Footer } = Layout;
const DefaultLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleClick = () => {
    setIsDarkMode((previousValue) => !previousValue);
  };
  const [themee, setThemee] = useState("light");
  const changeTheme = (value) => {
    setThemee(value ? "dark" : "light");
  };

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
      }}
    >
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{
            position: "sticky",
            height: "100%",
            top: 0,
            zIndex: 1,
          }}
        >
          <Switch
            style={{ margin: "18px 18px" }}
            checked={themee === "dark"}
            onChange={changeTheme}
            checkedChildren="Dark"
            unCheckedChildren="Light"
            className="mb-4"
          />
          <h3
            style={{
              color: "Whitesmoke",
              fontStyle: "italic",
              fontFamily: "cursive",
            }}
          >
            Azoni Store
          </h3>
          <Menu
            style={{
              height: "100vh",

              zIndex: 1,
            }}
            className="p-4 h-100"
            onClick={({ key }) => {
              if (key === "signout") {
              } else {
                navigate(key);
              }
            }}
            theme={themee}
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "/",
                icon: <BiHomeHeart />,
                label: "Home",
              },
              {
                key: "/about",
                icon: <RiInboxArchiveLine />,
                label: "About",
              },
              {
                key: "/shop",
                icon: <SiShopify />,
                label: "Shop",
              },
              {
                key: "/service",
                icon: <RiServiceLine />,
                label: "Services",
              },
              {
                key: "/reviews",
                icon: <VscPreview />,
                label: "Reviews",
              },
              {
                key: "signout",
                icon: <GoSignOut />,
                label: "logout",
                danger: true,
              },
            ]}
          />
        </Sider>

        <Layout className="site-layout">
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
              position: "sticky",

              top: 0,
              zIndex: 1,
              width: "100%",
            }}
            className="bar"
          >
            <div className="barr">
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: `trigger ${isDarkMode ? "ww" : "bb"}`,

                  onClick: () => setCollapsed(!collapsed),
                }
              )}
              <Button onClick={handleClick}>
                Change Whole page to {isDarkMode ? "Light" : "Dark"}
              </Button>
              <BsCartCheckFill
                onClick={() => navigate("/cart")}
                style={{ color: "#000", fontSize: "1.3rem" }}
              />
            </div>
          </Header>
          <Content
            theme={themee}
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              // background:
              //   "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(158,158,164,1) 33%, rgba(111,111,111,1) 94%)",
            }}
          >
            {children}
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Ant Design ©2023 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};
export default DefaultLayout;
