import {User} from "../../model/User";
import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import Album from "../../model/Album";

export const fetchAlbums = createAsyncThunk("albums/fetch", async (user:User): Promise<{userId:string,albums:Album[]}> => {
    const response = await axios.get<Album[]>(`http://localhost:3005/albums?userId=${user.id}`);
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {userId:user.id as string,albums:response.data};
})
