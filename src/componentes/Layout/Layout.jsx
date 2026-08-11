import "./Layout.css";

const Layout = () => {
  const customAreas = {
    areaCocepto: { gridArea: "box-1" },
    areaVector: { gridArea: "box-2" },
    areaPhilosophy: { gridArea: "box-3" },
    areaCanva: { gridArea: "box-4" },
    areaMusic: { gridArea: "box-5" },
  };

  return (
    <div className="contenedor-grid">
      <div className="box" style={customAreas.areaCocepto}>
        <h3>CONCEPT DRAWING</h3>
      </div>
      <div className="box" style={customAreas.areaVector}></div>
      <div className="box" style={customAreas.areaPhilosophy}>
        <h3>DESING PHILOSOPHY</h3>
      </div>
      <div className="box" style={customAreas.areaCanva}></div>
      <div className="box" style={customAreas.areaMusic}>
        SOUNDTRACK
      </div>
    </div>
  );
};

export default Layout;
