enum ActionTypes {
    UPDATE_NAME = 'UPDATE_NAME',
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT'
}
export interface StateProps {
    name: string;
    isLogin: boolean;
}

export interface ActionProps {
    type: ActionTypes;
    key?: string;
    data?: StateProps;
}
