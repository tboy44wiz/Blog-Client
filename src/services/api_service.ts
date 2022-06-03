'use strict';


import axios from "axios";



/**
 * @class API_Service
 * */
class API_Service {

    // Create a Blog.
    static createBlog = async (url:string, blogData:{}, token:string) => {
        const full_url = `${url}`;
        console.log(full_url);
        console.log(blogData);

        const response = await axios({
            method: "blog",
            url: full_url,
            data: blogData,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`
            }
        });

        return response;        
    };


    //  Get all Blogs.
    static getAllBlogs = async(url:string) => {
        const full_url = `${url}`;
        // console.log(full_url);

        try {
            const response = await axios({
                method: "get",
                url: full_url,
                headers: { 'Content-Type': 'application/json' },
            });
            const isSuccess = response.data.success;

            if (isSuccess) {
                return response.data;       
            } 

        } catch (error: any) {
            return error.response.data;;
        }
    }


    //  Get single Blogs.
    static getSingleBlog = async(url:string, id:string) => {
        const full_url = `${url}/${id}`;
        // console.log(full_url);

        try {
            const response = await axios({
                method: "get",
                url: full_url,
                headers: { 'Content-Type': 'application/json' },
            });
            const isSuccess = response.data.success;

            if (isSuccess) {
                return response.data;
            }
    
        } catch (error: any) {
            return error.response.data;
        }
    }


    // Create a Blog.
    static updateSingleBlog = async (url:string, id:string, blogData:{}, token:string) => {
        const full_url = `${url}/${id}`;
        console.log(full_url);
        console.log(blogData);

        const response = await axios({
            method: "put",
            url: full_url,
            data: blogData,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`
            }
        });

        return response;        
    };


    // Create a Blog.
    static deleteSingleBlog = async (url:string, id:string, token:string) => {
        const full_url = `${url}/${id}`;
        console.log(full_url);

        const response = await axios({
            method: "delete",
            url: full_url,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`
            }
        });

        return response;        
    };
}


export default API_Service