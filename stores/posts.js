import { defineStore } from "pinia";

export const usePostStore = defineStore('posts',{
    state:()=>({
        posts:[],
        loading:false,
        error:null 
    }),
    actions:{
            async fetchPostData(){
                this.error = null
                this.loading = true
                try{
                    const {data} = await useFetch("https://dummyjson.com/posts")
                    if(data.value){
                        this.posts = data.value.posts
                    }
                }
                catch(error){
                    this.error = "Failed to Fetch Data"
                }
            }
        
    }
    
    
})