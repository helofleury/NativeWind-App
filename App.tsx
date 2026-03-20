import "./styles/global.css";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import { ThemeToggle } from "./components/ThemeToggle";
import { Button } from "./components/Button";

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [remember, setRemember] = useState(false);

  return (
    <View
      className={`flex-1 items-center px-6 ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      {/* Toggle */}
      <View className="absolute top-12 right-6">
        <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
      </View>

      {/* Conteúdo */}
      <View className="w-full items-center mt-40">

        {/* Header */}
        <Text
          className={`text-3xl font-bold ${
            isDark ? "text-white" : "text-gray-800"
          }`}
        >
          Bem-vindo(a)!
        </Text>

        <Text
          className={`mt-2 text-base ${
            isDark ? "text-gray-300" : "text-gray-500"
          }`}
        >
          Faça login na sua conta
        </Text>

        {/* Avatar */}
        <View className="w-28 h-28 bg-gray-200 rounded-full items-center justify-center mt-8">
          <Image
            source={require("./assets/perfil.png")}
            className="w-14 h-14 opacity-70"
          />
        </View>

        {/* FORM */}

        <View className="w-full rounded-[35px] px-8 py-12 items-center">
          <View className="w-full items-center">

            {/* Username */}
            <TextInput
              placeholder="Username"
              placeholderTextColor={isDark ? "#aaa" : "#9CA3AF"}
              className={`w-full rounded-full px-6 py-4 mb-5 text-base ${
                isDark
                  ? "bg-black text-white border border-white"
                  : "bg-gray-200 text-black"
              }`}
            />

            {/* Password */}
            <TextInput
              placeholder="Password"
              placeholderTextColor={isDark ? "#aaa" : "#9CA3AF"}
              secureTextEntry
              className={`w-full rounded-full px-6 py-4 mb-3 mt-3 text-base ${
                isDark
                  ? "bg-black text-white border border-white"
                  : "bg-gray-200 text-black"
              }`}
            />

            {/* Remember + Forgot */}
            <View className="w-[90%] flex-row justify-between items-center mb-8">

              <TouchableOpacity
                className="flex-row items-center"
                onPress={() => setRemember(!remember)}
              >
                <View
                  className={`w-5 h-5 border rounded mr-2 items-center justify-center ${
                    remember
                      ? "bg-pink-600 border-pink-600"
                      : "border-gray-400"
                  }`}
                >
                  {remember && (
                    <Text className="text-white text-sm">✓</Text>
                  )}
                </View>

                <Text className="text-gray-400 text-sm">
                  Remember me
                </Text>
              </TouchableOpacity>

              <Text className="text-gray-400 text-sm">
                Forgot password?
              </Text>
            </View>

            {/* Botão reutilizável */}
            <Button title="Login" />

            {/* Divider */}
            <View className="w-[95%] flex-row items-center my-6">
              <View className="flex-1 h-[1px] bg-gray-300" />

              <Text className="mx-3 text-gray-400 text-xs">
                or sign in with
              </Text>

              <View className="flex-1 h-[1px] bg-gray-300" />
            </View>

            {/* Google Button */}
            <TouchableOpacity className="w-full flex-row items-center justify-center bg-gray-200 rounded-full py-4 mb-6">
              <Image
                source={require("./assets/google.png")}
                className="w-5 h-5 mr-3"
              />
              <Text className="text-gray-700 text-sm font-medium">
                Continue with Google
              </Text>
            </TouchableOpacity>

            {/* Create account */}
            <Text className="text-gray-400 text-sm">
              Don’t have an account?{" "}
              <Text className="text-pink-600 font-semibold text-xs">
                Create
              </Text>
            </Text>

          </View>
        </View>

      </View>
    </View>
  );
}