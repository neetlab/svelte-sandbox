import App from './App.svelte';

const _app = new App({
	target: document.body,
	props: {
		// we'll learn about props later
		answer: 42
	}
});
