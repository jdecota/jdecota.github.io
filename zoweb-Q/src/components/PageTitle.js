import React from "react";

const PageTitle = (props) => {
    const { title } = props;
    return (
    <div className="pl4 pr4 bb tc bg-washed-blue w-90 center">
        <span className="light-blue ttu f1"> {title}</span>
    </div>
    )
}

export default PageTitle;