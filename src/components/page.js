import React from "react";
import {useContext} from "react";
import {MovieContext} from "./MovieContext";

function Page() {

        const {newPage, currentPage, showPage} = useContext(MovieContext);

    return(
        <div className="page">
            
                {showPage && (
                    <div className="page-container">
                        <button style={{cursor : currentPage !== 1 ? "pointer" : "not-allowed",
                                    background : currentPage !== 1 ? "#32de57" : "#303847"
                    }} onClick={() => newPage("previous")}> Prev page </button>
                        <button  onClick={() => newPage("next")}> Next page </button>
                    </div>  
                    )
                }

           
        </div>

    );
}

export default Page;