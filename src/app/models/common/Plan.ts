export interface Plan{
    subscription: SubscriptionType,
    information: PlanInformation
}

export interface PlanInformation{
    image: string, 
    title: string, 
    price: number,
    detail: string
}

export enum SubscriptionType{
    Monthly = "Monthly",
    Yearly = "Yearly"
}