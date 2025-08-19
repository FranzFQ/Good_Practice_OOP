import { create } from "domain";
import Author from "./author";
import Description from "./description";
import Title from "./title";

export default class Create_Post {
  public title: Title;
  public description: Description;
  public author: Author;

  constructor(title: Title, description: Description, author: Author) {
    this.title = title;
    this.description = description;
    this.author = author;
  }

  public static create(title: string, description: string, author: string) {
    const post = new Create_Post(
      new Title(title),
      new Description(description),
      new Author(author)
    );
    return post;
  }
}
