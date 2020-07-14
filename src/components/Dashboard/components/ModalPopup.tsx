import * as React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Input from "../../../shared/Input";
import Label from "../../../shared/Label";
import Button from "../../../shared/Button";
import { educationData } from "../../../interfaces/type";
import AsyncSelectBox from "./AsyncSelect";

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

const Modal: React.FC<Props> = (props: Props, state: IState) => {
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
                    <div className="col-lg-12">
                        <Label>Name of School</Label>
                        <AsyncSelectBox name="university" onSelect={onChangeValue} options={props.universities} getOptionsValue={props.getUniversities} />
                    </div>
                    <div className="col-lg-12">
                        <Input type="text" name="degree" maxLength={20} placeholder="Degree" value={formState.degree} onChange={(e) => { onChangeValue('degree', e.target.value) }} />
                    </div>
                    <div className="col-lg-12">
                        <Input type="text" name="field" maxLength={30} placeholder="Field of Study" value={formState.field} onChange={(e) => { onChangeValue('field', e.target.value) }} />
                    </div>
                    <div className="col-lg-12">
                        <DatePicker name="startDate" placeholderText="Start Date" maxDate={new Date()} selected={formState.startDate} onChange={(date: Date) => { onChangeValue('startDate', date) }} />
                    </div>
                    <div className="col-lg-12">
                        <DatePicker name="endDate" placeholderText="End Date" minDate={formState.startDate} selected={formState.endDate} onChange={(date: Date) => { onChangeValue('endDate', date) }} />
                    </div>
                    <div className="col-lg-12">
                        <Input type="text" name="grade" maxLength={20} placeholder="Grade" value={formState.grade} onChange={(e) => { onChangeValue('grade', e.target.value) }} />
                    </div>
                    <div className="col-lg-12">
                        <Input type="text" name="description" maxLength={50} placeholder="Description" value={formState.description} onChange={(e) => { onChangeValue('description', e.target.value) }} />
                    </div>
                </div>
            </div>
            <div className='text-center mrt-1'>
                <Button onClick={onSubmitValue} disabled={(formState.degree.length && formState.field.length && formState.grade.length && formState.description.length) === 0}>Submit</Button>
            </div>
        </div>
    );
};

export default Modal;
