import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  Pressable,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  function showModalHandler() {
    setShowModal((prev) => !prev);
  }

  function submitGoalTextHandler(goalText) {
    if (goalText !== "") {
      setGoalList([
        ...goalList,
        { text: goalText, id: Math.random().toString() },
      ]);
    }
  }

  function deleteGoalHandler(id) {
    setGoalList((goalList) => {
      return goalList.filter((list) => list.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        {/* Input Section */}
        <Pressable style={{ alignItems: "center" }} onPress={showModalHandler}>
          <View style={styles.addNewGoalButton}>
            <Text style={{ fontSize: 19 }}>Add New Goal</Text>
          </View>
        </Pressable>
        <GoalInput
          showModal={showModal}
          onAddGoal={submitGoalTextHandler}
          showModalHandler={showModalHandler}
        />
        {/* List Section */}
        <View style={styles.listContainer}>
          <Text style={styles.listHeading}>My Goals</Text>
          {goalList.length > 0 ? (
            <FlatList
              data={goalList}
              keyExtractor={(item, index) => item.id}
              renderItem={(itemData) => {
                return (
                  <GoalItem
                    goalText={itemData.item.text}
                    id={itemData.item.id}
                    onDeleteItem={deleteGoalHandler}
                  />
                );
              }}
            />
          ) : (
            <Text style={styles.emptyList}>No Goals to show....</Text>
          )}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  addNewGoalButton: {
    alignItems: "center",
    backgroundColor: "#b180f0",
    width: "50%",
    padding: 8,
    margin: 15,
    marginBottom: 25,
    borderRadius: 6,
  },
  listContainer: {
    marginTop: 5,
    flex: 5,
  },
  listHeading: {
    textAlign: "center",
    fontSize: 19,
    fontWeight: "600",
    marginBottom: 10,
    color: "white",
  },
  emptyList: {
    textAlign: "center",
    margin: 10,
    fontSize: 12,
    color: "white",
  },
});
