import { ReactElement } from "react";

const isReactElement = (node: unknown): node is ReactElement => {
    const element = node as ReactElement;
    return element.type !== undefined && element.props !== undefined;
}

export default isReactElement;