let helpers =  {

  formatPrice :  function(cents) {
    return '$' + ( (cents / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') );
  },
  random : function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  },
  slugify : function(text) {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  },
  getRandomNum : function() {
    return Math.floor(Math.random() * (9999)) + 1;
  }
  ,
  getFunName : function() {
    const randomNumber = this.getRandomNum();

    const adjectives = ['adorable', 'beautiful', 'clean', 'drab', 'elegant',
    'fancy', 'glamorous', 'grand', 'handsome', 'long', 'magnificent', 'old-fashioned',
    'plain', 'quaint', 'sparkling', 'ugliest', 'unsightly', 'angry', 'prideful',
    'bewildered', 'clumsy', 'defeated', 'noble', 'embarrassed', 'fierce', 'grumpy',
    'helpless', 'itchy', 'jealous', 'lazy', 'mysterious', 'nervous', 'obnoxious',
    'panicky', 'repulsive', 'scary', 'thoughtless', 'uptight', 'worried'];

    const nouns = ['women', 'men', 'children', 'teeth', 'feet', 'people',
    'leaves', 'mice', 'geese', 'halves', 'knives', 'wives', 'lives',
    'elves', 'loaves', 'potatoes', 'tomatoes', 'cacti', 'foci', 'fungi',
    'nuclei', 'syllabuses', 'analyses', 'diagnoses', 'oases', 'theses',
    'crises', 'phenomena', 'criteria', 'data', 'wafer', 'silicon nun', 'barbies',
    'elephant', 'trolls', 'bears', 'wolves', 'goats', 'Apple', 'coffee'
  ];

    return `${randomNumber}-${this.random(adjectives)}-${this.random(adjectives)}-${this.random(nouns)}`;
  }
}

export default helpers;
