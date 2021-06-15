import { useState, useEffect } from "react";
import { useParams } from "react-router";
function Results() {
    const { Search } = useParams()
    const { isloading, setIsLoading } = useState(false)
    useEffect(() => {
        console.log(Search)
    }, [])


    return (<div className="container mt-3">
        <div className="row">
            <h5>Filters:</h5>
            <div className="col col-2">
                <div class="mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" for="inputGroupSelect01">Release year:</label>
                        <input type="date" data-provide="datepicker" onChange={(e) => console.log(e.target.value.substring(0, 4))} className="form-control  datepicker" data-date-format={"MM/dd/yyyy"} />
                    </div>
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
                        <div className="card-header"></div>
                        <div className="card-body"></div>
                    </div>
                </div>
                <div className="col col-3">
                    <div className="card">
                        <div className="card-header"></div>
                        <div className="card-body"></div>
                    </div>
                </div>
                <div className="col col-3">
                    <div className="card">
                        <div className="card-header"></div>
                        <div className="card-body"></div>
                    </div>
                </div>
          
        </div>
    </div>

    )
}
export default Results;