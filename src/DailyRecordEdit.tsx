import { DateInput, Edit, NumberInput, SimpleForm, TextField } from 'react-admin'

const DailyRecordEdit = (props: any) => {

    return (
        <Edit title="modifie un record" {...props}>
            <SimpleForm>
                <TextField label="Id" source='id' />
                <DateInput label="Date" source='date' />
                <NumberInput label="Total" source='total' />
            </SimpleForm>
        </Edit>
    )
}

export default DailyRecordEdit;