import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
export const mockedStore = mockStore({
  cityObj: {
    city: "Lviv, UA",
    all_cities: [
      { name: "Lviv, UA", lat: 49.838261, lon: 24.023239 },
      { name: "City of London", lat: 51.512791, lon: -0.09184 },
    ],
  },
});
