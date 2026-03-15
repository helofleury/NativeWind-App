import "./styles/global.css";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { useState } from "react";

export default function App() {

  const [remember, setRemember] = useState(false);

  return (
    <View className="flex-1 bg-white justify-center items-center px-6">

      {/* Header */}
      <View className="w-full items-center mb-8">
        <Text className="text-3xl font-bold text-gray-800">
          Bem-vindo(a)!
        </Text>

        <Text className="text-gray-500 mt-2 text-base">
          Login to your account
        </Text>
      </View>

      {/* Container */}
      <View className="w-full rounded-[35px] px-8 py-12 items-center">

        {/* Avatar */}
        <View className="w-28 h-28 bg-gray-200 rounded-full items-center justify-center mb-10 -mt-6">
          <Image
            source={require("./assets/perfil.png")}
            className="w-14 h-14 opacity-70"
          />
        </View>

        {/* Username */}
        <TextInput
          placeholder="Username"
          placeholderTextColor="#9CA3AF"
          className="w-full bg-gray-200 rounded-full px-6 py-4 mb-5 text-base"
        />

        {/* Password */}
        <TextInput
          placeholder="Password"
          placeholderTextColor="#9CA3AF"
          secureTextEntry
          className="w-full bg-gray-200 rounded-full px-6 py-4 mb-3 mt-3 text-base"
        />

        {/* Remember + Forgot */}
        <View className="w-full flex-row justify-between items-center mb-8">

          {/* Remember me */}
          <TouchableOpacity
            className="flex-row items-center"
            onPress={() => setRemember(!remember)}
          >
            <View className={`w-5 h-5 border rounded mr-2 items-center justify-center ${remember ? "bg-pink-600 border-pink-600" : "border-gray-400"}`}>
              {remember && <Text className="text-white text-xs">✓</Text>}
            </View>

            <Text className="text-gray-500">Remember me</Text>
          </TouchableOpacity>

          {/* Forgot password */}
          <Text className="text-gray-500">
            Forgot password?
          </Text>

        </View>

        {/* Botão */}
        <TouchableOpacity className="w-full bg-pink-600 rounded-full py-4 items-center mb-6 mt-3 shadow-md">
          <Text className="text-white text-lg font-semibold">
            Log in
          </Text>
        </TouchableOpacity>

        {/* Criar conta */}
        <Text className="text-gray-400 text-sm">
          Don't have an account?{" "}
          <Text className="text-pink-600 font-semibold">
            Create
          </Text>
        </Text>

      </View>

    </View>
  );
}