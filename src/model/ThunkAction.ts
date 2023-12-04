import {SerializedError} from "@reduxjs/toolkit";

export interface ThunkAction<D> {
    data: D,
    isLoading: boolean,
    error: SerializedError|null
}
