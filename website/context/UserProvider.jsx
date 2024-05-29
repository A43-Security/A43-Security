import { useState } from  'react'
import UserContext from './UserContext';

const UserProvider = ({children}) => {
    const [firstTyped, setFirstTyped] = useState("");
    const [lastTyped, setLastTyped] = useState("");
    const [usernameTyped, setUsernameTyped] = useState("");
    const [passTyped, setPassTyped] = useState("");
    const [company, setCompany] = useState("");
    const [currentUser, setCurrentUser] = useState()
    const [userInfo, setUserInfo] = useState({})
    const [imageUrl, setImageUrl] = useState("")
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [username, setUsername] = useState("");
    const [pass, setPass] = useState("");

    let contextValues = { 
        first,
        setFirst,
        firstTyped,
        setFirstTyped,
        last,
        setLast,
        lastTyped,
        setLastTyped,
        usernameTyped,
        setUsernameTyped,
        username,
        setUsername,
        passTyped,
        setPassTyped,
        pass,
        setPass,
        company,
        setCompany,
        currentUser,
        setCurrentUser,
        userInfo,
        setUserInfo,
        imageUrl,
        setImageUrl
     }

     
     

    return(
    
      <UserContext.Provider value={contextValues}>
        {children}
      </UserContext.Provider>
    )
}

export default UserProvider