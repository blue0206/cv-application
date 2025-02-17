import './styles/app.style.css';
import { General, Education, Work, Preview } from './components';

function App() {

    return (
		<>
			<main>
				<div className="section-details">
					<General></General>
					<Education></Education>
					<Work></Work>
				</div>
				<div className="section-preview">
					<Preview></Preview>
				</div>
			</main>
		</>
    );
}

export default App;
