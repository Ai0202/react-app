import React from "react"
import { Text } from "./styles"

type Props = {
  name: string;
}

export const CardTitle: React.FC<Props> = ({name}: Props) => {
  return (
    <Text>{name}</Text>
  )
}