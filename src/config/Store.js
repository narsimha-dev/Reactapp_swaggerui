const USER_TOKEN="USERTOKEN";
const storage=sessionStorage;
const LocallStore={   
   setToken:function(key,token){
     // let tokenn={tokens:token}
    storage.setItem(key,JSON.stringify(token));
   },
   getToken:function(){
      let user=storage.getItem(USER_TOKEN);
 return JSON.parse(user);
   },
   loginuser:function(){
     let getToken=this.getToken();
     let value=getToken!==null && getToken.length>5;
     return value;
   },
   logoutUser:function(callback){
     storage.clear();
     setTimeout(callback,50);
   },
   
    }
    export default LocallStore;
