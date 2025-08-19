import Create_Post from "./create_post";
import Post_Repository from "./post_repository";

export default class Load_post {
  private readonly repository: Post_Repository;
  constructor(repository: Post_Repository) {
    this.repository = repository;
  }
  public async run(title: string, description: string, author: string) {
    const post = Create_Post.create(title, description, author);
    await this.repository.save(post);
  }
}
