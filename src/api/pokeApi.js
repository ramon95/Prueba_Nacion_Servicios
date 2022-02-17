export const getPokemons = async () => {
	const data = await fetch(
		`${process.env.REACT_APP_API_URL}pokemon?limit=151`,
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

export const getPokemonWithDetails = async (id) => {
    const data = await fetch(
        `${process.env.REACT_APP_API_URL}pokemon/${id}`,
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

export const getPokemonsWithDetailsURL = async (url) => {
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
};

export const getPokemonsTpyes = async () => {
    const data = await fetch(
        `${process.env.REACT_APP_API_URL}type`,
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
