import { StyleSheet, View, Text, Image, Pressable } from "react-native";

export default function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.goalText}</Text>
      <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj0qJQayAz1zANQceVWdEzBMckEkCCMrdtFw&usqp=CAU",
          }}
          style={{ width: 20, height: 20, borderRadius: 10 }}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 5,
    borderRadius: 6,
    flexDirection: "row",
    backgroundColor: "#5e0acc",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  goalText: { color: "cyan", padding: 5 },
});
