"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const prp = require("prop-types");
exports.injectAndConnect = (mapStateToProps, injectAndMapDispatchToProps, ...connectArgs) => (component) => {
    let serviceContainer;
    const mapDispatchToProps = (dispatch, ownProps) => {
        let mdtp;
        if (!serviceContainer) {
            console.error("No service container . Maybe you forgot to wrap your application in a YasdicContainer ?");
            mdtp = injectAndMapDispatchToProps();
        }
        else {
            mdtp = serviceContainer.inject(injectAndMapDispatchToProps);
        }
        return mdtp(dispatch, ownProps);
    };
    const connectedComponent = react_redux_1.connect(mapStateToProps, mapDispatchToProps, ...connectArgs)(component);
    class InjectedAndConnectedComponent extends React.Component {
        constructor(props, context) {
            super(props, context);
            if (!this.context.serviceContainer) {
                console.error("Unable to find service container. Maybe you forgot to wrap your application in a YasdicContainer ?");
            }
            else {
                serviceContainer = this.context.serviceContainer;
            }
        }
        render() {
            return React.createElement(connectedComponent, this.props);
        }
    }
    InjectedAndConnectedComponent.contextTypes = {
        serviceContainer: prp.any.isRequired
    };
    return InjectedAndConnectedComponent;
};
exports.default = exports.injectAndConnect;
//# sourceMappingURL=inject-and-connect.js.map