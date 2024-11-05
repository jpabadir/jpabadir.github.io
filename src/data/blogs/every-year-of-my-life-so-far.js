import "./BlogStyles.css";

export default function Content() {
  return (
    <div>
      <h2>0-7 year old - the genesis 👶</h2>
      <p>I don't remember any of this.</p>
      <h2>8 years old - engineering 🛠️</h2>
      <p>
        <ul>
          <li>
            My grandpa got me a soldering iron against my mom's will and I made
            an underwater engine for a boat.
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
      <p>content to come</p>
      <h2>11 years old</h2>
      <p>content to come</p>
      <h2>12 years old</h2>
      <p>content to come</p>
      <h2>13 years old</h2>
      <ul>
        <li>
          <i>Pure Heroin</i> by Lorde was released. I listened to it on repeat
          while staring out the window of my dad's car pretending I was the main
          character in some movie and I was deeply misunderstood.
        </li>
      </ul>
      <h2>14 years old</h2>
      <ul>
        <li>
          My brother started playing guitar. After a month, he could play songs
          and I realized "this is not that hard!" so I started playing too. He
          stopped, I continued.
        </li>
      </ul>
      <h2>15 years old</h2>
      <p>content to come</p>
      <h2>16 years old</h2>
      <p>content to come</p>
      <h2>17 years old</h2>
      <p>content to come</p>
      <h2>18 years old</h2>
      <p>content to come</p>
      <h2>19 years old</h2>
      <p>content to come</p>
      <h2>20 years old</h2>
      <p>content to come</p>
      <h2>21 years old</h2>
      <p>content to come</p>
      <h2>22 years old</h2>
      <p>content to come</p>
      <h2>23 years old</h2>
      <p>content to come</p>
      <h2>24 years old</h2>
      <p>content to come</p>
      <div style={{ color: "lightgrey" }}>
        {Array.from({ length: 110 - 25 + 1 }, (_, i) => i + 25).map((year) => (
          <div>
            <h2>{year} years old - Uncertainty ❔</h2>
            <p>haven't lived this year yet. I wonder what will happen.</p>
          </div>
        ))}
      </div>
      <h2>X years old - the end 🌌</h2>
      <p>I guess this is it. Goodbye.</p>
    </div>
  );
}
