import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const QuestionLumiSkeleton = () => {
    return (
        <div className="question-lumi-skeleton">
            <div>
                <Skeleton
                    count={4}
                    style={{ marginBottom: "4px" }}
                    width={300}
                />
            </div>
            <Skeleton circle height={50} width={50} />
        </div>
    );
};

export default QuestionLumiSkeleton;
