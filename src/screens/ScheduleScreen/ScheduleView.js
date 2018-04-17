import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, SectionList } from 'react-native';
import { ListItem } from 'react-native-elements';
import config from '../../config';

class ScheduleView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      conference: {events: []}
    };
  }

  componentDidMount() {
    const { getInfo } = this.props;
    getInfo();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.completed) {
      this.setState({
        conference: nextProps.conference,
        error: nextProps.error,
        completed: nextProps.completed,
        events: nextProps.events
      });
    }
  }

  render() {
    console.log(this.state)
    return (
      <View>
        <SectionList
          renderItem={({ item, index, section }) => <ListItem containerStyle={{borderLeftColor: item.color, borderLeftWidth: 6}} key={index} title={item.name} subtitle={item.time + ' ' + item.place}/>}
          renderSectionHeader={({ section: { title } }) => <ListItem title={title}
                  containerStyle={{backgroundColor: config.SCHEDULE_HEADER_COLOR}}
                  titleStyle={{ color:config.PRIMARY_BG_COLOR, fontWeight: '800'}}
                  chevronColor={config.SCHEDULE_HEADER_COLOR}
                  stickySectionHeadersEnabled={true}
          />}
          sections={this.props.conference.events || []}
          keyExtractor={(item, index) => item + index} />
      </View>
    );
  }

}

ScheduleView.propTypes = {
  getInfo: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
  conference: PropTypes.object.isRequired
};

export default ScheduleView;