export {};

declare global {
  interface Window {
    comeon: {
      game: {
        launch: (name: string) => void;
      };
    };
  }
}
