export default function Home() {
	return <h1>index</h1>;
}

export async function getStaticProps() {
	const response = await fetch("http://localhost:3333/episodes");
	const data = await response.json();

	return {
		props: {
			episodes: data,
		},
		revalidate: 60 * 60 * 8,
	};
}
