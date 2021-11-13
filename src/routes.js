import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";

const Routes = [
    {
        path: "/result",
        // component: ResultPage,
        exact: true
    },
    {
        path: "/quiz",
        component: QuizPage,
        exact: true
    },
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