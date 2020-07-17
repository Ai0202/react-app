import React from "react"
import { render } from "@testing-library/react"
import { MainVisual } from "../MainVisual"

describe('MainVisual', () => {
  test('正しくレンダリングされること', () => {
    const { container } = render(<MainVisual />)

    expect(container).toMatchSnapshot()
  })
})