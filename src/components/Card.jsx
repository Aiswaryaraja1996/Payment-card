export default function Card(props) {
  return (
    <div
      style={{
        width: "30%",
        margin: "1rem auto",
        backgroundColor: `${props.color}`,
        padding: "1rem",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p>{props.date}</p>
          <div
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "0.5rem",
            }}
          >
            CASE STUDY
          </div>
          <h1>{props.heading}</h1>
          <h2>{props.subHeading}</h2>
        </div>
        <div
          style={{
            width: "50%",
            textAlign: "right",
          }}
        >
          <img src={props.logo} alt={props.heading} width="30%" />
        </div>
      </div>
    </div>
  );
}
