import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView, View, Text, Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './style.js';
import config from '../../config';

class AboutView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      conference: {},
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
        completed: nextProps.completed
      });
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
      <Image
        source={{uri: this.props.conference.banner}}
        style={{flex: 1, maxHeight: 300}}
      />
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{this.props.conference.name}</Text>
        <View style={styles.info}>
          <Icon.Button name="calendar" backgroundColor="transparent" color={config.PRIMARY_BG_COLOR}>
            <Text>{this.props.conference.date}</Text>
          </Icon.Button>
          <Icon.Button name="map-pin" backgroundColor="transparent" color={config.PRIMARY_BG_COLOR}>
            <Text>{(this.props.conference.location||{}).city}</Text>
          </Icon.Button>
        </View>
        <Text style={styles.description}>{this.props.conference.description}</Text>
        <View style={styles.author}>
          <Image
            source={{uri: 'https://avatars3.githubusercontent.com/u/17863319?s=460&v=4'}}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.name}>Developer Info:</Text>
            <Text>Lex Martinez</Text>
            <Text>me@lexmartinez.com</Text>
          </View>
        </View>
      </ScrollView>
    </View>
    );
  }

}

AboutView.propTypes = {
  getInfo: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
  conference: PropTypes.object.isRequired
};

export default AboutView;