const person = {
  name: 'Mosh',
  walk: function() {
    console.log('Walking...')
  },
  talk() {
    console.log('Talking...')
  }
}

person.talk();
// person.name = '';

// We use bracket notation for property/method dynamic access.
const targetMember = 'name'; // input field on a form.
person[targetMember.value] = 'John';
