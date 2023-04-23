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
    label: "API docs"
  },
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
                label: "In1"
              },
              {
                label: "In2"
              }
            ]
          },
          {
            label: "Post-processing",
            submenu: [
              {
                label: "Post1"
              },
              {
                label: "Post2"
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

  const [name, setName] = useState("API docs");
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
            onClick={() => handleMenuClick(data, menuName)}
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

  const handleClick = (name) => {
    setName(name)
  }

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
        name === "API docs" ? 
        <>
        <h1>AI Fairness 360 documentation</h1>
        <h4>Modules</h4>
        <ul>
        <li><button onClick = {() => handleClick("Algorithms")}>Algorithms</button></li>
          <ul>
          <li><button onClick = {() => handleClick("Pre-processing")}>algorithms.preprocessing</button></li>
          <li><button onClick = {() => handleClick("In-processing")}>algorithms.inprocessing</button></li>
          <li><button onClick = {() => handleClick("Post-processing")}>algorithms.postprocessing</button></li>
          </ul>
        <li><button onClick = {() => handleClick("Datasets")}>Datasets</button></li>
          <ul>
          <li><button onClick = {() => handleClick("bank")}>datasets.bank</button></li>
          <li><button onClick = {() => handleClick("census")}>datasets.census</button></li>
          <li><button onClick = {() => handleClick("diabetes")}>datasets.diabetes</button></li>
          </ul>
        <li><button onClick = {() => handleClick("Metrics")}>Metrics</button></li>
          <ul>
          <li><button onClick = {() => handleClick("balance")}>metrics.balance</button></li>
          <li><button onClick = {() => handleClick("cost")}>metrics.cost</button></li>
          </ul>
        <li><button onClick = {() => handleClick("Explainers")}>Explainers</button></li>
        </ul>
        </>
        : null
    }
    { 
        name === "Algorithms" ? 
        <>
        <h1>Algorithms</h1>
        <h4 style={{padding:"10px", paddingTop:"20px"}}><button onClick = {() => handleClick("Pre-processing")}>algorithms.preprocessing</button></h4>
        <table border = "1" cellpadding = "5" cellspacing = "5">
          <tr>
            <td><button onClick = {() => handleClick("MCF")}>MCF</button></td>
            <td>Description</td>
          </tr>
          <tr>
            <td><button onClick = {() => handleClick("Scalable")}>Scalable</button></td>
            <td>Description</td>
          </tr>
        </table>
        <h4 style={{padding:"10px", paddingTop:"20px"}}><button onClick = {() => handleClick("In-processing")}>algorithms.inprocessing</button></h4>
        <table border = "1" cellpadding = "5" cellspacing = "5">
          <tr>
            <td><button onClick = {() => handleClick("In1")}>In1</button></td>
            <td>Description</td>
          </tr>
          <tr>
            <td><button onClick = {() => handleClick("In2")}>In2</button></td>
            <td>Description</td>
          </tr>
        </table>
        <h4 style={{padding:"10px", paddingTop:"20px"}}><button onClick = {() => handleClick("Post-processing")}>algorithms.postprocessing</button></h4>
        <table border = "1" cellpadding = "5" cellspacing = "5">
          <tr>
            <td><button onClick = {() => handleClick("Post1")}>Post1</button></td>
            <td>Description</td>
          </tr>
          <tr>
            <td><button onClick = {() => handleClick("Post2")}>Post2</button></td>
            <td>Description</td>
          </tr>
        </table>
        </>
        : null
    }
    { 
        name === "Pre-processing" ? 
        <>
        <h1>algorithms.preprocessing</h1>
        <table border = "1" cellpadding = "5" cellspacing = "5">
          <tr>
            <td><button onClick = {() => handleClick("MCF")}>MCF</button></td>
            <td>Description</td>
          </tr>
          <tr>
            <td><button onClick = {() => handleClick("Scalable")}>Scalable</button></td>
            <td>Description</td>
          </tr>
        </table>
        </>
        : null
    }
    { 
        name === "MCF" ? 
        <h1>algorithms.preprocessing.MCF</h1>
        : null
    }
    { 
        name === "Scalable" ? 
        <h1>algorithms.preprocessing.Scalable</h1>
        : null
    }
    { 
        name === "In-processing" ? 
        <>
        <h1>algorithms.inprocessing</h1>
        <table border = "1" cellpadding = "5" cellspacing = "5">
          <tr>
            <td><button onClick = {() => handleClick("In1")}>In1</button></td>
            <td>Description</td>
          </tr>
          <tr>
            <td><button onClick = {() => handleClick("In2")}>In2</button></td>
            <td>Description</td>
          </tr>
        </table>
        </>
        : null
    }
    { 
        name === "In1" ? 
        <h1>algorithms.inprocessing.In1</h1>
        : null
    }
    { 
        name === "In2" ? 
        <h1>algorithms.inprocessing.In2</h1>
        : null
    }
    { 
        name === "Post-processing" ? 
        <>
        <h1>algorithms.postprocessing</h1>
        <table border = "1" cellpadding = "5" cellspacing = "5">
          <tr>
            <td><button onClick = {() => handleClick("Post1")}>Post1</button></td>
            <td>Description</td>
          </tr>
          <tr>
            <td><button onClick = {() => handleClick("Post2")}>Post2</button></td>
            <td>Description</td>
          </tr>
        </table>
        </>
        : null
    }
    { 
        name === "Post1" ? 
        <h1>algorithms.postprocessing.Post1</h1>
        : null
    }
    { 
        name === "Post2" ? 
        <h1>algorithms.postprocessing.Post2</h1>
        : null
    }
    { 
        name === "Datasets" ? 
        <>
        <h1>Datasets</h1>
        <table border = "1" cellpadding = "5" cellspacing = "5">
          <tr>
            <td><button onClick = {() => handleClick("bank")}>bank</button></td>
            <td>Description</td>
          </tr>
          <tr>
            <td><button onClick = {() => handleClick("census")}>census</button></td>
            <td>Description</td>
          </tr>
          <tr>
            <td><button onClick = {() => handleClick("diabetes")}>diabetes</button></td>
            <td>Description</td>
          </tr>
        </table>
        </>
        : null
    }
    { 
        name === "bank" ? 
        <h1>datasets.bank</h1>
        : null
    }
    { 
        name === "census" ? 
        <h1>datasets.census</h1>
        : null
    }
    { 
        name === "diabetes" ? 
        <h1>datasets.diabetes</h1>
        : null
    }
    { 
        name === "Metrics" ? 
        <>
        <h1>Metrics</h1>
        <table border = "1" cellpadding = "5" cellspacing = "5">
          <tr>
            <td><button onClick = {() => handleClick("balance")}>balance</button></td>
            <td>Description</td>
          </tr>
          <tr>
            <td><button onClick = {() => handleClick("cost")}>cost</button></td>
            <td>Description</td>
          </tr>
        </table>
        </>
        : null
    }
    { 
        name === "balance" ? 
        <h1>metrics.balance</h1>
        : null
    }
    { 
        name === "cost" ? 
        <h1>metrics.cost</h1>
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
 
