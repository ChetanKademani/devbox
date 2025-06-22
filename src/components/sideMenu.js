import { useNavigate } from "react-router-dom";

const SideMenu = () => {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/", { replace: true });
  };

  return (
    <div style={styles.sidebar}>
      <h2 style={styles.title}>Devbox</h2>
      <ul style={styles.menu}>
        <li style={styles.item}>Dashboard</li>
        <li style={styles.item} onClick={() => logout()}>
          Logout
        </li>
      </ul>
    </div>
  );
};

const styles = {
  sidebar: {
    width: "220px",
    minHeight: "100vh",
    backgroundColor: "#2c3e50",
    color: "#fff",
    padding: "20px",
    boxSizing: "border-box",
  },
  title: {
    marginBottom: "2rem",
    fontSize: "20px",
  },
  menu: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  item: {
    padding: "10px 0",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default SideMenu;
