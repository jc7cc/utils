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
