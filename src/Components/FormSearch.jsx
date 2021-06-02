import React from 'react'


const FormSearch = ({ handleSubmit, txtSearch, handleChange }) => {
    return (
        <form onSubmit={handleSubmit} className="row g-3">

            <div class="col-auto col-xs-5">
                <input type="text" value={txtSearch} placeholder="Search..." onChange={handleChange} className="form-control" />

            </div>
            <div class="col-auto col-xs-5">
                <input type="submit" value="Search" className="btn btn-primary mb-3" />

            </div>
        </form>
    )
}
export default FormSearch;