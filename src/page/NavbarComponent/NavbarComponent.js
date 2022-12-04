import { Link, useNavigate } from "react-router-dom";
import "./NavbarComponent.css";

import { LogoutOutlined, SettingOutlined } from "@ant-design/icons";
import { Popover } from "antd";

export default function NavbarComponent() {
  const navigate = useNavigate();
  const userSettingContent = (
    <div className="usersettingcontent">
      <p>
        <LogoutOutlined />
        &nbsp; Đăng xuất
      </p>
      <p>
        <Link to="/admin">
          <SettingOutlined />
          &nbsp; Admin setting
        </Link>
      </p>
    </div>
  );
  // const signOut = () => {
  //     localStorage.clear();
  //     navigate('/login')
  // }
  return (
    <nav>
      <Link to="/">
        <div className="logo">
          <img
            src={require("./img/logo-zing-home.jpg")}
            className="logo-img"
            alt="logo-img"
          />
          <br />
          <span>TẠP CHÍ TRI THỨC TRỰC TUYẾN</span>
        </div>
      </Link>
      <div className="nav-list-content" id="nav-list-content">
        <ul className="nav-list">
          <li>
            <Link to="/publish">Xuất bản</Link>
          </li>
          <li>Kinh Doanh</li>
          <li>Công nghệ</li>
          <li>Thể thao</li>
          <li>Giải trí</li>
          <li>Đời sống</li>
          <li>Lifestyle</li>
          <li>
            <span className="dot">
              <i className="fa-solid fa-circle"></i>
            </span>
            <span className="dot">
              <i className="fa-solid fa-circle"></i>
            </span>
            <span className="dot">
              <i className="fa-solid fa-circle"></i>
            </span>
          </li>
        </ul>
      </div>
      <div className="toolbox">
        <i className="fa-solid fa-magnifying-glass"></i>
        <Popover
          placement="bottom"
          content={userSettingContent}
          trigger="hover"
        >
          <div className="usersetting">
            <i className="fa-regular fa-user"></i>
          </div>
        </Popover>
      </div>
      <div className="menu" id="menu-toggle">
        <span className="dot">
          <i className="fa-solid fa-circle"></i>
        </span>
        <span className="dot">
          <i className="fa-solid fa-circle"></i>
        </span>
        <span className="dot">
          <i className="fa-solid fa-circle"></i>
        </span>
      </div>
    </nav>
  );
}
