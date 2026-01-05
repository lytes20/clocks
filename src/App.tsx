import Clock from "./components/Clock";
import "./styles.css";
const CLOCK_THEMES = ["Stranger Things", "Kill Bill", "Breaking Bad"];
function App() {
  return (
    <div className="clocks">
      {CLOCK_THEMES.map((theme) => {
        return <Clock key={theme} theme={theme} />;
      })}
    </div>
  );
}
export default App;
