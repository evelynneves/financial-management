import { IUserData } from "../interfaces/auth";

export const getLoggedInUser = (): IUserData | null => {
    const userDataString = sessionStorage.getItem('userData');
    if (!userDataString) {
        return null;
    }
    return JSON.parse(userDataString) as IUserData;
};
