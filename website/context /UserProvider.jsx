import { useState } from  'react'
import UserContext from './ UserContext';

const UserProvider = ({children}) => {
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [username, setUsername] = useState("");
    const [pass, setPass] = useState("");
    const [company, setCompany] = useState("");

    let contextValues = { 
        first,
        setFirst,
        last,
        setLast,
        username,
        setUsername,
        pass,
        setPass,
        company,
        setCompany
     }

    return(
      <UserContext.Provider value={contextValues}>
        {children}
      </UserContext.Provider>
    )
}

export default UserProvider