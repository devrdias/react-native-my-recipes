import {
  Body, Button, Card, CardItem, Icon, Left, Right, Text, View,
} from 'native-base';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import Colors from '~/Theme/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';


const ReceiptCard = ({ item }) => (
  <Card>
    <CardItem>
      <Left>
        {/* <Thumbnail source={{ uri: item.image }} /> */}
        <Body>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.noteContainer}>
            <Text note style={styles.time}>{`Ready in ${item.readyInMinutes} min | `}</Text>
            <Text note style={styles.servings}>{`${item.servings} servings`}</Text>
          </View>
        </Body>
      </Left>
    </CardItem>
    <CardItem cardBody>
      <Image source={{ uri: item.image }} style={{ height: 200, width: null, flex: 1 }} />
    </CardItem>
    <CardItem>
      <Left>
        <Button transparent>
          <Icon active name="thumbs-up" />
          <Text>12 Likes</Text>
        </Button>
      </Left>
      <Body>
        <Button transparent>
          <Icon active name="chatbubbles" />
          <Text>4 Comments</Text>
        </Button>
      </Body>
      <Right>
        <View style={rightNotesContainer}>
        <Icon name="carrot"/>
        <Text>Vegan</Text>
        </View>
      </Right>
    </CardItem>
  </Card>
);

const styles = StyleSheet.create({
  title: { color: Colors.text, fontSize: 24 },
  noteContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {},
  servings: {},
  rightNotesContainer: {
    flex:1,
    marginRight: 5,
    flexDirection: 'row'
  }
});

export default ReceiptCard;
