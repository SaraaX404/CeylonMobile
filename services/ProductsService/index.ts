import {
  CreateProductRequest,
  GetAllPostsResponse,
} from "../../models/ProductModels";
import API from "../API";

export const GetPosts = async (): Promise<GetAllPostsResponse[]> => {
  try {
    const res = await API.get("/posts");
    if (res.data) {
      return res.data;
    } else {
      return [];
    }
  } catch (error) {
    throw error;
  }
};

export const GetPostsById = async(id:string | string[] | undefined):Promise<GetAllPostsResponse>=>{


  try {
    const res = await API.get(`/posts/${id}`);
    console.log(res.data)
    if (res.data) {
      return res.data;
    } else {
      return {} as GetAllPostsResponse;
    }
  } catch (error) {
    throw error;
  }
}




export const GetPostsSeller = async():Promise<GetAllPostsResponse[]>=>{
  try {
    const res = await API.get(`/posts/MyPosts`);
    if (res.data) {
      return res.data;
    } else {
      return []
    }
  } catch (error) {
    throw error;
  }
}