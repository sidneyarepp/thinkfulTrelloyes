import List from './List';
import Card from './Card';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import store from './store'

describe('Messages component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<List><Card>
                key={1}
                title={'Test'}
                content={'Test Content'}
            </Card>
            </List>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
})