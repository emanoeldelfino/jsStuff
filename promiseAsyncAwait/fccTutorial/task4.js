// Task 4: get the neigher countries of Columbia

const fetchCountry = async (alpha3Code) => {
  try {
    const res = await fetch(
      `https://restcountries.eu/rest/v2/alpha/${alpha3Code}`
    );

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchCountryAndNeighbors = async (country = 'col') => {
  const colombia = await fetchCountry(country);

  const neighbors = await Promise.all(colombia.borders.map(border => fetchCountry(border)))

  console.log(neighbors);
}

fetchCountryAndNeighbors('bra');