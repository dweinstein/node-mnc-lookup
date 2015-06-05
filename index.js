var fs = require('fs');
var TSV = require('tsv');
var Parser = new TSV.Parser("\t");
var indexBy = require('lodash.indexby');
var find = require('lodash.find');



var data = fs.readFileSync(__dirname+'/data/mnclist.tsv').toString();
var parsed = Parser.parse(data).slice(0,-1);

module.exports = find.bind(null, parsed);

