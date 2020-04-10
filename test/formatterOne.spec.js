import assert from 'assert';
import chai from 'chai';
import {thousandsSeparators} from '../src/formatterOne';

const { expect } = chai;

describe('First Thousand separator', function () {
 it('should return a number', () => {
        const result = thousandsSeparators(4500);
        console.log(result);
        expect(result).to.equal('4,500');
    });
});
