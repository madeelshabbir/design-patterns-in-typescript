import { Approved } from './approved';
import { Denied } from './denied';
import { Pending } from './pending';
import { State } from './state'

export class Submission {
  readonly pending: State = new Pending();
  readonly approved: State = new Approved();
  readonly denied: State = new Denied();

  currentState: State;

  constructor() {
    this.currentState = this.pending;
  }

  approve() {
    this.currentState.approve(this);
  }

  deny () {
    this.currentState.deny(this);
  }
};
