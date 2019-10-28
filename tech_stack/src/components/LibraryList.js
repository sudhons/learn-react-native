import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FlatList} from 'react-native';
import ListItem from './ListItem';

class LibraryList extends Component {
  renderItem = ({item}) => <ListItem library={item} />;

  render() {
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={this.renderItem}
        keyExtractor={library => library.id}
      />
    );
  }
}

const mapStateToProps = ({libraries}) => {
  return {libraries};
};

export default connect(mapStateToProps)(LibraryList);
