import { observable, extendObservable } from "mobx";
import SampleStore from "./SampleStore";

class Store {
  constructor() {
    extendObservable(this, {
      sample: new SampleStore(this)
    });
  }
}

export default observable(new Store());
