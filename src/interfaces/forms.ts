export interface IFormData {
    name: string;
    email: string;
    password: string;
    acceptanceTerms: boolean;
}

export type ILoginForm = Omit<IFormData, "name">;