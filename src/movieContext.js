import React, { createContext } from 'react';

export const MovieContext = createContext();


export function MovieProvider({children}) {
    
    return(
        <MovieContext.Provider value={"From context"} >
            {children}
        </MovieContext.Provider>
    )
}
