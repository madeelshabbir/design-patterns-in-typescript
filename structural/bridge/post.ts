import { Comment } from './comment';
import { Model } from './model';

export class Post extends Model {
  protected comments: Array<Comment> = [];

  addComment(comment: Comment): void {
    this.comments.push(comment);
  }

  show(): void {
    console.log(`<# Post ${this.attachment.details()} >`);
    this.comments.forEach((comment) => comment.show());
  }
};
