import React, { useState } from "react";
import styled from "styled-components";
import './apidocs.css';

const UL = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const LI = styled.li``;
const Item = styled.div`
  display: flex;
  padding: 12px 18px;
  padding-left: ${props => `${props.dept * 18}px`};
  align-items: center;
`;
const Label = styled.span`
  width: 100%;
  display: block;
  cursor: pointer;
`;
const Arrow = styled.span`
  display: flex;
  height: 25px;
  width: 35px;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &::after {
    content: "";
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;

    border-top: 4px solid #000;

    transform: ${props => (props.toggle ? "rotate(180deg)" : "rotate(0deg)")};
  }
`;

const menus = [
  {
    label: "Algorithms",
    submenu: [
        {
          label: "Pre-processing",
          submenu: [
            {
              label: "MCF"
            },
            {
              label: "Scalable"
            }
          ]
        },
        {
            label: "In-processing",
            submenu: [
              {
                label: "MCF"
              },
              {
                label: "Scalable"
              }
            ]
          },
          {
            label: "Post-processing",
            submenu: [
              {
                label: "MCF"
              },
              {
                label: "Scalable"
              }
            ]
          },
    ]
  },
  {
    label: "Datasets",
    submenu: [
      {
        label: "bank"
      },
      {
        label: "census"
      },
      {
        label: "diabetes"
      }
    ]
  },
  {
    label: "Metrics",
    submenu: [
        {
          label: "balance"
        },
        {
          label: "cost"
        }
      ]
  },
  {
    label: "Explainers"
  }
];

export default function APIdocs() {

  const [name, setName] = useState("");
  const [activeMenus, setActiveMenus] = useState([]);

  const handleMenuClick = (data, menuName) => {
    console.log(data.label);
    setName(data.label);
    handleArrowClick(menuName)
  };

  const handleArrowClick = menuName => {
    let newActiveMenus = [...activeMenus];

    if (newActiveMenus.includes(menuName)) {
      var index = newActiveMenus.indexOf(menuName);
      if (index > -1) {
        newActiveMenus.splice(index, 1);
      }
    } else {
      newActiveMenus.push(menuName);
    }

    setActiveMenus(newActiveMenus);
  };

  const ListMenu = ({ dept, data, hasSubMenu, menuName, menuIndex }) => (
    <LI>
      <Item dept={dept}>
        <Label onClick={() => handleMenuClick(data, menuName)}>{data.label} </Label>
        {hasSubMenu && (
          <Arrow
            onClick={() => handleArrowClick(menuName)}
            toggle={activeMenus.includes(menuName)}
          />
        )}
      </Item>
      {hasSubMenu && (
        <SubMenu
          dept={dept}
          data={data.submenu}
          toggle={activeMenus.includes(menuName)}
          menuIndex={menuIndex}
        />
      )}
    </LI>
  );

  const SubMenu = ({ dept, data, toggle, menuIndex }) => {
    if (!toggle) {
      return null;
    }

    dept = dept + 1;

    return (
      <UL>
        {data.map((menu, index) => {
          const menuName = `sidebar-submenu-${dept}-${menuIndex}-${index}`;

          return (
            <ListMenu
              dept={dept}
              data={menu}
              hasSubMenu={menu.submenu}
              menuName={menuName}
              key={menuName}
              menuIndex={index}
            />
          );
        })}
      </UL>
    );
  };

  return (
    <div className="container">   
    <div className="sidebar">
    <UL>
      {menus.map((menu, index) => {
        const dept = 1;
        const menuName = `sidebar-menu-${dept}-${index}`;

        return (
          <ListMenu
            dept={dept}
            data={menu}
            hasSubMenu={menu.submenu}
            menuName={menuName} 
            key={menuName}
            menuIndex={index}
          />
        );
      })}
    </UL>
    </div>
    <div className="content">
    {
        name === "" ? 
        <h1>Docs</h1>
        : null
    }
    { 
        name === "Algorithms" ? 
        <h1>Algorithms</h1>
        : null
    }
    { 
        name === "Pre-processing" ? 
        <h1>Algorithms.pre-processing</h1>
        : null
    }
    { 
        name === "MCF" ? 
        <h1>Algorithms.pre-processing.MCF</h1>
        : null
    }
    { 
        name === "Scalable" ? 
        <h1>Algorithms.pre-processing.Scalable</h1>
        : null
    }
    { 
        name === "In-processing" ? 
        <h1>Algorithms.in-processing</h1>
        : null
    }
    { 
        name === "Post-processing" ? 
        <h1>Algorithms.post-processing</h1>
        : null
    }
    { 
        name === "Datasets" ? 
        <h1>Datasets</h1>
        : null
    }
    { 
        name === "bank" ? 
        <h1>Datasets.bank</h1>
        : null
    }
    { 
        name === "census" ? 
        <h1>Datasets.census</h1>
        : null
    }
    { 
        name === "diabetes" ? 
        <h1>Datasets.diabetes</h1>
        : null
    }
    { 
        name === "Metrics" ? 
        <h1>Metrics</h1>
        : null
    }
    { 
        name === "balance" ? 
        <h1>Metrics.balance</h1>
        : null
    }
    { 
        name === "cost" ? 
        <h1>Metrics.cost</h1>
        : null
    }
    { 
        name === "Explainers" ? 
        <h1>Explainers</h1>
        : null
    }
    </div>
    </div>
  );
};
 
