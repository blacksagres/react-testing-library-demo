import { renderHook, act } from "@testing-library/react-hooks";
import { usePokemon } from "../usePokemon.hook";

test("should increment counter", async () => {
  const { result, waitForNextUpdate } = renderHook(() =>
    usePokemon("squirtle")
  );

  await waitForNextUpdate();

  expect(result.current.pokemon?.name).toBe("squirtle");
});
