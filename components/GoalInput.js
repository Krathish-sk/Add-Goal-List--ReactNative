import { useState } from "react";
import {
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Text,
  Modal,
} from "react-native";

export default function GoalInput(props) {
  const [goalText, setGoalText] = useState("");
  const [emptyTextModal, setEmptyTextModal] = useState(false);

  function showModalHandler() {
    props.showModalHandler();
  }

  function goalInputHandler(text) {
    setGoalText(text);
  }

  function addGoalHandler() {
    if (goalText !== "") {
      props.onAddGoal(goalText);
      setGoalText("");
      props.showModalHandler();
    } else {
      setEmptyTextModal((prev) => !prev);
      setTimeout(() => {
        setEmptyTextModal((prev) => !prev);
      }, 3000);
    }
  }

  return (
    <View>
      {emptyTextModal ? (
        <Modal visible={emptyTextModal} animationType="slide">
          <View style={styles.emptyModalContainer}>
            <Text>Please add an Goal before submitting !!</Text>
          </View>
        </Modal>
      ) : (
        <Modal visible={props.showModal} animationType="slide">
          <View style={styles.inputContainer}>
            <Image
              source={require("../assets/images/goal.png")}
              style={{ width: 170, height: 170, margin: 10 }}
            />
            <View style={styles.textContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Enter your GOAL..."
                value={goalText}
                onChangeText={goalInputHandler}
                placeholderTextColor="#fff"
                autoFocus={true}
              />
              <TouchableOpacity onPress={() => setGoalText("")}>
                <Image
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj0qJQayAz1zANQceVWdEzBMckEkCCMrdtFw&usqp=CAU",
                  }}
                  style={{ width: 25, height: 25, borderRadius: 20 }}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={addGoalHandler}
                style={styles.submitButton}
              >
                <Text>ADD GOAL</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={showModalHandler}
                style={styles.cancelButton}
              >
                <Text>CANCEL</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#cccccc",
    gap: 6,
    backgroundColor: "#311b6b",
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 2,
    width: "75%",
    borderRadius: 6,
    marginBottom: 20,
    borderColor: "#fff",
  },
  textInput: {
    width: "80%",
    padding: 8,
    color: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
  },
  submitButton: {
    width: "24%",
    fontWeight: "700",
    padding: 10,
    backgroundColor: "#b180f0",
    borderRadius: 6,
    alignItems: "center",
  },
  cancelButton: {
    width: "24%",
    fontWeight: "700",
    padding: 10,
    backgroundColor: "#f31282",
    borderRadius: 6,
    alignItems: "center",
  },
  emptyModalContainer: {
    borderWidth: 1,
    borderRadius: 6,
    width: "70%",
    alignSelf: "center",
    marginTop: "50%",
    padding: 5,
  },
});
