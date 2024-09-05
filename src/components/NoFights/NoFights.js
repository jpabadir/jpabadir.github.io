import "./NoFights.css";

export default function NoFights() {
  const lastFightDate = "2024-09-01T04:00:00.000Z";
  const daysSinceLastFight = Math.floor(
    (new Date() - new Date(lastFightDate)) / (1000 * 60 * 60 * 24)
  );

  return (
    <div>
      No fights since{" "}
      <span style={{ color: "red", fontSize: "40px" }}>
        {new Date(lastFightDate).toLocaleDateString()}
      </span>
      . That's{" "}
      <blink style={{ color: "red", fontSize: "40px" }}>
        {daysSinceLastFight}
      </blink>{" "}
      days without a fight!
      <br />
      <br />
      <br />
      <div>
        High score so far:{" "}
        <span className="highscore">{daysSinceLastFight}</span> days
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div style={{ color: "grey" }}>Contact admin to reset.</div>
    </div>
  );
}
