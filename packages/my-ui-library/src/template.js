export function createTemplate(state, props) {
  return h("div", {}, [
    h("p", {}, `Count: ${state.count}`),
    h("button", { on: { click: props.handleClick } }, "Add"),
  ]);
}
