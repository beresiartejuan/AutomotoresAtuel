import { Switch, Route } from "wouter";
import "./App.css";
import Index from "./pages/Index";

interface RouteInfo {
    path: string,
    component: () => JSX.Element
};

const routes: RouteInfo[] = [
    {
        path: "/",
        component: Index
    }
];

function App() {
    return (
        <Switch>
            {routes.map((r, key) => <Route {...r} key={key}></Route>)}
        </Switch>
    )
}

export default App
