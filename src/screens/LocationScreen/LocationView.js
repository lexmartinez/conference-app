import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MapView } from 'expo'
import config from '../../config';

class LocationView extends Component {

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

  setMarkerRef = (ref) => {
    this.marker = ref;
    if (this.marker) {
      this.marker.showCallout();
    }
  }

  render() {
    const location = (this.props.conference.location||{});
    return (
      <MapView
        style={{ flex: 1 }}
        region={{
          latitude: location.latitude || 6.2518400,
          longitude: location.longitude || -75.5635900,
          latitudeDelta: 0.015,
          longitudeDelta: 0.015,
        }} loadingEnabled={true}
          loadingBackgroundColor={config.PRIMARY_BG_COLOR}
          loadingIndicatorColor={config.PRIMARY_TEXT_COLOR}>
        {
          location.latitude?
              <MapView.Marker
                  title={this.props.conference.name}
                  description={location.address}
                  coordinate={{
                      latitude: Number(location.latitude),
                      longitude: Number(location.longitude)
                  }}
                  ref={this.setMarkerRef}/>:null
        }
      </MapView>
    );
  }

}

LocationView.propTypes = {
  getInfo: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
  conference: PropTypes.object.isRequired
};

export default LocationView;