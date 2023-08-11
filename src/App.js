import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AnalyticsTest from "./AnalyticsTest";
function App() {
  const chanege = () => {
    const names = ["c", "f", "e"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };

  return (
    <div className="App">
      {/* <Header />
      <Content />
      <Footer /> */}
      <AnalyticsTest />
    </div>
  );
}

export default App;
