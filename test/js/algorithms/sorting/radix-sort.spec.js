import { radixSort } from '../../../../src/js';
import { testSortAlgorithm } from './sort-algorithm-tests';

testSortAlgorithm(radixSort, 'Radix Sort', { reverseCompare: false });

