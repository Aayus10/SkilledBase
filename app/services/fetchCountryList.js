const fetchCountries = async () => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    return response;
  } catch {
    console.log("Error fetching country data");
  }
};

export const fetchCountryList = async () => {
  const response = await fetchCountries();
  const data = await response.json();
  const countryList = await data.map((country) => ({
    label: country.name.common, // Country name
    image: country.flags.png, // Country flag
  }));
  if (countryList) {
    return countryList;
  }
};
