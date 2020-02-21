const elasticlunr = require('elasticlunr');
const words = require('./words.json');


class SearchEngine {
  constructor() {
    this.index = elasticlunr();
    this.index.addField('word');
    this.index.setRef('id');
    this.index.saveDocument(false);

    for (const [index, word] of words.entries()) {
      this.index.addDoc({'id': index + 1, 'word': word });
    }
  }

  search(query) {
    return this.index.search(query);
  }
}

const searchEngine = new SearchEngine();
module.exports = searchEngine;
