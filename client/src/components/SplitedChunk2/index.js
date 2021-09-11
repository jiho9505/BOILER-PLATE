import { cube } from '@/utils/treeShakingTest';
import _ from 'lodash';

const chunk2 = () => {
  console.log(_);
  return cube(4);
};
export { chunk2 };
