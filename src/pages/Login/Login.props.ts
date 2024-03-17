type ActionTypes = 'UPDATE_NAME' | 'LOGIN' | 'LOGOUT'

export interface StateProps {
    name: string | undefined;
    isLogin: boolean;
}

export interface ActionProps {
    type: ActionTypes;
    key?: string;
    data?: string;
}
