import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import DailyRecord from './DailyRecord'
import DailyRecordCreate from './DailyRecordCreate'
import DailyRecordEdit from './DailyRecordEdit'

const App = () => (
  <Admin dataProvider={restProvider('http://localhost:8080')}>
    <Resource name="daily-record" list={DailyRecord} create={DailyRecordCreate} edit={DailyRecordEdit} />
  </Admin >
);

export default App;
