import { bucketSort } from '../../../../src/js';
import { testSortAlgorithm } from './sort-algorithm-tests';

testSortAlgorithm(bucketSort, 'Bucket Sort', { reverseCompare: false });
