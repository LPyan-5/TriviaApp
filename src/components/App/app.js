import Routes from '../../routes';
import { renderRoutes } from "react-router-config";

function App() {
	return (
		<div>
			{renderRoutes(Routes)}
		</div>
	);
}

export default App;
