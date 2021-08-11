import Posts from "./Posts";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Foo from "./Components/Foo";
import NotFound from "./Components/NotFound";
import OnePost from "./Components/OnePost";
import FormikPost from "./Components/FormikPost";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/foo" exact component={Foo} />
            <Route path="/posts" exact component={Posts} />
            <Route path="/post/:id" exact component={OnePost} />
            <Route path="/formik" exact component={FormikPost} />
            <Route path="*" exact component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
