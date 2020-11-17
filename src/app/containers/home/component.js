import React from 'react';
import { connect } from 'react-redux'
import {
    getCurrent,
    getCurrentPending
} from '../../reducers/current';
import ForecastResource from '../../resources/forecast';
import CircularProgress from '@material-ui/core/CircularProgress';
import { CONDITIONS } from '../../constants/conditions';
import { WEEK_DAYS } from '../../constants/index';
import { getLocalTime } from '../../utils/date';
import { Icon } from '../../components/icon/component';

import './component.scss'

class Home extends React.Component {
    componentWillMount() {
        const { onGetCurrent } = this.props;
        onGetCurrent({});
        const now = new Date();
        const timeString = now.toLocaleString('en-GB').split(', ');
        this.setState({
            'time': timeString[1].slice(0, timeString[1].lastIndexOf(':')),
            'weekDay': WEEK_DAYS[now.getDay()]
        })
    }
    render() {
        const {
            current, pending
        } = this.props;
        const {
            time, weekDay
        } = this.state;
        let upCommingTime = '';
        let upCommingLabel = '';
        if (current && current['astro'] && current['astro']['sunrise'] != null) {
            if (current['astro']['sunset'] > time) {
                upCommingTime = getLocalTime(current['astro']['sunset']);
                upCommingLabel = 'SUNSET'
            } else {
                upCommingTime = getLocalTime(current['astro']['sunrise']);
                upCommingLabel = 'SUNRISE'
            }
        }
        return (
            <div>
                { pending && <div className="loadingPlate">
                    <CircularProgress />
                </div>}
                { current != null && <div className={("currentPlate condition" + current['condition'] + (current['is_day'] ? ' day' : ' night'))}>
                    <span className="spacer"></span>
                    <span className="spacer"></span>
                    <div className="topBox">
                        <h1 className="cityName">{current['city']['name']}</h1>
                        <div className="dateTimeInfo">
                            <div className="dateInfo">
                                <span className="weekday">{weekDay}</span>
                                <h4 className="time">{time}</h4>
                            </div>
                        </div>

                    </div>
                    <span className="spacer"></span>
                    <div className="iconBox">
                        <Icon name={'condition/' + current['condition'] + (current['is_day'] ? '-day' : '-night')}></Icon>
                    </div>
                    <span className="spacer"></span>
                    <div className="moreInfoBox">
                        <h2 className="temp">{current['temp_c']} <span className="unit">C</span></h2>
                        <h3 className="conditionText">{CONDITIONS[current['condition']][current['is_day'] ? 'day' : 'night']}</h3>
                    </div>
                    <span className="spacer"></span>
                    <span className="spacer"></span>
                    <div className="bottomBox">
                        <div className="bottomItem">
                            <Icon name='sunrise' />
                            <span className="title">{upCommingLabel}</span>
                            <span className="value">{upCommingTime}</span>
                        </div>
                        <div className="bottomItem">
                            <Icon name='wind' />
                            <span className="title">WIND</span>

                            <span className="value">{current['wind_kph']}
                                <span className="unit">KM/H</span>
                            </span>
                        </div>
                        <div className="bottomItem">
                            <Icon name='temp' />
                            <span className="title">FEELS LIKE</span>
                            <span className="value">{current['feelslike_c']}
                                <span className="unit">C</span>
                            </span>
                        </div>
                    </div>
                </div>
                }
            </div >
        );
    }
}

const mapStateToProps = state => ({
    error: state,
    current: getCurrent(state),
    pending: getCurrentPending(state)
})

const mapDispatchToProps = dispatch => {
    return {
        onGetCurrent: data => {
            dispatch(new ForecastResource().getCurrent(data));
        }
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);