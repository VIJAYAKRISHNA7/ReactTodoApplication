function Popup({onClose}){
    return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <h2>Popup Title</h2>
        <p>Sigup Successfully!</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );

}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  popup: {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    minWidth: "300px",
    textAlign: "center"
  }
};



export default Popup;