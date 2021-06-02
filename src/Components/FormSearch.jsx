import React from 'react'


const FormSearch = ({handleSubmit,txtSearch,handleChange}) => {
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={txtSearch} onChange={handleChange} />
            <input type="submit"  />
        </form>
    )
}
export default FormSearch;