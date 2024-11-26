import React, { useState } from "react";

const Stateful = (props) => {
    const [name, setName] = useState(props.name);
    const [email, setEmail] = useState(props.email);
    const [phone, setPhone] = useState(props.phone);

    return(
        <div>
        <h3>Teacher's Details</h3>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
      </div>
    )
}

export default Stateful;