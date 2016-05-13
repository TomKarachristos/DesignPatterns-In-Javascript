function a(x) {
  // do stuff here...
}

function b(y) {
  // do stuff here...
}

function ab(x, y) {
  // in bridge pattern we create here two class(a,b)
  // in facade we simplify the use by call the two
  // by just calling the ab
  a(x);
  b(y);
}
