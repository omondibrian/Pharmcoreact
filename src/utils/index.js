export const findByTestAtrr = (Component,atrr) => {
    const wrapper = Component.find(`[data-test='${atrr}']`);
    return wrapper;

}