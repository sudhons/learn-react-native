import React, {Component} from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
} from 'react-native';
import {connect} from 'react-redux';
import {CardSection} from './common';
import * as actions from '../actions';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDiscription() {
    const {
      library: {description},
      expanded,
    } = this.props;

    if (expanded) {
      return (
        <CardSection>
          <Text>{description}</Text>
        </CardSection>
      );
    }
  }

  render() {
    const {
      selectLibrary,
      library: {id, title},
    } = this.props;

    const {titleStyle} = styles;

    return (
      <TouchableWithoutFeedback onPress={() => selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDiscription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = ({selectedLibraryId}, {library}) => {
  return {expanded: selectedLibraryId === library.id};
};

export default connect(
  mapStateToProps,
  actions,
)(ListItem);

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
};
