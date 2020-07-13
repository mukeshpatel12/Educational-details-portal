import * as React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Input from "../../../../shared/Input";
import Label from "../../../../shared/Label";
import Button from "../../../../shared/Button";
import { Select } from "../AsyncSelect";
import { educationData } from "../../../../interfaces/type";

interface IProps {
    universities: any;
    handleToggle: () => void;
    getEducationDetails: (details: educationData) => void;
    getUniversities: (value: string) => void;
}

interface IState {
    formState: educationData;
}

type Props = IProps;

const ModalContent: React.FC<Props> = (props: Props, state: IState) => {
    const initialState = {
        university: "",
        startDate: null,
        endDate: null,
        degree: "",
        grade: "",
        field: "",
        description: ""
    };
    const [formState, setFormState] = useState(initialState);

    const onChangeValue = (key: string, value: string | Date) => {
        const updatedState = { ...formState, [key]: value };
        setFormState(updatedState);
    }

    const onSubmitValue = () => {
        props.getEducationDetails(formState);
        props.handleToggle();
    }

    return (
        <div>
            <h6 className='text-center ml-3'>Enter Your Educational Details</h6>
            <div className='col-lg-12'>
                <div className="row">
                    <div className="col-12">
                        <Label>Name of School</Label>
                        <Select name="university" onSelect={onChangeValue} options={props.universities} getOptions={props.getUniversities} />
                    </div>
                    <div className="col-12">
                        <Input type="text" name="degree" placeholder="Degree" value={formState.degree} onChange={(e) => { onChangeValue('degree', e.target.value) }} />
                    </div>
                    <div className="col-12">
                        <DatePicker name="startDate" placeholderText="Start Date" selected={formState.startDate} onChange={(date: Date) => { onChangeValue('startDate', date) }} />
                    </div>
                    <div className="col-12">
                        <DatePicker name="endDate" placeholderText="End Date" selected={formState.endDate} onChange={(date: Date) => { onChangeValue('endDate', date) }} />
                    </div>
                    <div className="col-12">
                        <Input type="text" name="grade" placeholder="Grade" value={formState.grade} onChange={(e) => { onChangeValue('grade', e.target.value) }} />
                    </div>
                    <div className="col-12">
                        <Input type="text" name="field" placeholder="Field" value={formState.field} onChange={(e) => { onChangeValue('field', e.target.value) }} />
                    </div>
                    <div className="col-12">
                        <Input type="text" name="description" placeholder="Description" value={formState.description} onChange={(e) => { onChangeValue('description', e.target.value) }} />
                    </div>
                </div>
            </div>
            <div className='text-center mt-3'>
                <Button onClick={onSubmitValue}>Submit</Button>
            </div>
        </div>
    );
};

export default ModalContent;
