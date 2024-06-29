import TableIt from '../src/index.js';
import { expect } from 'chai';

describe('TableIt', () => {
	it('should format an HTML table correctly', () => {
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
		const result = tableIt.generate();

		expect(result).to.include('border: 1px solid black;');
		expect(result).to.include('padding: 8px;');
		expect(result).to.include('background-color: #f2f2f2;');
	});
});
