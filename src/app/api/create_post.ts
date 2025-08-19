export default class Create_Post {
    public title: string
    public description: string
    public author: string

  constructor(title: string, description: string, author: string) {
    this.check_title(title)
    this.title = title
    this.check_description(description)
    this.description = description
    this.check_author(author)
    this.author = author
  }

  private check_title(title: string){
    if (title.length < 5) {
      throw new Error("The title needs more than five characters");
    }
  }

  private check_description(description: string) {
    if (description.length < 10) {
      throw new Error("The description needs more than ten characters");
    }
  }

  private check_author(author: string) {
    if (author.length < 3) {
      throw new Error("The author needs more than three characters");
    }
  }
}
