const style = {
  loginWrapper: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },

  loginBox: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "400px",
    padding: "30px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  },

  wrapper: {
    marginBottom: "1rem",
    display: "flex",
    flexDirection: "column",
  },

  label: {
    marginBottom: "0.4rem",
    fontWeight: 500,
    color: "#333",
    fontSize: "14px",
  },

  input: {
    padding: "10px 12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
  },

  inputFocus: {
    borderColor: "#007bff",
    boxShadow: "0 0 0 3px rgba(0, 123, 255, 0.2)",
  },

  dashboardWrapper: {
    minHeight: "92vh",
    backgroundColor: "#f7f9fc",
    padding: "2rem",
  },

  dashboardContainer: {
    maxWidth: "900px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },

  profileCard: {
    backgroundColor: "#fff",
    padding: "1.5rem",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  },

  tableWrapper: {
    backgroundColor: "#fff",
    padding: "1.5rem",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  },

  heading: {
    marginBottom: "1rem",
    fontSize: "1.25rem",
    fontWeight: "bold",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },

  cellStyle: {
    padding: "0.75rem",
    borderBottom: "1px solid #ddd",
    textAlign: "left",
  },

  icon: {
    width: "20px",
    height: "20px",
  },

  icon40: {
    width: "40px",
    height: "40px",
  },

  icons60: {
    width: "60px",
    height: "60px",
  },
};

export default style;
