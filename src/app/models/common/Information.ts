import { AddOn } from "./AddOn";
import { PersonalInformation } from "./PersonalInformation";
import { Plan } from "./Plan";

export interface Information{
    personal_information?: PersonalInformation,
    plan?: Plan,
    addOns?: AddOn[]
}