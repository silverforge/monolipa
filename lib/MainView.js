"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const SettingsSwitcher_1 = require("./components/SettingsSwitcher");
class MainView extends React.Component {
    render() {
        return (React.createElement(react_native_1.View, { style: mainStyle.container },
            React.createElement(react_native_1.View, { style: mainStyle.subContainer },
                React.createElement(react_native_1.Text, { style: mainStyle.titleText }, "Monoli PA"),
                React.createElement(SettingsSwitcher_1.default, null))));
    }
}
exports.default = MainView;
const topMargin = react_native_1.Platform.select({
    ios: 40,
    default: 0
});
const mainStyle = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dbdaea',
    },
    subContainer: {
        flex: 1,
        marginTop: topMargin,
    },
    titleText: {
        fontSize: 48,
        margin: 8,
        alignSelf: 'center',
        fontFamily: 'Rubik-Regular',
        color: '#5c5d67'
    }
});
//# sourceMappingURL=MainView.js.map