import {createAsyncThunk} from "@reduxjs/toolkit";
import Album from "../../model/Album";
import axios from "axios";

export const removeAlbum = createAsyncThunk("albums/remove", async (album:Album): Promise<{userId:string,albums:Album[]}> => {
    const response= await axios
        .delete(`http://localhost:3005/albums/${album.id}`)
        .then(() => axios.get<Album[]>(`http://localhost:3005/albums?userId=${album.userId}`));
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {userId:album.userId,albums:response.data};
})
