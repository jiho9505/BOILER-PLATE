import math from '@/utils/treeShakingTest';
import { chunk1 } from '@/components/SplitedChunk1';
import { chunk2 } from '@/components/SplitedChunk2';

export default class MainPage {
  constructor($parent) {
    const ele = document.createElement('div');
    ele.innerText = math.cube(4) + chunk1() + chunk2();
    $parent.appendChild(ele);
  }
}
