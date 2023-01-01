import { State } from './state';
import { Submission } from './submission';

export class Pending implements State {
  approve(submission: Submission): void {
    submission.currentState = submission.approved;
    console.log('Submission is successfully Approved!');
  }

  deny(submission: Submission): void {
    submission.currentState = submission.denied;
    console.log('Submission is Denied!');
  }
};
