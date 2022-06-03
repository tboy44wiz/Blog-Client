//  Base URL.
// const base_url = "https://foretrust-leads-record-api.herokuapp.com/api/v1";
export const base_url = "http://localhost:5000/api/v1";


/**
 * Admin
 */





/**
 * Clients
 */

//  Blogs.
export const createBlog_url = `${base_url}/blogs/create_blog`;
export const getAllBlogs_url = `${base_url}/blogs/all_blogs`;
export const getSingleBlog_url = `${base_url}/blogs/single_blog`;
export const updateSingleBlog_url = `${base_url}/blogs/update_blog`;
export const deleteSingleBlog_url = `${base_url}/blogs/delete_blogs`;


class API_Routes {
    /**
     * Admin
     */





    /**
     * Clients
     */

    //  Blogs.
    static createBlog_url = `${base_url}/blogs/create_blog`;
    static getAllBlogs_url = `${base_url}/blogs/all_blogs`;
    static getSingleBlog_url = `${base_url}/blogs/single_blog`;
    static updateSingleBlog_url = `${base_url}/blogs/update_blog`;
    static deleteSingleBlog_url = `${base_url}/blogs/delete_blogs`;

}

export default API_Routes;