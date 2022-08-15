import { interpolationSearch } from '../../../../src/js';
import { testSearchAlgorithm } from './search-algorithms-tests';

testSearchAlgorithm(interpolationSearch, 'Interpolation Search', { customEquals: false });
