import './App.css';
import React from 'react'
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: { name: "", phone: "", email: "" },
            studentList: [],
            isValid: false,
            indexSelected: -1
        }
    }
    handleChange = (event) => {
        this.setState((state) => {
            const form = state.form;
            form[event.target.name] = event.target.value;
            return { form };
        })
    }
    handleSubmit = () => {

        if (this.state.form.name && this.state.form.phone && this.state.form.email) {
            var newList = this.state.studentList.slice();
            if (this.state.indexSelected > -1) {
                newList.splice(this.state.indexSelected, 1);
                newList.push(this.state.form)
                this.setState({ studentList: newList })
            }
            else {
                newList.push(this.state.form);
                this.setState({ studentList: newList })
            }


        }
        this.setState({
            form: { name: "", phone: "", email: "" },
            indexSelected: -1
        })
    }
    handleSelect = (studentSelected, index) => {
        this.setState({
            form: JSON.parse(JSON.stringify(studentSelected)),
            indexSelected: index
        })
    }
    handleDelete = (index) => {
        this.setState({
            indexSelected: index
        })
        var newList = this.state.studentList;
        newList.splice(index,1);
        this.setState({
            studentList: newList
        })
    }
    render() {
        const studentList = this.state.studentList;
        const form = this.state.form;
        return (
            <div>
                <h1>Student List</h1>
                <div>
                    <label>Name: </label>
                    <input name="name" value={form.name} onChange={this.handleChange} />
                </div>
                <div>
                    <label>Phone: </label>
                    <input type="number" name="phone" value={form.phone} onChange={this.handleChange} />
                </div>
                <div>
                    <label>Email: </label>
                    <input name="email" value={form.email} onChange={this.handleChange} />
                </div>
                <button onClick={this.handleSubmit}>Submit</button>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Phone
                            </th>
                            <th>
                                Email
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentList.map((student, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        {student.name}
                                    </td>
                                    <td>
                                        {student.phone}
                                    </td>
                                    <td>
                                        {student.email}
                                    </td>
                                    <td>
                                        <button onClick={() => {
                                            this.handleSelect(studentList[index], index)
                                        }}>Edit</button>
                                        <button onClick={() => {this.handleDelete(index)}}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default App;
