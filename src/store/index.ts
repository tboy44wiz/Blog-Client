import { createStore } from 'vuex';

import API_Service from '../services/api_service';
import API_Routes from '../services/api_routes'

//  Images
import postImage_1 from '@/assets/images/blog/post_1.png';
import postImage_2 from '@/assets/images/blog/post_2.png';
import postImage_3 from '@/assets/images/blog/post_3.png';


/**
 * STORE
*/
const appStore =  createStore({
  state: {
    blogTags: ["HTML", "CSS", "JavaScript", "NodeJS", "ReactJS", "VueJS", "Svelte", "Dart", "Flutter", "Java", "Kotlin", "Swift"],
    blogs: [],
    blog: {},
    blogDetailTags: [],
    recentBlogs: [
      {
        id: 1,
        image: postImage_1,
        title: "From life was you fish...",
        date: "April 21, 2022",
      },
      {
          id: 2,
          image: postImage_2,
          title: "The Amazing Hubble Hubble",
          date: "April 21, 2022",
      },
      {
          id: 3,
          image: postImage_3,
          title: "Astronomy Or Astrology",
          date: "April 21, 2022",
      },
    ],
    suggestedBlogs: [
      {
          id: 1,
          image: postImage_1,
          title: "From life was you fish...",
          date: "April 21, 2022",
      },
      {
          id: 2,
          image: postImage_2,
          title: "The Amazing Hubble Hubble",
          date: "April 21, 2022",
      },
      {
          id: 3,
          image: postImage_3,
          title: "Astronomy Or Astrology",
          date: "April 21, 2022",
      },
    ],
    errorMessage: "",
  },



  /**
   * GETTERS
  */
  getters: {
    blogsGetter: (state) => state.blogs,
    blogGetter: (state) => state.blog,
    blogTagsGetter: (state) => state.blogTags,
    blogDetailTagsGetter: (state) => state.blogDetailTags,
    recentBlogsGetter: (state) => state.recentBlogs,
    suggestedBlogsGetter: (state) => state.suggestedBlogs,
  },


  /**
   * MUTATIONS / SETTERS
  */
  mutations: {
    SET_BLOGS: (state, payLoad) => state.blogs = payLoad,

    SET_BLOG: (state, payLoad) => state.blog = payLoad,

    SET_BLOG_DETAIL_TAGS: (state, payload) => state.blogDetailTags = payload,

    SET_ERROR_MESSAGE: (state, payLoad) => state.errorMessage = payLoad,
  },



  /**
   * ACTIONS
  */
  actions: {
    //  Create Blog.
    /*async createBlog() {
      const response = await API_Service.createBlog(API_Routes.createBlog_url, );
    }*/


    //  Get All Blogs.
    getAllBlogs: async ({ commit }) => {
      const blogResponse = await API_Service.getAllBlogs(API_Routes.getAllBlogs_url);
      const isSuccess = blogResponse.success;

      if (isSuccess) {
        const blogData = blogResponse.data;
        commit("SET_BLOGS", blogData);    
      } else {
        const errorMessage = blogResponse.message;
        commit("SET_ERROR_MESSAGE", errorMessage);
      }
            
      // console.log("RESPONSE::: ", blogResponse.data);
    },


    //  Get Single Blogs.
    getSingleBlog: async ({ commit }, { blogId }) => {
      const blogResponse = await API_Service.getSingleBlog(API_Routes.getSingleBlog_url, blogId);
      const isSuccess = blogResponse.success;

      if (isSuccess) {
        const blogData = blogResponse.data;
        commit("SET_BLOG", blogData);
        commit("SET_BLOG_DETAIL_TAGS", blogData.tags)
      } else {
        const errorMessage = blogResponse.message;
        commit("SET_ERROR_MESSAGE", errorMessage);
      }

      // console.log("IDDDDD::: ", blogId);
      // console.log("IDDDDD::: ", blogResponse.data);
    },


    //  Update Single Blogs.
    updateSingleBlog: async () => {
      const response = await API_Service.updateSingleBlog(API_Routes.updateSingleBlog_url, "111100001111", {}, "tooooooookeeen");
    },


    //  Delete Single Blogs.
    gggg: async () => {
      const response = await API_Service.deleteSingleBlog(API_Routes.deleteSingleBlog_url, "111100001111", "tooooooookeeen");
    },

  },
  


  /**
   * MODULES
  */
  modules: {
  }
});

export default appStore;
