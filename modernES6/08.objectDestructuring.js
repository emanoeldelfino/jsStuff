const address = {
  street: 'Alameda Negra Arroyo, 308',
  city: 'Albuquerque',
  state: 'Novo México',
  country: 'Estados Unidos',
}

// const street = address.street;
// const city = address.city;
// const country = address.country;
// const state = address.state;

// Extracts the properties from the object.
const {street: st , city: ct} = address;

console.log(st);
console.log(ct);
