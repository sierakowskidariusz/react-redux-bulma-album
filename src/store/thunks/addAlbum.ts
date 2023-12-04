import {createAsyncThunk} from "@reduxjs/toolkit";
import Album from "../../model/Album";
import axios from "axios";

export const addAlbum = createAsyncThunk("albums/add", async (album:Album): Promise<{userId:string,albums:Album[]}> => {
    const response = await axios
        .post<Album>('http://localhost:3005/albums', album)
        .then(() => axios.get<Album[]>(`http://localhost:3005/albums?userId=${album.userId}`));
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {userId:album.userId,albums:response.data};
})
