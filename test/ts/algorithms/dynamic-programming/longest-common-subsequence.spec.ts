import 'mocha';
import { expect } from 'chai';
import { lcs } from '../../../../src/ts';

describe('LCS Dynamic Programming', () => {

  it('works with DP approach', () => {
    const wordX = 'acbaed';
    const wordY = 'abcadf';

    expect(lcs(wordX, wordY)).to.equal(4);
  });
});
