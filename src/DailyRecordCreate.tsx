import { Create, DateInput, NumberInput, SimpleForm } from 'react-admin'

const DailyRecordCreate = (props: any) => {
    return (
        <Create title="ajouter un record" {...props}>
            <SimpleForm>
                <DateInput label="Date" source='date' />
                <NumberInput label="Total" source='total' />
            </SimpleForm>
        </Create>
    )
}

export default DailyRecordCreate;