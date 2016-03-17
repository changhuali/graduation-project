export const TEST = "TEST";

export function test() {
    return dispatch => {
        dispatch({
            type: TEST,
            data: "ok"
        })
    }
}
