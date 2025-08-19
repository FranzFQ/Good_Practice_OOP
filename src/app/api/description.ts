export default class Description {
  public description: string;
  constructor(description: string) {
    this.check_description(description);
    this.description = description
  }
  private check_description(description: string) {
    if (description.length < 10) {
      throw new Error("The description needs more than ten characters");
    }
  }
}
