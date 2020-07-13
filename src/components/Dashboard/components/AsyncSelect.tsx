import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';
import { params } from "../../../interfaces/type";

type Props = {
    name: string;
    options: any;
    onSelect: (key: string, value: string) => void;
    getOptions: (value: string) => void;
}

type State = {
    inputValue: string,
};

const Select: React.FC<Props> = (props: Props, state: State) => {
    const [inputValue, setInputValue] = useState<string>("");
    const [selectedValue, setSelectedValue] = useState<params>({ value: "", label: "" });

    const filtersOptions = () => {
        return (props.options && props.options.length > 0)
            ? props.options.map((option: any) => {
                return ({ value: option.name, label: option.name });
            })
            : [];
    }

    const loadOptions = (inputValue: string, callback: any) => {
        setTimeout(() => {
            callback(filtersOptions());
        }, 1000);
    };

    const handleInputChange = (newValue: string) => {
        const inputValue = newValue.replace(/\W/g, '');
        setInputValue(inputValue);
        props.getOptions(inputValue);
        return inputValue;
    };

    const handleSelect = (selected: any) => {
        setSelectedValue(selected);
        props.onSelect(props.name, selected.value);
    }

    return (
        <div className="select">
            <AsyncSelect
                cacheOptions
                loadOptions={loadOptions}
                defaultOptions
                value={selectedValue}
                onChange={handleSelect}
                onInputChange={handleInputChange}
            />
        </div>
    );
};

export default Select;
