import { Directory } from './directory';
import { File } from './file';

const dir1 = new Directory('first-dir');
const file1 = new File('hello-world.js', 'console.log("Hello World!")')
dir1.addFile(file1);
const file2 = new File('hello-world.py', 'print("Hello World!")');
const dir2 = new Directory('nested-dir');
dir2.addFile(file2);
dir1.addFile(dir2);
dir1.view();
dir2.view();
file1.view();
file2.view();
