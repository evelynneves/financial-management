/******************************************************************************
*                                                                             *
* Creation Date : 23/12/2024                                                  *
*                                                                             *
* Property : (c) This program, code or item is the Intellectual Property of   *
* Evelyn Neves Barreto. Any use or copy of this code is prohibited without    *
* the express written authorization of Evelyn. All rights reserved.           *
*                                                                             *
*******************************************************************************/

export interface IFormData {
    name: string;
    email: string;
    password: string;
    acceptanceTerms: boolean;
}

export type ILoginForm = Omit<IFormData, "name">;