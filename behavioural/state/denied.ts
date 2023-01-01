import { State } from './state';
import { Submission } from './submission';

export class Denied implements State {
  approve(submission: Submission): void {
    console.log('Unable to approve the denied submission!');
  }

  deny(submission: Submission): void {
    console.log('Submission is already denied!');
  }
};
