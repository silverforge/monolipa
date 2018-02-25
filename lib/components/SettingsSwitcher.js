"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
class SettingsSwitcher extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            switched: false
        };
    }
    render() {
        return (React.createElement(react_native_1.View, { style: switcherStyle.container },
            React.createElement(react_native_1.Text, { style: switcherStyle.switcherText }, "I'm home"),
            React.createElement(react_native_1.Switch, { style: switcherStyle.switch, tintColor: '#5c5d67', onValueChange: (value) => this.setState({ switched: value }), value: this.state.switched })));
    }
}
exports.default = SettingsSwitcher;
const switcherStyle = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 32
    },
    switcherText: {
        fontSize: 20,
        marginHorizontal: 8,
        fontFamily: 'Lora-Regular',
        color: '#5c5d67'
    },
    switch: {
        marginHorizontal: 16
    }
});
//# sourceMappingURL=SettingsSwitcher.js.map