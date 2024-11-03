import "./Athletics.css";

export default function NoFights() {
  const lastFightDate = "2024-09-01T04:00:00.000Z";
  const daysSinceLastFight = Math.floor(
    (new Date() - new Date(lastFightDate)) / (1000 * 60 * 60 * 24)
  );

  return (
    <div>
      <h3>Weightlifting</h3>
      <div>
        <strong>Squat</strong>: 5 sets of 5 reps at 185 lbs
      </div>
      <div>
        <strong>Bench press</strong>: 5 sets of 5 reps at 185 lbs
      </div>
      <div>
        <strong>Romanian deadlift</strong>: 5 sets of 5 reps at 185 lbs
      </div>
      <div>
        <strong>Overhead press</strong>: 5 sets of 5 reps at 85 lbs
      </div>
      <div>
        <strong>Barbell Curl</strong>: 5 sets of 5 reps at 70 lbs
      </div>
      <h3 className="mt-3">Running</h3>
      <div>
        <strong>Half marathon record</strong>: 02:10:33 on 2024-10-20
      </div>
    </div>
  );
}
