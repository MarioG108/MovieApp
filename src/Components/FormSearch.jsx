import React from 'react'


const FormSearch = ({ handleSubmit, txtSearch, handleChange }) => {
    return (
        <form onSubmit={handleSubmit} className="d-flex justify-content-around mr-4">

            <div class="">
                <input type="text" value={txtSearch} placeholder="Search..." onChange={handleChange} className="form-control" />

            </div>
            <div class="">
                <input type="submit" value="Search" className="btn btn-primary" />

            </div>
        </form>
    )
}
export default FormSearch;