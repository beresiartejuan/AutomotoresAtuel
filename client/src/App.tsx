import { Switch, Route } from "wouter";
import Index from "./pages/Index";
import type { RouteProps } from "wouter";

const routes: RouteProps[] = [
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
