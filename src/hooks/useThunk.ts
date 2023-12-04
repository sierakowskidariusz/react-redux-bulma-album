import {useCallback, useState} from 'react';
import {useAppDispatch} from "../store";
import {AsyncThunk} from "@reduxjs/toolkit";

export type Dispatch<A> = (value: A) => void;

/**
 * Scala wywołanie asynchroniczne z kontrolą flagi jego przetwarzania oraz ewentualnych błędów
 * @param thunk Wywołanie asynchroniczne
 */
export default function useThunk<A>(thunk:AsyncThunk<any, A, any>): [Dispatch<A>, boolean, any] {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useAppDispatch();
    const runThunk = useCallback(
        (arg:A) => {
            setIsLoading(true);
            dispatch(thunk(arg))
                .unwrap()
                .catch((err:any) => setError(err))
                .finally(() => setIsLoading(false));
        },
        [dispatch, thunk]
    );
    return [runThunk, isLoading, error];
}
