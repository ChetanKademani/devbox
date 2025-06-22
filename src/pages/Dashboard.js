import React, { useEffect, useState } from "react";
import data from "../services/api";
import SideMenu from "../components/sideMenu";
import style from "../themes/style";
import account from "../assets/icons/account.png";
import statistics from "../assets/icons/statistics.png";

const Dashboard = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setApiData(data);
    }, 500);
  }, []);

  const user = {
    name: "Chetan K",
    email: "chetank@gmail.com",
    role: "Software Developer",
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <SideMenu />
      <div style={{ flex: 1, padding: "2rem", backgroundColor: "#f4f6fa" }}>
        <h2>Hello, {user.name}</h2>
        <div style={sectionCard}>
          <div style={aligncenter}>
            <img src={account} alt="Dashboard" style={style.icon40} />
            <h2 style={{ paddingLeft: "10px" }}>{user.name}</h2>
          </div>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Role:</strong> {user.role}
          </p>
        </div>

        <div style={sectionCard}>
          <div style={aligncenter}>
            <img src={statistics} alt="Dashboard" style={style.icon40} />
            <h2 style={{ paddingLeft: "10px" }}> API Usage</h2>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={style.cellStyle}>API Name</th>
                  <th style={style.cellStyle}>Time</th>
                  <th style={style.cellStyle}>Status</th>
                  <th style={style.cellStyle}>Response Time</th>
                </tr>
              </thead>
              <tbody>
                {apiData.map((item, index) => (
                  <tr key={index}>
                    <td style={style.cellStyle}>{item.apiName}</td>
                    <td style={style.cellStyle}>{item.time}</td>
                    <td
                      style={{
                        ...style.cellStyle,
                        color: item.status === "200" ? "green" : "red",
                      }}
                    >
                      {item.status}
                    </td>
                    <td style={style.cellStyle}>{item.responseTime} ms</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const sectionCard = {
  backgroundColor: "#fff",
  padding: "1.5rem",
  borderRadius: "10px",
  marginBottom: "2rem",
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
};

const aligncenter = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};

export default Dashboard;
