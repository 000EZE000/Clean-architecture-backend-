export class Tools {
  static isNotSting = (string: any) =>
    typeof string !== "string" ? true : false;
    
  static isNotNumber = (number: any) =>
    typeof number !== "number" ? true : false;

  static isNotUser = (obj: any) => {
    if (!obj) return true;

    const { isNotNumber, isNotSting } = this;
    return isNotSting(obj.name)
      ? true
      : isNotSting(obj.email)
      ? true
      : isNotNumber(obj.phoneNumber)
      ? true
      : isNotSting(obj.description)
      ? true
      : false;
  };
}
