"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const prp = require("prop-types");
class YasdicContainer extends React.Component {
    getChildContext() {
        return { serviceContainer: this.props.serviceContainer };
    }
    render() {
        return this.props.children;
    }
}
YasdicContainer.childContextTypes = {
    serviceContainer: prp.any.isRequired
};
exports.YasdicContainer = YasdicContainer;
exports.default = YasdicContainer;
//# sourceMappingURL=YasdicContainer.js.map