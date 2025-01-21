/******************************************************************************
*                                                                             *
* Creation Date : 23/12/2024                                                  *
*                                                                             *
* Property : (c) This program, code or item is the Intellectual Property of   *
* Evelyn Neves Barreto. Any use or copy of this code is prohibited without    *
* the express written authorization of Evelyn. All rights reserved.           *
*                                                                             *
*******************************************************************************/

export const formatCurrency = (value: string): string => {
    // Remove characters that are not numbers or comma
    const formattedValue = value.replace(/[^0-9,]/g, '');

    // Split the integer part and the decimal part
    const [integerPart, decimalPart] = formattedValue.split(',');

    // Remove leading zeros from the integer part
    const integerPartWithoutLeadingZeros = integerPart.replace(/^0+/, '') || '0';

    // Add thousand separators to the integer part
    const formattedIntegerPart = integerPartWithoutLeadingZeros.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    // Return the properly formatted value
    if (decimalPart !== undefined) {
        return `${formattedIntegerPart},${decimalPart.slice(0, 2)}`;
    }
    return formattedIntegerPart;
};
