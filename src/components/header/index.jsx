import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style.scss';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<Link href="/"><h1>Preact App</h1></Link>
				<nav>
					<Link href="/">Home</Link>
					<Link href="/profile">Me</Link>
					<Link href="/profile/Mohit">Mohit</Link>
				</nav>
			</header>
		);
	}
}
