import type { PropsWithChildren } from "react";

export function New(props: PropsWithChildren) {
    return (
        <div className="wrap-item wrap-item-new">
            <span className="label">New!</span>
            {props.children}
        </div>
    )
};