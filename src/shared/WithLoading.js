import {Component} from "react";
import LoadingPage from "./components/LoadingPage/LoadingPage";

export function WithLoading(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                isLoading: false
            }
        }

        onLoading = (isShowing) => {
            this.setState({
                isLoading: isShowing
            })
        }

        render() {
            return (
                <>
                    {this.state.isLoading && <LoadingPage title={'Please Wait'}/>}
                    <WrappedComponent onLoading={this.onLoading} {...this.props}/>
                </>
            )
        }
    }
}