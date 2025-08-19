export default class Author {
  public value: string;
  constructor(author: string) {
    this.check_author(author);
    this.value = author;
  }
  private check_author(author: string) {
    if (author.length < 3) {
      throw new Error("The author needs more than three characters");
    }
  }
}
