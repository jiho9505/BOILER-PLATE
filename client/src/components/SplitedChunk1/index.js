import { cube } from '@/utils/treeShakingTest';
import _ from 'lodash';

const chunk1 = () => {
  console.log(_);
  return cube(5);
};

export { chunk1 };
