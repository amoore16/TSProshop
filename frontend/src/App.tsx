import React from "react";
import { Container } from "react-bootstrap";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import store from './store'

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/product:id" element={<ProductScreen />} />
            </Routes>
          </Container>
        </main>
      </Router>
    </Provider>
  );
};

export default App;
