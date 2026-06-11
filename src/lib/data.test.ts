import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { currentDuration } from "./data";

describe("currentDuration", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-06-11"));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("calculates monthly duration in Turkish correctly", () => {
    const res = currentDuration("2026-01-01", "tr");
    expect(res).toBe("5 ay");
  });

  it("calculates monthly duration in English correctly", () => {
    const res = currentDuration("2026-01-01", "en");
    expect(res).toBe("5 months");
  });

  it("calculates single month duration in English correctly", () => {
    const res = currentDuration("2026-05-01", "en");
    expect(res).toBe("1 month");
  });

  it("calculates yearly duration correctly in Turkish", () => {
    const res = currentDuration("2024-06-11", "tr");
    expect(res).toBe("2 yıl");
  });

  it("calculates yearly duration correctly in English", () => {
    const res = currentDuration("2024-06-11", "en");
    expect(res).toBe("2 years");
  });

  it("calculates single year correctly in English", () => {
    const res = currentDuration("2025-06-11", "en");
    expect(res).toBe("1 year");
  });

  it("calculates years and months correctly in Turkish", () => {
    const res = currentDuration("2025-04-11", "tr");
    expect(res).toBe("1 yıl 2 ay");
  });

  it("calculates years and months correctly in English", () => {
    const res = currentDuration("2025-04-11", "en");
    expect(res).toBe("1 yr 2 mo");
  });
});
