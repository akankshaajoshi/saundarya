const TryOn = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", margin: "0px", overflow: "hidden", boxSizing: "border-box" }}>
      <iframe
        src="index2.html"
        width="100%"
        height="100%"
        style={{ border: "none", boxSizing: "border-box" }}
        title="Try on Site"
      ></iframe>
    </div>
  );
};

export default TryOn;
