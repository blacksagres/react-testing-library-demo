import { renderHook, act } from "@testing-library/react-hooks";
import { usePokemon } from "../usePokemon.hook";

test("Should find squirtle", async () => {
  const { result, waitForNextUpdate } = renderHook(() =>
    usePokemon("squirtle")
  );

  await waitForNextUpdate();

  expect(result.current.pokemon?.name).toBe("squirtle");
  expect(result.current.error).toBe(undefined);
});

test("Should give back a 404", async () => {
  const { result, waitForNextUpdate } = renderHook(() =>
    usePokemon("pikamander")
  );

  await waitForNextUpdate();

  expect(result.current.pokemon).toBe(undefined);
  expect(result.current.error?.message).toBe(
    "Request failed with status code 404"
  );
});
