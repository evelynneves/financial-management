/******************************************************************************
*                                                                             *
* Creation Date : 23/12/2024                                                  *
*                                                                             *
* Property : (c) This program, code or item is the Intellectual Property of   *
* Evelyn Neves Barreto. Any use or copy of this code is prohibited without    *
* the express written authorization of Evelyn. All rights reserved.           *
*                                                                             *
*******************************************************************************/

export const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    };
    return new Intl.DateTimeFormat("pt-BR", options).format(date);
};

export const formatDateWithoutWeekday = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    };
    return new Intl.DateTimeFormat("pt-BR", options).format(date);
};
