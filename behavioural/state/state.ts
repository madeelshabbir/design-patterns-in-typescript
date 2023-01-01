import { Submission } from './submission';

export interface State {
  approve(submission: Submission): void;
  deny(submission: Submission): void;
};
