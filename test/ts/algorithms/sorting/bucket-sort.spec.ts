import { bucketSort } from '../../../../src/ts';
import { testSortAlgorithm } from './sort-algorithm-tests';

testSortAlgorithm(bucketSort, 'Bucket Sort', {reverseCompare: false});
