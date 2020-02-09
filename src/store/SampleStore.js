import { observable } from "mobx";

export default class SampleStore {
  @observable
  value1 = "value of value2";

  @observable
  value2 = "value of value2";
}
