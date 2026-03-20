import { View, Text, Switch } from "react-native";

interface Props {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}

export function ThemeToggle({ isDark, setIsDark }: Props) {
  return (
    <View className="flex-row items-center mt-6">
      <Text className={`mr-2 ${isDark ? "text-white" : "text-gray-500"}`}>
        {isDark ? "Dark" : "Light"}
      </Text>

      <Switch
        value={isDark}
        onValueChange={setIsDark}
      />
    </View>
  );
}