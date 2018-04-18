import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, SectionList } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import Modal from 'react-native-modal';
import config from '../../config';
import { Button, Card } from 'react-native-elements';

class ScheduleView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      conference: {events: []},
      event: {},
      modal: false,
      events: []
    };
  }

  componentDidMount() {
    const { getInfo } = this.props;
    getInfo();
    this.setState({event: {},modal: false,
      events: []})
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.completed) {
      this.setState({
        conference: nextProps.conference,
        error: nextProps.error,
        completed: nextProps.completed,
        modal: false,
        events: (nextProps.conference||[]).events
      });
    }
  }

  render() {
    return (
      <View>
        <SearchBar
          icon={{ type: 'feather', name: 'search' }}
          clearIcon={{ type: 'feather', name: 'x' }}
          onChangeText={(search) => {
            if(search === ''){
              this.setState({events:this.props.conference.events});
            } else {
              this.setState({events:this.props.conference.events.filter(item => {
                return JSON.stringify(item.data).toLowerCase().indexOf(search.toLowerCase()) > -1
              })});
            }
          }}
          placeholder='Search ...' 
          cancelButtonTitle="Cancel"/>
        <SectionList
          renderItem={({ item, index, section }) => <ListItem containerStyle={{borderLeftColor: item.color, borderLeftWidth: 6}} key={index} title={item.name} subtitle={item.time + ' ' + item.place} onPress={()=>this.setState({event: item, modal: true})}/>}
          renderSectionHeader={({ section: { title } }) => <ListItem title={title}
                  containerStyle={{backgroundColor: config.SCHEDULE_HEADER_COLOR}}
                  titleStyle={{ color:config.PRIMARY_BG_COLOR, fontWeight: '800'}}
                  chevronColor={config.SCHEDULE_HEADER_COLOR}
                  stickySectionHeadersEnabled={true}
          />}
          sections={this.state.events || []}
          keyExtractor={(item, index) => item + index} />

          {
            <Modal isVisible={this.state.modal}
            onSwipe={() => this.setState({ modal: false })}
            onBackdropPress={() => this.setState({ modal: false })}>
              <Card title={(this.state.event.name||'').toUpperCase()}>
                <View>
                  <Text style={{fontWeight:'700'}}>{this.state.event.time} {this.state.event.place}</Text>
                  <Text style={{textAlign: 'justify', marginTop: 10}}>{this.state.event.description}</Text>
                  {
                    this.state.event.speaker?
                      <View style={{flexDirection:'row', marginTop: 10}}>
                        <Text style={{fontWeight:'700'}}>Speaker: </Text>
                        <Text>{this.state.event.speaker}</Text>
                      </View>:null
                  }
                  <Button
                    title='CLOSE'
                    buttonStyle={{
                      backgroundColor: config.PRIMARY_BG_COLOR,
                      marginTop: 15
                    }}
                    onPress={()=>this.setState({modal: false})}
                  />
                </View>
              </Card>
            </Modal>
          }
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