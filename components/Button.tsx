import { TouchableOpacity, Text } from "react-native";

interface ButtonProps {
  title: string;
  onPress?: () => void;
}

export function Button({ title, onPress }: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="w-full bg-pink-600 rounded-full py-4 items-center mb-6 mt-3"
    >
      <Text className="text-white text-lg font-semibold">
        {title}
      </Text>
    </TouchableOpacity>
  );
}