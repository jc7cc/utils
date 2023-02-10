import assert from "assert";
import { default as web3utils } from "web3-utils";
import * as utils from "../main.js";

it("add two bn number", function () {
  assert.deepStrictEqual(utils.bnAdd(1, 1), "2");
  assert.deepStrictEqual(
    utils.bnAdd(web3utils.toWei("1"), web3utils.toWei("0.5")),
    web3utils.toWei("1.5"),
  );
});

it("subtraction between two bn number", function () {
  assert.deepStrictEqual(utils.bnSub(1, 1), "0");
  assert.deepStrictEqual(
    utils.bnSub(web3utils.toWei("1"), web3utils.toWei("0.5")),
    web3utils.toWei("0.5"),
  );
});

it("multiplication between two bn number", function () {
  assert.deepStrictEqual(utils.bnMul(1, 1), "1");
  assert.deepStrictEqual(
    utils.bnMul("2000000000", "20000000"),
    "40000000000000000",
  );
});

it("division between two bn number", function () {
  assert.deepStrictEqual(utils.bnDiv(1, 1), "1");
  assert.deepStrictEqual(
    utils.bnDiv("2000000000", "20000000"),
    "100",
  );
});

it("bn greater", function () {
  assert.deepStrictEqual(utils.bnGt(100, 10), true);
  assert.deepStrictEqual(
    utils.bnGt(web3utils.toWei("100"), web3utils.toWei("10")),
    true,
  );
  assert.deepStrictEqual(
    utils.bnGt(web3utils.toWei("10"), web3utils.toWei("89")),
    false,
  );
});

it("bn less", function () {
  assert.deepStrictEqual(utils.bnLt(100, 10), false);
  assert.deepStrictEqual(
    utils.bnLt(web3utils.toWei("100"), web3utils.toWei("10")),
    false,
  );
  assert.deepStrictEqual(
    utils.bnLt(web3utils.toWei("10"), web3utils.toWei("89")),
    true,
  );
});

it("bn proportion", function () {
  assert.deepStrictEqual(utils.bnProportion("10", "100"), 0.1);
  assert.deepStrictEqual(
    utils.bnProportion(web3utils.toWei("10"), web3utils.toWei("100")),
    0.1,
  );
  assert.deepStrictEqual(
    utils.bnProportion(web3utils.toWei("5"), web3utils.toWei("25")),
    0.2,
  );
});

it("bn scale", function () {
  assert.deepStrictEqual(
    utils.bnScale(web3utils.toWei("10"), "100"),
    web3utils.toWei("1000"),
  );
  assert.deepStrictEqual(
    utils.bnScale(web3utils.toWei("0.5"), "0.5"),
    web3utils.toWei("0.25"),
  );
});
