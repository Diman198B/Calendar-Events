import { Layout, Menu } from "antd";
import { FC } from "react";
import { useHistory } from "react-router-dom";
import { RouteNames } from "../router";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const Navbar: FC = () => {
  const router = useHistory();
  const { isAuth, user } = useTypedSelector((state) => state.auth);
  const { logout } = useActions();

  return (
    <Layout.Header>
      {isAuth ? (
        <Menu
          theme="dark"
          mode="horizontal"
          selectable={false}
          style={{ display: "flex", justifyContent: "end" }}
        >
          <div style={{ color: "white" }}>{user.username}</div>
          <Menu.Item onClick={logout} key={1} style={{ color: "white" }}>
            ВЫЙТИ
          </Menu.Item>
        </Menu>
      ) : (
        <Menu
          theme="dark"
          mode="horizontal"
          selectable={false}
          style={{ display: "flex", justifyContent: "end" }}
        >
          <Menu.Item
            onClick={() => router.push(RouteNames.LOGIN)}
            key={1}
            style={{ color: "white" }}
          >
            ЛОГИН
          </Menu.Item>
        </Menu>
      )}
    </Layout.Header>
  );
};

export default Navbar;
