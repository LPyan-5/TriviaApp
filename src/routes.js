import HomePage from "./pages/HomePage";

const Routes = [
    {
        path: "/",
        component: HomePage,
        exact: true
    },
    {
        path: "*",
        // component: NotFound,
        exact: true
    }
];

export default Routes;