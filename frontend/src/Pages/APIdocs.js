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
            label: "Proportionality"
          }
        ]
      },
      {
        label: "Post-processing",
        submenu: [
          {
            label: "Post1"
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
        label: "diabetes full"
      },
      {
        label: "iris"
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
        label: "kcenter cost"
      },
      {
        label: "kmeans cost"
      },
      {
        label: "kmedian cost"
      },
      {
        label: "proportionality (rho)"
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
    handleArrowClick(data, menuName)
  };

  const handleArrowClick = (data, menuName) => {
    let newActiveMenus = [...activeMenus];

    if (newActiveMenus.includes(menuName)) {
      var index = newActiveMenus.indexOf(menuName);
      if (index > -1) {
        newActiveMenus.splice(index, 1);
      }
    } else {
      newActiveMenus.push(menuName);
      setName(data.label);
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
                <li><button onClick={() => handleClick("Algorithms")}>Algorithms</button></li>
                <ul>
                  <li><button onClick={() => handleClick("Pre-processing")}>algorithms.preprocessing</button></li>
                  <li><button onClick={() => handleClick("In-processing")}>algorithms.inprocessing</button></li>
                  <li><button onClick={() => handleClick("Post-processing")}>algorithms.postprocessing</button></li>
                </ul>
                <li><button onClick={() => handleClick("Datasets")}>Datasets</button></li>
                <ul>
                  <li><button onClick={() => handleClick("bank")}>datasets.bank</button></li>
                  <li><button onClick={() => handleClick("census")}>datasets.census</button></li>
                  <li><button onClick={() => handleClick("diabetes full")}>datasets.diabetes full</button></li>
                  <li><button onClick={() => handleClick("iris")}>datasets.iris</button></li>
                  <li><button onClick={() => handleClick("diabetes")}>datasets.diabetes</button></li>
                </ul>
                <li><button onClick={() => handleClick("Metrics")}>Metrics</button></li>
                <ul>
                  <li><button onClick={() => handleClick("balance")}>metrics.balance</button></li>
                  <li><button onClick={() => handleClick("kcenter cost")}>metrics.kcenter cost</button></li>
                  <li><button onClick={() => handleClick("kmeans cost")}>metrics.kmeans cost</button></li>
                  <li><button onClick={() => handleClick("kmedian cost")}>metrics.kmedian cost</button></li>
                  <li><button onClick={() => handleClick("proportionality (rho)")}>metrics.proportionality</button></li>
                </ul>
                <li><button onClick={() => handleClick("Explainers")}>Explainers</button></li>
              </ul>
            </>
            : null
        }
        {
          name === "Algorithms" ?
            <>
              <h1>Algorithms</h1>
              <h4 style={{ padding: "10px", paddingTop: "20px" }}><button onClick={() => handleClick("Pre-processing")}>algorithms.preprocessing</button></h4>
              <table border="1" cellpadding="5" cellspacing="5">
                <tr>
                  <td><button>MCF</button></td>
                  <td>This Algorithm introduces the concept of fairlets, which are subsets of data points that can be used to achieve fairness in clustering. It proposes a two-step approach where initial clusters are formed using a base clustering algorithm, followed by refining the clusters to satisfy fairness constraints based on fairlets.</td>
                </tr>
                <tr>
                  <td><button>Scalable</button></td>
                  <td>Scalable algorithm for fair clustering, which can efficiently handle large datasets. uses techniques such as resampling, re-weighting, re-ranking, and parallel processing to ensure fairness in cluster compositions while addressing scalability challenges.</td>
                </tr>
              </table>
              <h4 style={{ padding: "10px", paddingTop: "20px" }}><button onClick={() => handleClick("In-processing")}>algorithms.inprocessing</button></h4>
              <table border="1" cellpadding="5" cellspacing="5">
                <tr>
                  <td><button>Proportionality</button></td>
                  <td>This Algorithm proposes a fairness notion called proportionality fairness. Aims to ensure that each cluster contains a proportionate representation of different sensitive attribute groups. uses fairness constraints and optimization techniques to achieve proportionality fairness in cluster compositions.</td>
                </tr>
              </table>
              <h4 style={{ padding: "10px", paddingTop: "20px" }}><button onClick={() => handleClick("Post-processing")}>algorithms.postprocessing</button></h4>
              <table border="1" cellpadding="5" cellspacing="5">
                <tr>
                  <td><button>Post1</button></td>
                  <td>Description</td>
                </tr>
              </table>
            </>
            : null
        }
        {
          name === "Pre-processing" || name === "MCF" || name === "Scalable" ?
            <>
              <h1>algorithms.preprocessing</h1>
              <table border="1" cellpadding="5" cellspacing="5">
                <tr>
                  <td><button>MCF</button></td>
                  <td>This Algorithm introduces the concept of fairlets, which are subsets of data points that can be used to achieve fairness in clustering. It proposes a two-step approach where initial clusters are formed using a base clustering algorithm, followed by refining the clusters to satisfy fairness constraints based on fairlets.</td>
                </tr>
                <tr>
                  <td><button>Scalable</button></td>
                  <td>Scalable algorithm for fair clustering, which can efficiently handle large datasets. uses techniques such as resampling, re-weighting, re-ranking, and parallel processing to ensure fairness in cluster compositions while addressing scalability challenges.</td>
                </tr>
              </table>
            </>
            : null
        }
        {
          name === "In-processing" || name === "Proportionality" ?
            <>
              <h1>algorithms.inprocessing</h1>
              <table border="1" cellpadding="5" cellspacing="5">
                <tr>
                  <td><button>Proportionality</button></td>
                  <td>This Algorithm proposes a fairness notion called proportionality fairness. Aims to ensure that each cluster contains a proportionate representation of different sensitive attribute groups. uses fairness constraints and optimization techniques to achieve proportionality fairness in cluster compositions.</td>
                </tr>
              </table>
            </>
            : null
        }
        {
          name === "Post-processing" || name === "Post1" ?
            <>
              <h1>algorithms.postprocessing</h1>
              <table border="1" cellpadding="5" cellspacing="5">
                <tr>
                  <td><button>Post1</button></td>
                  <td>Description</td>
                </tr>
              </table>
            </>
            : null
        }
        {
          name === "Datasets" || name === "bank" || name === "census" || name === "diabetes full" || name === "iris" || name === "diabetes" ?
            <>
              <h1>Datasets</h1>
              <table border="1" cellpadding="5" cellspacing="5">
                <tr>
                  <td><button>bank</button></td>
                  <td>The data is about marketing campaigns of a Portuguese bank. The campaigns were based on phone calls. Often, more than one contact to the same client was required, in order to access if the product (bank term deposit) would be ('yes') or not ('no') subscribed.</td>
                </tr>
                <tr>
                  <td><button>census</button></td>
                  <td>This is 1994 Census data. A set of reasonably clean records was extracted using the following conditions: ((AAGE greater than 16) && (AGI greater than 100) && (AFNLWGT greater than 1)&& (HRSWK greater than 0)). Prediction task is to determine whether a person makes over 50K a year.</td>
                </tr>
                <tr>
                  <td><button>diabetes full</button></td>
                  <td>The data set represents 10 years (1999-2008) of clinical care at 130 US hospitals. It has over 50 features representing patient and hospital outcomes. Helps to figure out situations where a patient will not be readmitted, or if their are going to be readmitted in less than 30 days</td>
                </tr>
                <tr>
                  <td><button>iris</button></td>
                  <td>The datasets consists of three iris species with 50 samples each as well as some properties about each flower. One flower species is linearly separable from the other two, but the other two are not linearly separable from each other.</td>
                </tr>
                <tr>
                  <td><button>diabetes</button></td>
                  <td>The datasets consists of several medical predictor variables and one target variable, Outcome. Predictor variables includes the number of pregnancies the patient has had, their BMI, insulin level, age, and so on.</td>
                </tr>

              </table>
            </>
            : null
        }
        {
          name === "Metrics" || name === "balance" || name === "kcenter cost" || name === "kmeans cost" || name === "kmedian cost" || name === "proportionality (rho)" ?
            <>
              <h1>Metrics</h1>
              <table border="1" cellpadding="5" cellspacing="5">
                <tr>
                  <td><button>balance</button></td>
                  <td>Minimum ratio between protected group members in a cluster and protected group members in the data set, measured over all groups and clusters. Its value lies between 0 and 1. By 0 means unfair and 1 means fair.</td>
                </tr>
                <tr>
                  <td><button>kcenter cost</button></td>
                  <td>Maximum of the minimum distance between any data point to the cluster center. Lower cost leads to more fairness.</td>
                </tr>
                <tr>
                  <td><button>kmeans cost</button></td>
                  <td>Sum of the minimum of the distances squared to the cluster centers. Lower cost leads to high fairness.</td>
                </tr>
                <tr>
                  <td><button>kmedian cost</button></td>
                  <td>Sum of the minimum of the distances to the cluster centers. Lower cost leads to high fairness.</td>
                </tr>
                <tr>
                  <td><button>proportionality (rho)</button></td>
                  <td>For n samples and k clusters, any n/k points are entitled to form their own cluster if there is another center that is closer in distance for all n/k points. Higher proportionality leads to high fairness.</td>
                </tr>
              </table>
            </>
            : null
        }
        {
          name === "Explainers" ?
            <>
              <h1>Explainers</h1>
              <table border="1" cellpadding="5" cellspacing="5">
                <tr>
                  <td><button>JSONExplainer</button></td>
                  <td>It generates three output attributes in the JSON format - meta attributes, which includes its name, a description of its definition and its ideal value in a bias-free world; statistical attributes, which include the raw and derived numbers.</td>
                </tr>
              </table>
            </>
            : null
        }
      </div>
    </div>
  );
};

