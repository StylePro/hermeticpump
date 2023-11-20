import styles from './App.module.css'
import Nav from "./components/menu/Nav";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div className={styles.container}>
            <Nav/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
