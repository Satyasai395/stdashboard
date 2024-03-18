import React, { useState } from "react";
import "./Sidebar.css";

import Logo1 from '../../imgs/vcubelogo.png'
import profile from '../../imgs/img1.png'

import { SidebarData } from "../../Data/Data";
import { UilSignOutAlt } from '@iconscout/react-unicons'
function Sidebar() {
  const [selected,setSelected]=useState(0)


  return (
    <div className="sidebar">
      <div className="logo">
        <img src={Logo1} alt="logo" />
        <span>
          V<span>sms</span>
        </span>
      </div>
      <div className="profile-img">
      <img src={profile} alt="" />
      <p>welcome Satya..</p>
      </div>
      <div className="menu">
        {SidebarData.map((item,index)=>{
          return(<div className={selected===index?"menuItem active":'menuItem'} key={index} onClick={()=>setSelected(index)}>
          <item.icon />
          <span>{item.heading}</span>
          </div>)
        })}
        <div className="menuItem">
        <UilSignOutAlt />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
