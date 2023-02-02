export class Tools {
  static isNotSting = (string: any) =>
    typeof string !== "string" ? true : false;

  static isNotNumber = (number: any) =>
    typeof number !== "number" ? true : false;

  static isNotUser = (obj: any) => {
    if (!obj) return true;

    const { isNotSting } = this;
    return isNotSting(obj.name)
      ? true
      : isNotSting(obj.email)
      ? true
      : isNotSting(obj.phoneNumber)
      ? true
      : isNotSting(obj.description)
      ? true
      : false;
  };
}
