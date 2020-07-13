import * as React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import Button from "../../../../shared/Button";
import { setUserDetails } from "../../../../actions";
import { history } from "../../../../other/history";
import { mainState } from "../../../../interfaces/type";
import Input from "../../../../shared/Input";

type Props = ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps;

const mapStateToProps = (state: mainState) => ({
    details: state.users,
});

const mapDispatchToProps = {
    setUserDetails,
};

const Home: React.FC<Props> = (props: Props) => {
    const [name, setName] = useState<string>("");

    const login = () => {
        if (name !== "") {
            props.setUserDetails(name);
            history.push('/main');
        }
    }

    return (
        <div className="flex-column align-items-center">
            <Input name="username" placeholder="Please Enter your Name" value={name} onChange={(e: any) => { setName(e.target.value) }} />
            <Button className="mt-3" onClick={login}>Login</Button>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
