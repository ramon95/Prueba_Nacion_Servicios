export const getPokemons = async () => {
	const data = await fetch(
		`${process.env.REACT_APP_API_URL}pokemon`,
		{
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		}
	);
	return await data.json();
};

export const getPokemonsWithDetails = async (url) => {
    const data = await fetch(
        url,
        {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }
    );
    return await data.json();
}