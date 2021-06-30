import {createContext,useReducer} from "react";
import AuthReducer from "./AuthReducer";
const INITIAL_STATE={
    user:{_id
        :
        "60dc35ad8265337a5486b3c3",
        profilePicture
        :
        "/IMG_2198.jpg",
        profileCover
        :
        "",
        followers
        :
        [],
        following
        :
        [],
        isAdmin
        :
        false,
        userName
        :
        "jhone",
        email
        :
        "jhon@gmail.com",
        password
        :
        "$2b$10$MouvQASus5xWkvLofgbTf.XQZcjaFJtT6ruFZLVC6jfs2UHdp4ec6",
},
    isFetching:false,
    error:false,
};

export const AuthContext=createContext(INITIAL_STATE);

export const AuthContextProvider=({children})=>{
   const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

   return(
       <AuthContext.Provider value={{
           user:state.user,
           isFetching:state.isFetching,
           error:state.error,
           dispatch,
       }}>
           {children}
       </AuthContext.Provider>
   );

};