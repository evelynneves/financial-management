/******************************************************************************
*                                                                             *
* Creation Date : 23/12/2024                                                  *
*                                                                             *
* Property : (c) This program, code or item is the Intellectual Property of   *
* Evelyn Neves Barreto. Any use or copy of this code is prohibited without    *
* the express written authorization of Evelyn. All rights reserved.           *
*                                                                             *
*******************************************************************************/

import { IUserData } from "../interfaces/auth";

export const getLoggedInUser = (): IUserData | null => {
    const userDataString = sessionStorage.getItem('userData');
    if (!userDataString) {
        return null;
    }
    return JSON.parse(userDataString) as IUserData;
};
