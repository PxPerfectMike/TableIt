# TableIt

TableIt is a Node.js package for easily formatting HTML tables with predefined styles.

## Installation

```sh
npm install tableit
```

## Usage

```javascript
const TableIt = require('tableit');

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

const tableIt = new TableIt(html);
const formattedTable = tableIt.generate();
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

const tableIt = new TableIt(html, { styles: customStyles });
const formattedTable = tableIt.generate();
console.log(formattedTable);
```

# Contributing

Please open an issue or submit a pull request for any enhancements or bugs.

# TableIt
