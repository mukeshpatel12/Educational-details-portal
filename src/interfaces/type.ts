export interface educationData {
    university: string,
    startDate: Date | null,
    endDate: Date | null,
    degree: string,
    field: string,
    grade: string,
    description: string
}

export interface universitiesData {
    readonly data: educationData[];
    readonly errors: object;
    readonly universities: [];
}

export interface params {
    value: string,
    label: string
}

export interface users {
    readonly name: string;
}

export interface mainState {
    readonly educations: universitiesData
    readonly users: users
}
