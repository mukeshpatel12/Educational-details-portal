import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';
import { params } from "../../../interfaces/type";

type Props = {
    name: string;
    options: any;
    onSelect: (key: string, value: string) => void;
    getOptionsValue: (value: string) => void;
}

const AsyncSelectBox: React.FC<Props> = (props: Props) => {
    const [selectValue, setSelectValue] = useState<string>("");
    const [value, setValue] = useState<params>({ getVal: "", getLabel: "" });

    const getAsyncOptions = (inputValue: string, callbck: any) => {
        setTimeout(() => {
            callbck(filtersOptions());
        }, 1000);
    };

    const filtersOptions = () => {
        return (props.options && props.options.length > 0)
            ? props.options.map((option: any) => { return ({ value: option.name, label: option.name }); }) : [];
    }

    const onChangeInput = (val: any) => {
        setSelectValue(val.replace(/\W/g, ''));
        props.getOptionsValue(val.replace(/\W/g, ''));
        return val.replace(/\W/g, '');
    };

    const onChangeSelect = (selected: any) => {
        setValue(selected);
        props.onSelect(props.name, selected.value);
    }

    return (
        <div className="async">
            <AsyncSelect cacheOptions loadOptions={getAsyncOptions} value={value} onChange={onChangeSelect} onInputChange={onChangeInput} defaultOptions />
        </div>
    );
};

export default AsyncSelectBox;
