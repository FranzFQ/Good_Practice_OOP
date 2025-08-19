export default class Title {
  public value: string;
  constructor(title: string) {
    this.check_title(title);
    this.value = title;
  }

  private check_title(title: string) {
    if (title.length < 5) {
      throw new Error("The title needs more than five characters");
    }
  }
}
