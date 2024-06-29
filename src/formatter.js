export function applyFormatting(table, styles) {
	// Apply styles to table elements
	table.find('th').css(styles.th);
	table.find('td').css(styles.td);
	table.find('tr').css(styles.tr);
	table.css(styles.table);

	return table.html();
}
