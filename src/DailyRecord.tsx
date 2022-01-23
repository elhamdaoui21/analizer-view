import { Datagrid, DateField, DeleteButton, EditButton, List, TextField } from 'react-admin'

const DailyRecord = (props: any) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source='id' />
                <DateField source='date' />
                <TextField source='total' />
                <EditButton />
                <DeleteButton />
            </Datagrid>
        </List>
    )
}

export default DailyRecord;