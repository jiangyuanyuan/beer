
function tillNoNegative(arr) {
  const first = arr[0];
  const last = arr[arr.length - 1];
  if (first < 0) {
    arr.shift();
    arr.push(last + 1);
    tillNoNegative(arr);
  }
}
function tillNoMoreThanMax(arr, max) {
  const first = arr[0];
  const last = arr[arr.length - 1];
  if (last > max) {
    arr.pop();
    if (first > 0) arr.unshift(first - 1);
    tillNoMoreThanMax(arr, max);
  }
}
function shallAddHead(arr) {
  if (arr[0]) {
    arr.unshift(undefined);
    arr.unshift(0);
  }
}
function shallAddTail(arr, max) {
  const last = arr[arr.length - 1];
  if (last !== max) {
    arr.push(undefined);
    arr.push(max);
  }
}
function getList(nowIndex, max = 1, len = 7) {
  max = max - 1;
  const ret = new Array(Math.min(len, max + 1)).fill(0).map((item, index) => index + nowIndex - Math.floor(len / 2));
  tillNoNegative(ret);
  tillNoMoreThanMax(ret, max)
  shallAddHead(ret);
  shallAddTail(ret, max);
  return ret;
}

export default getList;
