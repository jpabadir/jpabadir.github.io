import "./BlogStyles.css";

export default function Content() {
  const age = 24;
  const percentageElapsed = Math.floor((age / 110) * 100);

  return (
    <div>
      <hr />
      <div className="mb-4">
        <h4>
          Life elapsed: {age} years. I estimate that's {percentageElapsed}% of
          my life. I <i>think</i> I'll live to 110?
        </h4>
        <div
          style={{
            width: "100%",
            backgroundColor: "#e0e0df",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${percentageElapsed}%`,
              height: "20px",
              backgroundColor: "#4caf50",
              borderRadius: "10px",
            }}
          ></div>
        </div>
      </div>
      <hr />
      <div>
        <h2>0-7 year old - genesis 👶</h2>
        <p>
          <ul>
            <li>
              I don't remember any of this. Actually yeah, I skipped the second
              year of kindergarten, and I remember that. I was too smart and
              bored with the other kids. I was a genius. I'm not anymore.
            </li>
          </ul>
        </p>
        <h2>8 years old - engineering 🛠️</h2>
        <p>
          <ul>
            <li>
              My grandpa got me a soldering iron against my mom's will and I
              made an underwater engine for a boat.
            </li>
            <li>
              Almost set my parents' house on fire trying to make a hot air
              balloon. My dad tried to propel it in the air with his arm but it
              didn't work.
            </li>
            <li>
              My cousin lent me his iPod and I listened to "The Real Slim Shady"
              on repeat. The beginning of my love for rap.
            </li>
          </ul>
        </p>
        <h2>9 years old</h2>
        <ul>
          <li>
            Was obsessively reading Cherub and Artemis Fowl. Had a massive crush
            on Kerry Chang.
          </li>
        </ul>
        <h2>10 years old</h2>
        <p>
          <ul>
            <li>
              My best friend from elementary school moved to La Réunion. I was
              devastated.
            </li>
          </ul>
        </p>
        <h2>11 years old</h2>
        <p>content to come</p>
        <h2>12 years old</h2>
        <p>content to come</p>
        <h2>13 years old</h2>
        <ul>
          <li>
            <i>Pure Heroin</i> by Lorde was released. I listened to it on repeat
            while staring out the window of my dad's car pretending I was the
            main character in some movie and I was deeply misunderstood.
          </li>
        </ul>
        <h2>14 years old</h2>
        <ul>
          <li>
            My brother started playing guitar. After a month, he could play
            songs and I realized "this is not that hard!" so I started playing
            too. He stopped, I continued.
          </li>
          <li>
            My mom forced me to go to my high school's pre-orientation meeting.
            I fought her on it but she won. I ended up listening to a talk by
            the principal of the private native English-speaking section of the
            school who was encouraging people to apply even if they weren't sure
            they could get in. I thought "I'm not sure I can get in" and
            applied. I got in. This significantly changed the course of my life,
            since it allowed me to learn English and move to Canada 3 years
            later. Thanks, mom...
          </li>
          <li>
            My friend Ben showed me codecademy. I didn't really "get it", at the
            time.
          </li>
        </ul>
        <h2>15 years old</h2>
        <p>content to come</p>
        <p></p>
        <h2>16 years old</h2>
        <p>
          <ul>
            <li>
              Had extra time and decided to open up codecademy again. This time,
              I "got it". I was hooked. Python arrays and for loops had nothing
              on me.
            </li>
          </ul>
        </p>
        <h2>17 years old</h2>
        <p>content to come</p>
        <h2>18 years old</h2>
        <p>content to come</p>
        <h2>19 years old</h2>
        <p>
          <ul>
            <li>
              Started a software development consultancy with my friend Noah. We
              printed out business cards, took the bus to the mall, and
              solicited every business. We found one client and made a web app
              for them. We made $6K CAD. I was rich. We fucked up and
              accidentally deleted their database. I decided we should refund
              them. I was poor again. We closed down the business after this, we
              had to focus on our studies and internships anyway.
            </li>
          </ul>
        </p>
        <h2>20 years old</h2>
        <p>content to come</p>
        <h2>21 years old</h2>
        <p>content to come</p>
        <h2>22 years old</h2>
        <p>
          <ul>
            <li>
              Started working out seriously and really enjoying it. The
              beginning of a lifelong love for exercise. Focused on losing the
              few lbs of fat I had, and went from 163 to 154 lbs.
            </li>
          </ul>
        </p>
        <h2>23 years old</h2>
        <p>
          <ul>
            <li>
              Started lifting weights. Until then, I thought people who lifted
              were meatheads. I was wrong. Started focusing on gaining muscle
              and putting on weight. Went from 154 to 176 lbs.
            </li>
          </ul>
        </p>
        <h2>24 years old</h2>
        <p>
          <ul>
            <li>
              Started writing this blog article. I may not be a genius anymore,
              but I'm definitely still as self-centered as I was when I was 4.
              I'm working on it.
            </li>
          </ul>
        </p>
        <div style={{ color: "lightgrey" }}>
          {Array.from(
            { length: 110 - (age + 1) + 1 },
            (_, i) => i + (age + 1)
          ).map((year) => (
            <div>
              <h2>{year} years old - Uncertainty ❔</h2>
              <p>haven't lived this year yet. I wonder what will happen.</p>
            </div>
          ))}
        </div>
        <h2>X years old - the end 🌌</h2>
        <p>I guess this is it. Goodbye.</p>
      </div>
    </div>
  );
}
