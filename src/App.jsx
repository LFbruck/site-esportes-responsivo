import "./styles/global.css";
import "./styles.css";
import Menu from "./components/Menu";
import Main from "./components/Main";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div>
      <Menu />
      <Main />
      <Footer />
    </div>
  );
}
