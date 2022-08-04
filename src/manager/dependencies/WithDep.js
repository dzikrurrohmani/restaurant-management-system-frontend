import {Component} from "react";
import {getDependency} from "./deps";

export function WithDep(WrappedComponent, deps) {
    return class extends Component {
        constructor(props) {
            super(props);
            const mapper = (deps) => {
                const objDep = {}
                deps.forEach(d => objDep[d] = getDependency(d))
                return objDep
            }
            this.resolveDependency = mapper(deps)
        }

        render() {
            return (
                <WrappedComponent {...this.props} {...this.resolveDependency}/>
            )
        }
    }
}