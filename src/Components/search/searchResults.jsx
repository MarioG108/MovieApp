import { useState, useEffect } from "react";
import { useParams } from "react-router";
function Results() {
    const { Search } = useParams()
    const { isloading, setIsLoading } = useState(false)
    useEffect(() => {
        console.log(Search)
    }, [])


    return (<div className="container">
        <div className="row">
            <h3>Filters:</h3>
            <div className="col col-2">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputGroupSelect01">type</label>
                    </div>
                   <input type="date" data-provide="datepicker" className="datepicker" data-date-format="mm/dd/yyyy" value="" />
                </div>
            </div>
        </div>
        <div className="row ">
            <div className="col col-3">
                <div className="card">
                    <div className="card-header"></div>
                    <div className="card-body"></div>
                </div>
            </div>
            <div className="col col-3">
                <div className="card">
                    <div className="card-body"></div>
                    <div className="card-footer"></div>
                </div>
            </div>
            <div className="col col-3">
                <div className="card">
                    <div className="card-body"></div>
                    <div className="card-footer"></div>
                </div>
            </div>
            <div className="col col-3">
                <div className="card">
                    <div className="card-body"></div>
                    <div className="card-footer"></div>
                </div>
            </div>
        </div>
    </div>

    )
}
export default Results;