import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { getInfo } from '../../reducers/ConferenceReducer/actions';
import PropTypes from "prop-types";
import config from '../../config';

const mapStateToProps = state => ({
  ...state.conference
});

const mapDispatchToProps = dispatch => ({
  getInfo: () => {
    dispatch(getInfo());
  }
});

class Header extends Component {

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
    if(this.props.conference.logo){
      return (
        <Image
          source={{uri: this.props.conference.logo}}
          style={{ width: 55.05, height: 26, resizeMode: 'stretch' }}
        />
      );
    } else {
      return (
        <View style={{flex:1, alignItems: "center"}}>
          <Text style={{color: config.SECONDARY_BG_COLOR, fontSize: 18, fontWeight: "700"}}>{this.props.conference.name}</Text>
        </View>
      );
    }

  }
}

Header.propTypes = {
  getInfo: PropTypes.func.isRequired,
  conference: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);