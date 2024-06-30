# EasyTable

EasyTable is a Node.js package for easily formatting HTML tables with predefined styles.

## Installation

```sh
npm install easy-html-tables
```

## Usage

```javascript
const EasyTable = require('easy-html-tables');

const html = `
    <table>
        <tr>
            <th>Header 1</th>
            <th>Header 2</th>
        </tr>
        <tr>
            <td>Data 1</td>
            <td>Data 2</td>
        </tr>
    </table>
`;

const easyTable = new EasyTable(html);
const formattedTable = easyTable.generate();
console.log(formattedTable);
```

## Custom Styles

You can pass custom styles as an option:

```javascript
const customStyles = {
	table: { border: '2px solid blue' },
	th: { 'background-color': 'gray' },
	td: { 'font-style': 'italic' },
};

const easyTable = new EasyTable(html, { styles: customStyles });
const formattedTable = easyTable.generate();
console.log(formattedTable);
```

# Contributing

Please open an issue or submit a pull request for any enhancements or bugs.

# EasyTable
