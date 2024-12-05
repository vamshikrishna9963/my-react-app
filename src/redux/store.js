import {  legacy_createStore as createStore} from "redux";
import { TicketReduser } from "./ticket/reducer";

export const ReduxData=createStore(TicketReduser)