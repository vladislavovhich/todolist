import {CombineActions} from "../store"

const initState = {}

type InitStateType = typeof initState
export type ActionsTypes = ReturnType<CombineActions<typeof actions>>
type ThunkType = BaseThunkType<ActionsTypes>

const todoReducer = (state: InitStateType = initState, action: ActionsTypes): InitStateType => {
    switch (action.type) {
        default: {
            return state
        }
    }
};

export const actions = {
    test: () => ({
        type: "TEST_ACTION"
    } as const)
}

export const thunks = {
    testThunk: (): ThunkType => async (dispatch) => {
    }
}

export default todoReducer