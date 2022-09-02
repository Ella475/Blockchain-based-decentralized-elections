import ReactDOM from 'react-dom';
import { Drizzle, generateStore } from '@drizzle/store';
import App from './App';
import Vote from 'contracts/Vote.json';

const options = {
    contracts: [Vote]
};
const drizzleStore = generateStore(options);
const drizzle = new Drizzle(options, drizzleStore);
  
ReactDOM.render(<App drizzle={drizzle}/>, document.getElementById('root'));
