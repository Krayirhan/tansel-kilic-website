import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { currentDuration } from "@/lib/data";

describe("currentDuration", () => {
  beforeEach(() => {
    // Lock system time to 2026-06-11
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-06-11"));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("calculates Turkish duration correctly for months-only", () => {
    const result = currentDuration("2026-02-01", "tr");
    expect(result).toBe("4 ay");
  });

  it("calculates Turkish duration correctly for exact years", () => {
    const result = currentDuration("2024-06-11", "tr");
    expect(result).toBe("2 yıl");
  });

  it("calculates Turkish duration correctly for mixed years and months", () => {
    const result = currentDuration("2024-02-11", "tr");
    expect(result).toBe("2 yıl 4 ay");
  });

  it("calculates English duration correctly for months-only", () => {
    const result = currentDuration("2026-05-11", "en");
    expect(result).toBe("1 month");
  });

  it("calculates English duration correctly for plural months-only", () => {
    const result = currentDuration("2026-02-11", "en");
    expect(result).toBe("4 months");
  });

  it("calculates English duration correctly for exact years", () => {
    const result = currentDuration("2024-06-11", "en");
    expect(result).toBe("2 years");
  });

  it("calculates English duration correctly for mixed years and months", () => {
    const result = currentDuration("2024-02-11", "en");
    expect(result).toBe("2 yr 4 mo");
  });
});
