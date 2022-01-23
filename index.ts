class A {
  foo: string;
  bar: string;
  lorem: string;
  constructor(foo: string, bar: string) {
    this.foo = foo;
    this.bar = bar;
  }
  toString() {
    return this.lorem;
  }
}
new A("foo", "bar");

class B {
  foo: string;
  bar: string;
  constructor(foo: string, bar: string) {
    this.foo = foo;
    this.bar = bar;
  }
}
new B("foo", "bar");
class C {
  foo: string;
  bar: string;
  constructor(foo: string, bar: string) {
    this.foo = foo;
    this.bar = bar;
  }
}
new C("foo", "bar");
