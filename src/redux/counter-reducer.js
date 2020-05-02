const RESET = 'RESET';
const INC = 'INC';
const SET_VALUES = 'SET_VALUES';
const CHANGE_START_VALUE = 'CHANGE_START_VALUE';
const CHANGE_MAX_VALUE = 'CHANGE_MAX_VALUE';
const SET_SAVED_VALUES = 'SET_SAVED_VALUES';

const initialState = {
    displayValue: 0,
    currentStartCount: 0,
    currentMaxCount: 5
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case RESET:
            return {
                ...state,
                displayValue: state.currentStartCount
            };
        case INC:
            return {
                ...state,
                displayValue: state.displayValue + 1
            };
        case SET_VALUES:
            let setValues = JSON.stringify({
                setStartCount: state.currentStartCount,
                setMaxCount: state.currentMaxCount
            });
            localStorage.setItem('setValues', setValues);
            return {
                ...state,
                displayValue: state.currentStartCount
            };
        case CHANGE_START_VALUE:
            if (action.error) {
                return {
                    ...state,
                    currentStartCount: +action.newValue,
                    displayValue: 'Incorrect value'
                }
            } else {
                return {
                    ...state,
                    currentStartCount: +action.newValue,
                    displayValue: 'Enter values and press "set"'
                }
            }
        case CHANGE_MAX_VALUE:
            if (action.newValue <= state.currentStartCount){
                return {
                    ...state,
                    currentMaxCount: +action.newValue,
                    displayValue: 'Incorrect value'
                }
            } else {
                return {
                    ...state,
                    currentMaxCount: +action.newValue,
                    displayValue: 'Enter values and press "set"'
                }
            }
        case SET_SAVED_VALUES:
            let savedValues = JSON.parse(localStorage.getItem('setValues'));
            if (savedValues){
                return {
                    ...state,
                    currentMaxCount: savedValues.setMaxCount,
                    currentStartCount: savedValues.setStartCount,
                    displayValue: savedValues.setStartCount
                }
            }
            break;
        default:
            return state;
    }
};

export const reset = () => ({type: RESET});
export const inc = () => ({type: INC});
export const setValues = () => ({type: SET_VALUES});
export const changeStartValue = (newValue, error) => ({type: CHANGE_START_VALUE, newValue, error});
export const changeMaxValue = (newValue) => ({type: CHANGE_MAX_VALUE, newValue});
export const setSavedValues = () => ({type: SET_SAVED_VALUES});

export default counterReducer;
