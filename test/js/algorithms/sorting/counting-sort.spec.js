import { countingSort } from '../../../../src/js';
import { testSortAlgorithm } from './sort-algorithm-tests';

testSortAlgorithm(countingSort, 'Counting Sort', { reverseCompare: false });
