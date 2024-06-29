import { parseTable } from './parser.js';
import { applyFormatting } from './formatter.js';
import defaultStyles from './styles.js';

class TableIt {
	constructor(html, options = {}) {
		this.html = html;
		this.styles = options.styles || defaultStyles;
	}

	generate() {
		const table = parseTable(this.html);
		return applyFormatting(table, this.styles);
	}
}

export default TableIt;
