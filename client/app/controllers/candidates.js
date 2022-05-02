import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class CandidatesController extends Controller {
  @action
  addNew(event) {
    event.preventDefault();
    const data = {
      name: this.names,
      age: this.ages,
    };

    if (!data.name || !data.age) {
      alert(`Name and age fields are required.`);
    } else {
      let post = this.store.createRecord('applicant', data);
      post.save();
    }
  }
}
