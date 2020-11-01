import React from 'react';
import { connect } from "react-redux";
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import './component.scss';

class HeaderComponent extends React.Component {

    render() {
        return (
            <div id="header">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <span className="spacer"></span>
            </div>
        );
    }
}

export default HeaderComponent;
