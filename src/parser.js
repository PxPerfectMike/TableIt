import cheerio from 'cheerio';

export function parseTable(html) {
	const $ = cheerio.load(html);
	const table = $('table');
	return table;
}
