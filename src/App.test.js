import {render} from "./utils/test-utils";
import App from './App';

jest.mock("./utils/load-assets", () => ({
  __esModule: true,
  default: () => ({
    context: function (path, bool) {
      return jest.fn()
    }
  }),
}));

const STATE = {
  whiskies : [],
  activeFilter: {},
  articles: []
}

test('renders learn react link', () => {
  const {container} = render(<App />, {initialState: STATE});
  expect(container.firstChild).toMatchSnapshot();
});
