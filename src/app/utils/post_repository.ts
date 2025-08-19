import Create_Post from "./create_post";

export default interface Post_Repository{
    save(post: Create_Post): Promise<void>
}