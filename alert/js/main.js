class Test {
  constructor(name) {
    console.log(`Привет ${name}`);
    this.type = `human`;
    console.log(`${this.type}`);
  }
  changetype() {
    this.type = `alien`;
    console.log(this.type);
  }
}

let test = new Test(`Кирилл`);
test.changetype();

let ua = detect.parse(navigator.userAgent);

document.write (
  '1: ' + ua.device.family + '<br>',
  '2:  ' + ua.device.name + '<br>',
  '3: ' + ua.device.version + '<br>',
  '4: ' + ua.device.major + '<br>',
  '5: ' + ua.device.minor + '<br>',
  '6: ' + ua.device.patch + '<br>',
  '7: ' + ua.device.type + '<br>',
  '8: ' + ua.device.manufacturer + '<br>',

  '9: ' + ua.os.family + '<br>',
  '10: ' + ua.os.name + '<br>',
  '11: ' + ua.os.version + '<br>',
  '12: ' + ua.os.major + '<br>',
  '13: ' + ua.os.minor + '<br>',
  '14: ' + ua.os.patch + '<br>'
);