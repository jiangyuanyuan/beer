function getWindowType(num) {
  if (num>1200) return 'large';
  if (num>992) return 'normal';
  if (num>768) return 'small';
  if (num>576) return 'mini';
  return 'min';
}
export const windowWidth = {
  offsetWidth: document.body.offsetWidth,
  type: 'large',
};

export default windowWidth;
window.addEventListener('resize', function () {
  windowWidth.offsetWidth = document.body.offsetWidth;
  windowWidth.type = getWindowType(windowWidth.offsetWidth);
});
window.addEventListener('load', function () {
  windowWidth.offsetWidth = document.body.offsetWidth;
  windowWidth.type = getWindowType(windowWidth.offsetWidth);
});
