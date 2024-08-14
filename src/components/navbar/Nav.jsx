import { Layout, Menu, Input, Button } from "antd";

const { Header } = Layout;
const { Search } = Input;
import morent from "../../assets/morent.svg";
import { Space } from "antd";
import {
  SettingFilled,
  SearchOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import Like from "../../assets/like.png";
import xabar from "../../assets/xabar.svg";
import Profil from "../../assets/profil.svg";

const Nav = () => {
  const onSearch = () => {};

  return (
    <Header className=" bg-[white] h-[80px] shadow-md bg-[ #F6F7F9] ">
      <div className="demo-logo" />
      <div className="   flex mx-[50px] gap-[200px] items-center h-full bg-[white] h-[80px] ">
        <img src={morent} alt="" />
        <div className=" flex mx-[10px] gap-[200px] items-center h-full bg-[white] h-[80px]">
          
          <Search
            className="w-[450px] cursor-pointer"
            placeholder="Search something here"
            onSearch={onSearch}
            enterButton={
              <span>
                <SearchOutlined />
              </span>
            }
            suffix={<FilterOutlined />}
          />
        </div>

        <div className="flex gap-[30px] items-center bg-[white] h-[80px] mx-[50px]    ">
          <img className="cursor-pointer" src={Like} alt="" />
          <img className="cursor-pointer" src={xabar} alt="" />
          <SettingFilled className="cursor-pointer text-[25px] text-gray-500 p-[10px 10px]" />
          <img
            className="cursor-pointer w-[40px] h-[40px] rounded-full"
            src={Profil}
            alt=""
          />
        </div>

        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]} />
      </div>
    </Header>
  );
};

export default Nav;
