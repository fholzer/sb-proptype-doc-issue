import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SomeComponent extends Component {
    static propTypes = {
        /**
         * Does what it says on the label. Possible values are `false`, `true`,
         * "very".
         */
        compact: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.oneOf(['very'])
        ]),

        /*
         * Add custom export formats.
         */
        customExportFormats: PropTypes.node,

        /**
         * Custom filter that is applied to the data, after applying global
         * filter.
         */
        customFilterCallback: PropTypes.func,

        /**
         * Data array containing rows of data for the table to show.
         */
        data: PropTypes.arrayOf(PropTypes.object),
    };

    render() {
        return (
            <p>some component</p>
        );
    }
}
