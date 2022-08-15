import { radixSort } from '../../../../src/ts';
import { testSortAlgorithm } from './sort-algorithm-tests';

testSortAlgorithm(radixSort, 'Radix Sort', {reverseCompare: false});

