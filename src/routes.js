import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';
import Scores from './pages/Scores';

const Routes = [
    {
        path: '/scores',
        component: <Scores />,
        exact: true,
    },
    {
        path: '/result',
        component: <ResultPage />,
        exact: true,
    },
    {
        path: '/quiz',
        component: <QuizPage />,
        exact: true,
    },
    {
        path: '/',
        component: <HomePage />,
        exact: true,
    },
];

export default Routes;
