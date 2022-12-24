import { Comment } from './comment';
import { Document } from './document';
import { Image } from './image';
import { Post } from './post';

const post = new Post(new Document('details.pdf'));
post.addComment(new Comment(new Image('adeel.jpg')));
post.addComment(new Comment(new Document('adeel.pdf')));
post.show();
