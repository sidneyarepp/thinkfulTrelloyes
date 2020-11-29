import Card from './Card';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

describe('Messages component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<Card />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
})