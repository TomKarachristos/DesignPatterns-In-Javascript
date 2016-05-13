function a(x) {
  // do stuff here...
}

function b(y) {
  // do stuff here...
}

function ab(x, y) {
  // in facade we simplify the use by call the two
  // by just calling the ab
  a(x);
  b(y);
}
