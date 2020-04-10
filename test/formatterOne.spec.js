import chai from 'chai';
import {thousandsSeparators} from '../src/formatterOne';

const { expect } = chai;

describe('First Thousand separator', function () {
 it('should return a string with formatted number', () => {
        const result = thousandsSeparators(83789);
        expect(result).to.equal('83,789');
    });
});
