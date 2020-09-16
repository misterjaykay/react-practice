import React from "react";

export default function Pagination({ gotoNextPageUrl, gotoPrevPageUrl}) {
    return (
        <div>
            {gotoPrevPageUrl && <button onClick={gotoPrevPageUrl}>Previous</button>}
            {gotoNextPageUrl && <button onClick={gotoNextPageUrl}>Next</button>}
        </div>
    )
}