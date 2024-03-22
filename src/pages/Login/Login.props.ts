export interface StateProps {
    name: string | undefined;
    isLogin: boolean;
}

export interface LoginForm {
    loginName: {
        value: string;
    }
}
