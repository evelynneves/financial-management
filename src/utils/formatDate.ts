export const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    };
    return new Intl.DateTimeFormat("pt-BR", options).format(date);
};
