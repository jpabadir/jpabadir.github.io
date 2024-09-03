import "./NoFights.css";

export default function NoFights() {
  const lastFightDate = "2024-09-01";
  const daysSinceLastFight = Math.floor(
    (new Date() - new Date(lastFightDate)) / (1000 * 60 * 60 * 24)
  );

  return (
    <div>
      No fights since{" "}
      <span style={{ color: "red", fontSize: "40px" }}>
        {lastFightDate.toString()}
      </span>
      . That's{" "}
      <blink style={{ color: "red", fontSize: "40px" }}>
        {daysSinceLastFight}
      </blink>{" "}
      days without a fight!
      <br />
      <br />
      <br />
      <br />
      <br />
      <div style={{color: 'grey'}}>Contact admin to reset.</div>
    </div>
  );
}
