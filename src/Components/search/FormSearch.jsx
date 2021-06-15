import React from 'react'


const FormSearch = ({ handleSubmit, txtSearch, handleChange }) => {
    return (
        <form onSubmit={handleSubmit} className="d-flex justify-content-end ">


                <input type="text" value={txtSearch} placeholder="Search..." onChange={handleChange} className="form-control" />

            
               <button type="submit"className="btn btn-primary"><i class="fas fa-search"></i></button>

            
        </form>
    )
}
export default FormSearch;