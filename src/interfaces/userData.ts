/******************************************************************************
*                                                                             *
* Creation Date : 23/12/2024                                                  *
*                                                                             *
* Property : (c) This program, code or item is the Intellectual Property of   *
* Evelyn Neves Barreto. Any use or copy of this code is prohibited without    *
* the express written authorization of Evelyn. All rights reserved.           *
*                                                                             *
*******************************************************************************/

export interface IUserData {
    personalData: { name: string; email: string };
    transactions: Array<{
        month: string;
        date: string;
        type: string;
        amount: string;
        isNegative: boolean;
    }>;
    investiments: {
        totalAmount: string;
        fixedIncome: string;
        variableIncome: string;
    };
    cards: {
        physicalCard: Array<{ userName: string }>;
        virtualCard: Array<{ userName: string }>;
    };
}
