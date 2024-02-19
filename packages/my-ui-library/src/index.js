import { init } from "snabbdom/build/package/init";
import { h } from "snabbdom/build/package/h";
import { createTemplate } from "./template";

const patch = init([]);

export function createUI(root, initialState) {
  let state = initialState;

  function updateState(newState) {
    state = { ...state, ...newState };
    render();
    console.log("State updated:", state);
  }

  function render() {
    patch(root, createTemplate(state, { handleClick }));
  }

  function handleClick() {
    updateState({ count: state.count + 1 });
  }

  function onMount() {
    console.log("Component mounted");
  }

  render();
  onMount();

  return {
    updateState,
  };
}
