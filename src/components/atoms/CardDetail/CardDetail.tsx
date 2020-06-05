import React from "react"
import { Description } from "./styles"

type Props = {
  description: string;
}

export const CardDetail: React.FC<Props> = ({description}: Props) => {
  return (
    <Description>{description}</Description>
  )
}