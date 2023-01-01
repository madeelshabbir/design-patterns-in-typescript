import { State } from './state';
import { Submission } from './submission';

export class Approved implements State {
  approve(submission: Submission): void {
    console.log('Submission is already approved!');
  }

  deny(submission: Submission): void {
    console.log('Unable to deny the approved submission!');
  }
};
