import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform,
  Dimensions,
  Alert,
} from "react-native";
import { Camera, CameraType } from "expo-camera";

import * as ImagePicker from "expo-image-picker";

import { takePhoto } from "../../shared/api/api-uploadImages";

import IconButton from "../../shared/components/IconButton/IconButton";

export default function useMakePhoto() {
  const [makePhoto, setMakePhoto] = useState(false);
  const [type, setType] = useState(CameraType.back);
  const [camera, setCamera] = useState("");
  const [photo, setPhoto] = useState("");
  const [uri, setUri] = useState("");

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }
  function chooseThePicture() {
    Alert.alert("Your picture", "", [
      {
        text: "Gallery",
        onPress: () => pickImage(),
      },
      {
        text: "Camera",
        onPress: () => setMakePhoto(true),
      },
      {
        text: "Cancel",
        onPress: () => setUri(""),
      },
    ]);
  }

  async function pickImage() {
    try {
      const response = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      setUri(response.uri);
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  }

  const markUp = (
    <View style={styles.containerMakePhoto}>
      <Camera style={styles.cameraContainer} ref={setCamera}>
        <TouchableOpacity
          style={styles.btnChangeType}
          stylactiveOpacity={0.8}
          onPress={() => toggleCameraType}
        >
          <Text style={styles.btnTitle}>Change Camera Type</Text>
        </TouchableOpacity>
        <TouchableOpacity
          stylactiveOpacity={0.8}
          onPress={() => takePhoto(camera, setPhoto)}
        >
          <IconButton type="photo" focused={false} size="50" />
        </TouchableOpacity>
      </Camera>
      {photo && (
        <TouchableOpacity
          style={styles.btnWrapperMakePhoto}
          stylactiveOpacity={0.8}
          onPress={() => {
            setUri(photo);
            setMakePhoto(false);
          }}
        >
          <Text style={styles.btnTitle}>Add photo</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  return {
    makePhoto,
    uri,
    chooseThePicture,
    markUp,
  };
}

const styles = StyleSheet.create({
  containerMakePhoto: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  cameraContainer: {
    flex: 10,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  btnChangeType: {
    position: "absolute",
    bottom: 100,
    opacity: 0.5,
  },
  btnWrapperMakePhoto: {
    position: "absolute",
    bottom: 40,
    right: 16,
    left: 16,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",

    padding: 16,

    backgroundColor: "#FF6C00",

    btnWrapper: 1,
    borderRadius: 100,
  },
});
