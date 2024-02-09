import "./App.css";
import { CiFacebook } from "react-icons/ci";

function App() {
	return (
		<div className="content">
			<header>
				<h1>vagabundinaNews</h1>
				<nav>
					<CiFacebook />
					<CiFacebook />
					<CiFacebook />
				</nav>
			</header>

			<aside>.</aside>

			<main>
				<h2>titulo</h2>
				<p>la cosa esta tremenda</p>
				<img
					height="200px"
					width="200px"
					src="https://i.etsystatic.com/27945386/r/il/a55314/3294064885/il_1588xN.3294064885_suct.jpg"
					alt=""
				/>
			</main>

			<footer>.</footer>
		</div>
	);
}

export default App;
