import { interpolationSearch } from '../../../../src/ts';
import { testSearchAlgorithm } from './search-algorithms-tests';

testSearchAlgorithm(interpolationSearch, 'Interpolation Search', { customEquals: false });

