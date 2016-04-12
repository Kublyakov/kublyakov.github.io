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
  ua.device.family + '<br>',
  ua.device.name + '<br>',
  ua.device.version + '<br>',
  ua.device.major + '<br>',
  ua.device.minor + '<br>',
  ua.device.patch + '<br>',
  ua.device.type + '<br>',
  ua.device.manufacturer + '<br>',

  ua.os.family + '<br>',
  ua.os.name + '<br>',
  ua.os.version + '<br>',
  ua.os.major + '<br>',
  ua.os.minor + '<br>',
  ua.os.patch + '<br>'
);