/**
 * Created by jialao on 2016/7/4.
 */
import React from 'react'
import { propTypes } from 'react'
import { getLatestStory, getHistoryStory } from '../helpers/api'
import { reachBottom } from '../helpers/utils'
import StoryListItem from '../components/listItem'
import moment from 'moment'

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {purple100, purple500, purple700} from 'material-ui/styles/colors';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import CircularProgress from 'material-ui/CircularProgress';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions/index'

const styles = {
    container: {
        maxWidth: '640px',
        margin: '0 auto',
        paddingTop: '64px'
    }
}

class TodayContainer extends React.Component {
    constructor(props, context) {
        super(props, context)

        this.handleClick = this.handleClick.bind(this)
      
    }
    getChildContext() {
        return { muiTheme: getMuiTheme({
            palette: {
                primary1Color: purple500,
                primary2Color: purple700,
                primary3Color: purple100,
            }}) };
    }
    componentDidMount() {
        this.props.actions.GET_TODAY_DATA()
        
    }
    componentWillUnmount() {
       
    }
    handleClick(id) {
        this.context.router.push('/detail/' + id)
    }
    render() {
        let Stories = this.props.today.map((story, id) => {
            return (
                <StoryListItem key={id} story={story} onClick={this.handleClick} />
            )
        })
        return (
            <div style={styles.container}>
                <List>
                    {Stories}
                </List>
            </div>
        )
    }
}

TodayContainer.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

TodayContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
}

const mapStateToProps = ( state ) => {
    return {
        today: state.today,
        UIState: state.UIState
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodayContainer)



