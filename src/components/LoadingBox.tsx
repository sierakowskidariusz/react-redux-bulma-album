import UseAnimations from "react-useanimations";
import loading from "react-useanimations/lib/loading";
import React from "react";

export const LoadingBox = () => {
    return <div className="is-flex is-flex-direction-row is-justify-content-center">
        <UseAnimations animation={loading} title="Loading..."/>
    </div>;
};
