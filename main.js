import utils from "web3-utils";

const BN = utils.BN;

export class Message {
  constructor(status, msg, err) {
    if (typeof status !== "boolean") {
      throw new Error("status type is boolean");
    }
    this.status = status;
    this.data = msg;
    this.err = err;
  }

  ok() {
    return this.status;
  }
}

// params are passed as array
export async function retrive(methods, args) {
  if (args === undefined) args = [];
  try {
    const msg = await methods(...args).call();
    return new Message(true, msg);
  } catch (err) {
    return new Message(false, undefined, err);
  }
}

export function delay(second) {
  return new Promise((resolve, _) => {
    setTimeout(resolve, second * 1000);
  });
}

export function stringEq(a, b) {
  if (typeof stringA === "string" && typeof stringB === "string") {
    return stringA.toUpperCase() === stringB.toUpperCase();
  }

  return false;
}

function bnPair(a, b) {
  return [new BN(a), new BN(b)];
}

export function bnGt(a, b) {
  [a, b] = bnPair(a, b);
  return a.gt(b);
}

export function bnLt(a, b) {
  [a, b] = bnPair(a, b);
  return a.lt(b);
}

export function bnAdd(a, b) {
  [a, b] = bnPair(a, b);
  return a.add(b).toString();
}

export function bnSub(a, b) {
  [a, b] = bnPair(a, b);
  return a.sub(b).toString();
}

export function bnMul(a, b) {
  [a, b] = bnPair(a, b);
  return a.mul(b).toString();
}

export function bnDiv(a, b) {
  [a, b] = bnPair(a, b);
  return a.div(b).toString();
}

function fromWeiPair(a, b) {
  return [utils.fromWei(a), utils.fromWei(b)];
}

export function bnProportion(a, b) {
  [a, b] = fromWeiPair(a, b);
  return +a / +b;
}

export function bnScale(num, scale) {
  num = utils.fromWei(num);
  return utils.toWei(String(+num * scale));
}
