import { Slider } from "./slider";

QUnit.test("New slider instance next test", function (assert) {
  const slider = new Slider();
  assert.ok(slider.next() === 1, "Passed!");
});

QUnit.test("New slider instance prev test", function (assert) {
  const slider = new Slider();
  assert.ok(slider.prev() === 4, "Passed!");
});
