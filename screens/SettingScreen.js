import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Alert,
  ScrollView,
} from "react-native";
import db from "../config";
import firebase from "firebase";
import MyHeader from "../components/MyHeader";

export default class SettingScreen extends React.Component {
    render() {
        return (
            <View>
                <Text>
                    Setting Screen
                </Text>
            </View>
        )
    }
}