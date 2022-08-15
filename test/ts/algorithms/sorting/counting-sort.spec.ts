import { countingSort } from '../../../../src/ts';
import { testSortAlgorithm } from './sort-algorithm-tests';

testSortAlgorithm(countingSort, 'Counting Sort', {reverseCompare: false});
