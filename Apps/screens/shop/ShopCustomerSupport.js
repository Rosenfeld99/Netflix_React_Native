import * as React from "react";
import {
  FlatList,
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
  Pressable,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function MyComponent() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.header}>
        <Image
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/b8ee667cd815f9c7dbf65a3fbfe7ffb4d5a631e7eae23d6afc78193c291d2e46?apiKey=801bf1196414482bb2fc1b27b02c48a7&",
          }}
          style={styles.profilePic}
        />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerName}>Helena Hills</Text>
          <Text style={styles.headerStatus}>Active 20m ago</Text>
        </View>
        <View style={styles.headerIcons}>
          <Image
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/c2f9d63fab85b206bc10ae5040360353f1243581ebadde50d05aa9b213830e0d?apiKey=801bf1196414482bb2fc1b27b02c48a7&",
            }}
            style={styles.icon}
          />
          <Image
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/fc8a08a501d7a63b70950fc5ae8c34ecf9a27ef5b08f1e75bb21a9fda56f40f7?apiKey=801bf1196414482bb2fc1b27b02c48a7&",
            }}
            style={styles.icon}
          />
        </View>
      </SafeAreaView>
      <ScrollView contentContainerStyle={styles.chatContainer}>
        <View style={styles.messageContainer}>
          <View style={styles.messageBubbleLeft}>
            <Text style={styles.messageText}>This is the main chat template</Text>
          </View>
        </View>
        <Text style={styles.timestamp}>Nov 30, 2023, 9:41 AM</Text>
        <View style={styles.messageContainer}>
          <Image
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/f82ae74cc810bbc341f4404f9e58d222b938f7e41d6891db4f5e02fe3ceaab14?apiKey=801bf1196414482bb2fc1b27b02c48a7&",
            }}
            style={styles.profilePicSmall}
          />
          <View style={styles.messageBubbleRight}>
            <Text style={styles.messageTextRight}>Oh?</Text>
          </View>
        </View>
        <View style={styles.messageContainer}>
          <Image
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/f82ae74cc810bbc341f4404f9e58d222b938f7e41d6891db4f5e02fe3ceaab14?apiKey=801bf1196414482bb2fc1b27b02c48a7&",
            }}
            style={styles.profilePicSmall}
          />
          <View style={styles.messageBubbleRight}>
            <Text style={styles.messageTextRight}>Cool</Text>
          </View>
        </View>
        <View style={styles.messageContainer}>
          <Image
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/f82ae74cc810bbc341f4404f9e58d222b938f7e41d6891db4f5e02fe3ceaab14?apiKey=801bf1196414482bb2fc1b27b02c48a7&",
            }}
            style={styles.profilePicSmall}
          />
          <View style={styles.messageBubbleRight}>
            <Text style={styles.messageTextRight}>How does it work?</Text>
          </View>
        </View>
        <View style={styles.messageContainer}>
          <View style={styles.messageBubbleLeft}>
            <Text style={styles.messageText}>
              You just edit any text to type in the conversation you want to
              show, and delete any bubbles you don’t want to use
            </Text>
          </View>
        </View>
        <View style={styles.messageContainer}>
          <View style={styles.messageBubbleLeft}>
            <Text style={styles.messageText}>Boom!</Text>
          </View>
        </View>
        <View style={styles.messageContainer}>
          <Image
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/f82ae74cc810bbc341f4404f9e58d222b938f7e41d6891db4f5e02fe3ceaab14?apiKey=801bf1196414482bb2fc1b27b02c48a7&",
            }}
            style={styles.profilePicSmall}
          />
          <View style={styles.messageBubbleRight}>
            <Text style={styles.messageTextRight}>Hmmm</Text>
          </View>
        </View>
        <View style={styles.messageContainer}>
          <Image
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/f82ae74cc810bbc341f4404f9e58d222b938f7e41d6891db4f5e02fe3ceaab14?apiKey=801bf1196414482bb2fc1b27b02c48a7&",
            }}
            style={styles.profilePicSmall}
          />
          <View style={styles.messageBubbleRight}>
            <Text style={styles.messageTextRight}>I think I get it</Text>
          </View>
        </View>
        <View style={styles.messageContainer}>
          <Image
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/f82ae74cc810bbc341f4404f9e58d222b938f7e41d6891db4f5e02fe3ceaab14?apiKey=801bf1196414482bb2fc1b27b02c48a7&",
            }}
            style={styles.profilePicSmall}
          />
          <View style={styles.messageBubbleRight}>
            <Text style={styles.messageTextRight}>
              Will head to the Help Center if I have more questions tho
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Message..." />
        <Image
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/0d34024ace1cc1678261f6d2af027ed44e4ce1a0a3b5384349c7772c4da405e1?apiKey=801bf1196414482bb2fc1b27b02c48a7&",
          }}
          style={styles.icon}
        />
        <Image
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/9432ba68df7a4aa97d33ac355c8e33e288f6afba050db4410438593ee51fbc1f?apiKey=801bf1196414482bb2fc1b27b02c48a7&",
          }}
          style={styles.icon}
        />
        <Image
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/0de5d4861d3d36a4402a46c2e5a595b5d66c24acbd0a2df3042bf3759bc5748d?apiKey=801bf1196414482bb2fc1b27b02c48a7&",
          }}
          style={styles.icon}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  profilePicSmall: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  headerTextContainer: {
    flex: 1,
    marginLeft: 12,
  },
  headerName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerStatus: {
    fontSize: 12,
    color: '#888',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 16,
  },
  chatContainer: {
    padding: 16,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  messageBubbleLeft: {
    backgroundColor: 'black',
    borderRadius: 20,
    padding: 12,
    marginLeft: 8,
  },
  messageBubbleRight: {
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    padding: 12,
    marginLeft: 8,
  },
  messageText: {
    color: 'white',
  },
  messageTextRight: {
    color: 'black',
  },
  timestamp: {
    textAlign: 'center',
    color: '#888',
    fontSize: 12,
    marginVertical: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  textInput: {
    flex: 1,
    padding: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
  },
});

export default MyComponent;
