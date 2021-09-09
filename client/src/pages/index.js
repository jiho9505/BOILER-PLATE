export default class MainPage {
  constructor($parent) {
    const ele = document.createElement('div');
    ele.innerText = 'This is BoilerPlate';
    $parent.appendChild(ele);
  }
}
