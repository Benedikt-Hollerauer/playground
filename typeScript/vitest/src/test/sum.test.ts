import { sum } from "../main/sum"
import { describe, expect, it } from "vitest"

describe("sum", () => {
    it("returns 3 with 2 and 1 provided", () => {
        expect(sum(2, 1)).toBe(3)
    })
})