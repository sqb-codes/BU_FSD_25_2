import { useState } from "react";
import "./Employee.styles.css";
import axios from  "axios";

export const Employee = ({team_list, addEmp}) => {

    const [newEmpData, setNewEmpData] = useState({
        empId: "",
        empName: "",
        teamName: "",
        empSkills: []
    });

    const changeHandler = (event) => {
        const key = event.target.name;
        const value = event.target.value;
        setNewEmpData({...newEmpData, [key]:value});
    }

    const addNewEmp = async () => {
        // addEmp(newEmpData);
        try {
            const ADD_EMP_URL = "http://localhost:9898/api/emp/create";
            await axios.post(ADD_EMP_URL, {...newEmpData});
        } catch (error) {
            console.log("Error while sending emp data to back-end");
        }
    }

    return (
        <div className="emp-wrapper">
            <h2>Add Employee</h2>
            <div className="form-group">
                <div className="input-group">
                    <label>Enter Emp ID</label>
                    <input
                        type="text"
                        placeholder="Enter Emp ID"
                        onChange={changeHandler}
                        name="empId"
                    />
                </div>
                
                <div className="input-group">
                    <label>Enter Emp Name</label>
                    <input
                        type="text"
                        placeholder="Enter Emp Name"
                        onChange={changeHandler}
                        name="empName"
                    />
                </div>

                <div className="input-group">
                    <label>Select Team</label>
                    <select name="teamName" onChange={changeHandler}>
                        <option value="">Select Team</option>
                        {team_list.map(obj => (
                            <option value={obj.teamName}>
                                {obj.team_name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="input-group">
                    <label>Enter Emp skills</label>
                    <input
                        type="text"
                        placeholder="Enter Emp Skills (comma separated)"
                        onChange={changeHandler}
                        name="empSkills"
                    />
                </div>

                <div className="btn-group">
                    <button onClick={addNewEmp}>Add Employee</button>
                </div>
            </div>
        </div>
    )
}